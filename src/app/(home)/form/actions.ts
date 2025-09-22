"use server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { apiSchema, type APIFormData } from "@/lib/APIFormSchema";

const supabase = supabaseAdmin();

export async function insertMitraAction(data: APIFormData, createdBy: string) {
    // ✅ 1. Validate incoming data with Zod
    console.log("3. Data received in server action:", data);
    const parsed = apiSchema.safeParse(data);
    console.log("4. Zod parsing result:", parsed);

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
        // 🚀 2. Call the database function, ensuring all optional params default to null
        // Kode ini sekarang akan berjalan tanpa error TypeScript
        const { data: newMitraId, error } = await supabase.rpc("create_full_mitra", {
            p_mitra_type_id: formData.mitraType,
            p_lead_source_id: formData.leadSource,
            p_created_by: createdBy,
            p_nama: formData.nama,
            p_email: formData.email,
            p_no_wa: formData.phone,
            p_nik_ktp: formData.nikKtp,
            p_alamat_domisili: formData.alamat,
            p_gender: formData.gender || undefined,
            p_bod: formData.bod || undefined,
            p_jenis_perusahaan_id: formData.jenisPerusahaan || undefined,
            p_nama_perusahaan: formData.namaPerusahaan || undefined,
            p_nib: formData.nib || undefined,
            p_skdu: formData.skdu || undefined,
            p_npwp: formData.npwp || undefined,
            p_nik_direksi: formData.nikDireksi || undefined,
            p_nik_komisaris: formData.nikKomisaris || undefined,
            p_pengalaman_bisnis_tahun: formData.pengalaman || undefined,
            p_rata_penghasilan_tahun: formData.rataPenghasilan || undefined,
            p_buy_power_bulanan: formData.buyPower || undefined,
            p_alamat_usaha: formData.alamatUsaha || undefined,
        });

        if (error) {
            throw new Error(error.message);
        }

        return { success: true, mitraId: newMitraId };

    } catch (err: any) {
        console.error("InsertMitra RPC failed:", err);
        return {
            success: false,
            error: { code: "TRANSACTION_ERROR", message: err.message || "Unknown database error" },
        };
    }
}
