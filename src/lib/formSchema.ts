// @/lib/classificationSchema.ts
import { z } from "zod";

export const classificationSchema = z.object({
  mitraType: z.uuid("Jenis mitra wajib dipilih"),
});

export const leadSourceSchema = z.object({
  leadSource: z.uuid("Sumber informasi wajib dipilih"),
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


export const fullSchema = classificationSchema
  .merge(leadSourceSchema)
  .merge(personalInfoSchema)
  .merge(companyProfileSchema)

export type FormData = z.infer<typeof fullSchema>;
