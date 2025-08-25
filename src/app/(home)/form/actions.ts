// /app/(home)/form/action.ts
"use server";

import { supabaseAdmin } from "@/lib/supabaseAdmin"
import { apiSchema, type APIFormData } from "@/lib/APIFormSchema";

const supabase = supabaseAdmin();

// Helper with strong type narrowing
// Stronger helper: TS knows data cannot be null anymore
function assertNoError<T>(
    res: { data: T | null; error: any },
    code: string
): NonNullable<T> {
    if (res.error || !res.data) {
        throw new Error(
            JSON.stringify({ code, message: res.error?.message ?? "Unknown error" })
        );
    }
    return res.data;
}



export async function insertMitraAction(data: APIFormData, createdBy: string) {
    // ✅ Validate incoming data with Zod
    const parsed = apiSchema.safeParse(data);
    if (!parsed.success) {
        return {
            success: false,
            error: {
                code: "VALIDATION_ERROR",
                message: parsed.error.flatten().fieldErrors,
            },
        };
    }

    const formData = parsed.data;

    try {
        // 🔹 Fetch mitra type name
        const mitraTypeRow = assertNoError<{ name: string }>(
            await supabase
                .from("mitra_type")
                .select("name")
                .eq("id", formData.mitraType)
                .single(),
            "MITRA_TYPE_NOT_FOUND"
        );

        const mitraTypeName = mitraTypeRow.name;
        const skipCompany = mitraTypeName === "B2C";
        const isMitraOrDistributor = ["Mitra", "Distributor"].includes(mitraTypeName);

        // 🔹 Fetch channel_id from source
        const sourceRow = assertNoError<{ channel_id: string }>(
            await supabase
                .from("lead_source")
                .select("channel_id")
                .eq("id", formData.tahuDari)
                .single(),
            "SOURCE_NOT_FOUND"
        );
        const leadChannelId = sourceRow.channel_id;

        // 🚀 Start inserts (could be wrapped in SQL transaction instead of TS)
        const mitraRow = assertNoError<{ id: string }>(
            await supabase
                .from("mitra")
                .insert({
                    mitra_type_id: formData.mitraType,
                    cs_id: formData.cs,
                    lead_channel_id: leadChannelId,
                    lead_source_id: formData.tahuDari,
                    created_by: createdBy,
                    is_active: true,
                })
                .select("id")
                .single(),
            "MITRA_INSERT_FAILED"
        );
        const mitraId = mitraRow.id;

        // 2️⃣ Personal info
        assertNoError(
            await supabase.from("mitra_personal").insert({
                mitra_id: mitraId,
                nama: formData.nama,
                email: formData.email,
                no_wa: formData.phone,
                nik_ktp: formData.nikKtp,
                alamat_domisili: formData.alamat,
                bod: formData.bod ? new Date(formData.bod) : null,
                agama_id: formData.agama,
                pendapatan_bulanan: Number(formData.pendapatanBulanan),
                pengeluaran_bulanan: Number(formData.pengeluaranBulanan),
                jumlah_tanggungan: Number(formData.jumlahTanggungan),
            }),
            "PERSONAL_INSERT_FAILED"
        );

        // 3️⃣ Company profile (optional)
        if (!skipCompany) {
            assertNoError(
                await supabase.from("mitra_company").insert({
                    mitra_id: mitraId,
                    jenis_perusahaan_id: formData.jenisPerusahaan,
                    nama_perusahaan: formData.namaPerusahaan || null,
                    nib: isMitraOrDistributor ? formData.nib : null,
                    skdu: isMitraOrDistributor ? formData.skdu : null,
                    npwp: isMitraOrDistributor ? formData.npwp : null,
                    nik_direksi: isMitraOrDistributor ? formData.nikDireksi : null,
                    nik_komisaris: isMitraOrDistributor ? formData.nikKomisaris : null,
                    pengalaman_bisnis_tahun: formData.pengalaman ? Number(formData.pengalaman) : null,
                    rata_penghasilan_tahun: formData.rataPenghasilan ? Number(formData.rataPenghasilan) : null,
                    buy_power_bulanan: formData.buyPower ? Number(formData.buyPower) : null,
                    alamat_usaha: formData.alamatUsaha || null,
                }),
                "COMPANY_INSERT_FAILED"
            );
        }

        // 4️⃣ Payment
        assertNoError(
            await supabase.from("mitra_payment").insert({
                mitra_id: mitraId,
                bank_id: formData.bank,
                no_rekening: formData.rekening,
                nama_akun: formData.namaRekening,
            }),
            "PAYMENT_INSERT_FAILED"
        );

        // 5️⃣ Extra
        assertNoError(
            await supabase.from("mitra_extra").insert({
                mitra_id: mitraId,
                cs_id: formData.cs,
                lead_channel_id: leadChannelId,
            }),
            "EXTRA_INSERT_FAILED"
        );

        return { success: true, mitraId };
    } catch (err: any) {
        console.error("InsertMitra failed:", err);
        try {
            const parsedErr = JSON.parse(err.message);
            return { success: false, error: parsedErr };
        } catch {
            return {
                success: false,
                error: { code: "UNKNOWN_ERROR", message: err.message || "Unknown error" },
            };
        }
    }
}
