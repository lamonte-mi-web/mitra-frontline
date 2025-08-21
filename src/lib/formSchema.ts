// @/lib/classificationSchema.ts
import { z } from "zod";

export const classificationSchema = z.object({
  mitraType: z.enum(["B2C", "Dropshipper", "Reseller", "Mitra", "Distributor"]),
});

export const personalInfoSchema = z.object({
  nama: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  nikKtp: z.string().min(1),
  alamat: z.string().min(1),
  bod: z.string().optional(), // Can parse to Date later
  agama: z.enum(["Islam", "Kristen", "Hindu", "Buddha", "Konghucu", "Lainnya"]),
  pendapatanBulanan: z.number().min(0),
  pengeluaranBulanan: z.number().min(0),
  jumlahTanggungan: z.number().int().min(0),
});

export const companyProfileSchema = z.object({
  jenisPerusahaan: z.string().min(1), // Will map to lookup table
  namaPerusahaan: z.string().min(1),
  nib: z.string().optional(),
  skdu: z.string().optional(),
  npwp: z.string().optional(),
  nikDireksi: z.string().optional(),
  nikKomisaris: z.string().optional(),
  pengalaman: z.number().min(0),
  rataPenghasilan: z.number().min(0),
  buyPower: z.number().min(0),
  alamatUsaha: z.string().min(1),
});

export const paymentSchema = z.object({
  bank: z.string().min(1), // Will map to lookup table
  rekening: z.string().min(1),
  namaRekening: z.string().min(1),
});

export const extraSchema = z.object({
  cs: z.string().min(1), // Will map to lookup table
  tahuDari: z.string().min(1),
});

export const fullSchema = classificationSchema
  .merge(personalInfoSchema)
  .merge(companyProfileSchema)
  .merge(paymentSchema)
  .merge(extraSchema);

export type FormData = z.infer<typeof fullSchema>;