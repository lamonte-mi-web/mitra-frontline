import { z } from "zod";

export const apiSchema = z.object({
    mitraType: z.uuid(),

    nama: z.string(),
    email: z.email(),
    phone: z.string(),
    nikKtp: z.string(),
    alamat: z.string(),
    bod: z.string().optional(),
    agama: z.uuid(),

    pendapatanBulanan: z.coerce.number().nonnegative(),
    pengeluaranBulanan: z.coerce.number().nonnegative(),
    jumlahTanggungan: z.coerce.number().nonnegative(),

    jenisPerusahaan: z.uuid().optional().or(z.literal('')),
    namaPerusahaan: z.string().optional(),
    nib: z.string().nullable().optional(),
    skdu: z.string().nullable().optional(),
    npwp: z.string().nullable().optional(),
    nikDireksi: z.string().nullable().optional(),
    nikKomisaris: z.string().nullable().optional(),

    pengalaman: z.coerce.number().nonnegative().optional(),
    rataPenghasilan: z.coerce.number().nonnegative().optional(),
    buyPower: z.coerce.number().nonnegative().optional(),
    alamatUsaha: z.string().optional(),

    bank: z.uuid(),
    rekening: z.string(),
    namaRekening: z.string(),

    cs: z.uuid(),
    tahuDari: z.uuid(),
});

export type APIFormData = z.infer<typeof apiSchema>;
