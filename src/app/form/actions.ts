"use server";

import { supabaseServer } from "@/lib/supabase";
import { apiSchema, type APIFormData } from "@/lib/APIFormSchema";

const supabase = supabaseServer();

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
        const { data: mitraTypeRow, error: typeError } = await supabase
            .from("mitra_type")
            .select("name")
            .eq("id", formData.mitraType)
            .single();

        if (typeError || !mitraTypeRow) {
            return {
                success: false,
                error: { code: "MITRA_TYPE_NOT_FOUND", message: "Invalid mitraType ID" }
            };
        }

        const mitraTypeName = mitraTypeRow.name;
        const skipCompany = mitraTypeName === "B2C";
        const isMitraOrDistributor = ["Mitra", "Distributor"].includes(mitraTypeName);

        // 🔹 Fetch channel_id from source
        const { data: sourceRow, error: sourceError } = await supabase
            .from("lead_source")
            .select("channel_id")
            .eq("id", formData.tahuDari)
            .single();

        if (sourceError || !sourceRow) {
            return {
                success: false,
                error: { code: "SOURCE_NOT_FOUND", message: "Invalid source ID" }
            };
        }

        const leadChannelId = sourceRow.channel_id;

        // 1️⃣ Insert into mitra (parent)
        const { data: mitraRow, error: mitraError } = await supabase
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
            .single();

        if (mitraError || !mitraRow) {
            return {
                success: false,
                error: { code: "MITRA_INSERT_FAILED", message: mitraError?.message ?? "Failed to insert mitra" }
            };
        }

        const mitraId = mitraRow.id;

        // 2️⃣ Personal info
        const { error: personalError } = await supabase.from("mitra_personal").insert({
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
        });
        if (personalError) {
            return {
                success: false,
                error: { code: "PERSONAL_INSERT_FAILED", message: personalError.message }
            };
        }

        // 3️⃣ Company profile (optional)
        if (!skipCompany) {
            const { error: companyError } = await supabase.from("mitra_company").insert({
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
            });
            if (companyError) {
                return {
                    success: false,
                    error: { code: "COMPANY_INSERT_FAILED", message: companyError.message }
                };
            }
        }

        // 4️⃣ Payment
        const { error: paymentError } = await supabase.from("mitra_payment").insert({
            mitra_id: mitraId,
            bank_id: formData.bank,
            no_rekening: formData.rekening,
            nama_akun: formData.namaRekening,
        });
        if (paymentError) {
            return {
                success: false,
                error: { code: "PAYMENT_INSERT_FAILED", message: paymentError.message }
            };
        }

        // 5️⃣ Extra
        const { error: extraError } = await supabase.from("mitra_extra").insert({
            mitra_id: mitraId,
            cs_id: formData.cs,
            lead_channel_id: leadChannelId,
        });
        if (extraError) {
            return {
                success: false,
                error: { code: "EXTRA_INSERT_FAILED", message: extraError.message }
            };
        }

        return { success: true, mitraId };
    } catch (err: any) {
        console.error("InsertMitra failed:", err);
        return { success: false, error: { code: "UNKNOWN_ERROR", message: err.message || "Unknown error" } };
    }
}
