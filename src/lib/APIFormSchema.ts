// /lib/APIFormSchema.ts
import { z } from "zod";

export const apiSchema = z.object({
    mitraType: z.uuid(),

    // Personal Info (made non-empty)
    nama: z.string().min(1, "Nama lengkap harus diisi"),
    email: z.email("Format email tidak valid"),
    phone: z.string().min(1, "Nomor WA harus diisi"),
    nikKtp: z.string().min(1, "NIK KTP harus diisi"),
    alamat: z.string().min(1, "Alamat harus diisi"),
    bod: z.string().optional(),
    agama: z.uuid(),

    // Financials
    pendapatanBulanan: z.coerce.number().nonnegative(),
    pengeluaranBulanan: z.coerce.number().nonnegative(),
    jumlahTanggungan: z.coerce.number().nonnegative(),

    // Company Info (simplified optional field)
    jenisPerusahaan: z.preprocess(
        (val) => (val === "" ? undefined : val),
        z.uuid().optional()
    ),
    namaPerusahaan: z.string().optional(),
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
    bank: z.uuid(),
    rekening: z.string().min(1, "Nomor rekening harus diisi"),
    namaRekening: z.string().min(1, "Nama akun harus diisi"),

    // Extra Info
    cs: z.uuid(),
    tahuDari: z.uuid(),
});

export type APIFormData = z.infer<typeof apiSchema>;