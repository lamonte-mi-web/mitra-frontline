// src/lib/formSchema.ts
import { z } from "zod";

export const personalInfoSchema = z.object({
  mitraType: z.enum(["Retail", "Dropshipper", "Reseller", "Mitra Agen", "Distributor"]),
  nama: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  ktpFile: z.any(), // File
  kkFile: z.any(),
  alamat: z.string().min(1),
});

export const companyProfileSchema = z.object({
  jenisPerusahaan: z.string().min(1),
  namaPerusahaan: z.string().min(1),
  nibFile: z.any().optional(),
  skduFile: z.any().optional(),
  npwpFile: z.any().optional(),
  ktpDireksiFile: z.any().optional(),
  ktpKomisarisFile: z.any().optional(),
  pengalaman: z.string().min(1),
  penghasilan: z.string().min(1),
  buyPower: z.string().min(1),
  kategoriProduk: z.string().min(1),
  paket: z.string().min(1),
  alamatUsaha: z.string().min(1),
});

export const paymentSchema = z.object({
  bank: z.string().min(1),
  rekening: z.string().min(1),
  namaRekening: z.string().min(1),
});

export const extraSchema = z.object({
  cs: z.string().min(1),
  tahuDari: z.string().min(1),
});

export const fullSchema = personalInfoSchema
  .merge(companyProfileSchema)
  .merge(paymentSchema)
  .merge(extraSchema);

export type FormData = z.infer<typeof fullSchema>;
