// @/lib/classificationSchema.ts
import { z } from "zod";

export const classificationSchema = z.object({
  mitraType: z.string().min(1, "Jenis mitra wajib dipilih"),
});

export const personalInfoSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
  nikKtp: z.string().min(1, "NIK KTP wajib diisi"),
  alamat: z.string().min(1, "Alamat wajib diisi"),
  bod: z.string().optional(),
});

export const companyProfileSchema = z.object({
  jenisPerusahaan: z.string().optional(),
  namaPerusahaan: z.string().optional(),
  nib: z.string().optional(),
  skdu: z.string().optional(),
  npwp: z.string().optional(),
  nikDireksi: z.string().optional(),
  nikKomisaris: z.string().optional(),

  pengalaman: z.string().optional(),
  rataPenghasilan: z.string().optional(),
  buyPower: z.string().optional(),
  alamatUsaha: z.string().optional(),
});

export const extraSchema = z.object({
  cs: z.string().min(1, "Customer service wajib dipilih"),
  tahuDari: z.string().min(1, "Sumber informasi wajib dipilih"),
  channel: z.string().optional(),
});

export const fullSchema = classificationSchema
  .merge(personalInfoSchema)
  .merge(companyProfileSchema)
  .merge(extraSchema);

export type FormData = z.infer<typeof fullSchema>;
