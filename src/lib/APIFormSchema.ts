// /lib/APIFormSchema.ts
import { z } from "zod";

export const apiSchema = z.object({
    mitraType: z.uuid(),
    leadSource: z.uuid("Sumber informasi wajib dipilih"),

    // Personal Info (made non-empty)
    nama: z.string().min(1, "Nama lengkap harus diisi"),
    email: z.email("Format email tidak valid"),
    phone: z.string().min(1, "Nomor WA harus diisi"),
    nikKtp: z.string().min(1, "NIK KTP harus diisi"),
    alamat: z.string().min(1, "Alamat harus diisi"),
    bod: z.string().optional(),
    gender: z.enum(["Laki-laki", "Perempuan"]).optional(),

    // Company Info (simplified optional field)
    jenisPerusahaan: z.preprocess(
        (val) => (val === "" ? null : val), // Change undefined to null for database compatibility
        z.uuid().nullable().optional() // Allow null explicitly
    ),
    namaPerusahaan: z.string().nullable().optional(), // Also allow null for consistency
    nib: z.string().nullable().optional(),
    skdu: z.string().nullable().optional(),
    npwp: z.string().nullable().optional(),
    nikDireksi: z.string().nullable().optional(),
    nikKomisaris: z.string().nullable().optional(),

    // Business Experience
    pengalaman: z.coerce.number().nonnegative().optional(),
    rataPenghasilan: z.coerce.number().nonnegative().optional(),
    buyPower: z.coerce.number().nonnegative().optional(),
    alamatUsaha: z.string().optional(),

    // Payment Info (made non-empty)
});

export type APIFormData = z.infer<typeof apiSchema>;
