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
  agama: z.string().min(1, "Agama wajib dipilih"),

  // keep them as string for form
  pendapatanBulanan: z.string().min(1, "Pendapatan bulanan wajib diisi"),
  pengeluaranBulanan: z.string().min(1, "Pengeluaran bulanan wajib diisi"),
  jumlahTanggungan: z.string().min(1, "Jumlah tanggungan wajib diisi"),
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

export const paymentSchema = z.object({
  bank: z.string().min(1, "Bank wajib dipilih"),
  rekening: z.string().min(1, "Nomor rekening wajib diisi"),
  namaRekening: z.string().min(1, "Nama pemilik rekening wajib diisi"),
});

export const extraSchema = z.object({
  cs: z.string().min(1, "Customer service wajib dipilih"),
  tahuDari: z.string().min(1, "Sumber informasi wajib dipilih"),
});

export const fullSchema = classificationSchema
  .merge(personalInfoSchema)
  .merge(companyProfileSchema)
  .merge(paymentSchema)
  .merge(extraSchema);

export type FormData = z.infer<typeof fullSchema>;
