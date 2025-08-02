'use client';

import {
  Controller,
  Control,
  FieldErrors,
  UseFormWatch,
} from 'react-hook-form';
import { FormData } from '@/lib/formSchema';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
};

export default function Step2_CompanyProfile({ control, errors, watch }: Props) {
  const mitraType = watch('mitraType');
  const isMitraOrDistributor = mitraType === 'Mitra Agen' || mitraType === 'Distributor';

  const fileInput = (
    name: keyof FormData,
    label: string,
    required: boolean = false,
  ) => (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => field.onChange(e.target.files?.[0])}
            className="input w-full"
          />
        )}
      />
      {typeof errors[name]?.message === 'string' && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Jenis Perusahaan */}
      <div>
        <label className="block font-medium mb-1">Jenis Perusahaan</label>
        <Controller
          name="jenisPerusahaan"
          control={control}
          render={({ field }) => (
            <input {...field} className="input w-full" />
          )}
        />
        {typeof errors.jenisPerusahaan?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.jenisPerusahaan.message}</p>
        )}
      </div>

      {/* Nama Perusahaan */}
      <div>
        <label className="block font-medium mb-1">Nama Perusahaan</label>
        <Controller
          name="namaPerusahaan"
          control={control}
          render={({ field }) => (
            <input {...field} className="input w-full" />
          )}
        />
        {typeof errors.namaPerusahaan?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.namaPerusahaan.message}</p>
        )}
      </div>

      {/* Conditional uploads for Mitra & Distributor */}
      {isMitraOrDistributor &&
        <>
          {fileInput("nibFile", "Upload NIB", true)}
          {fileInput("skduFile", "Upload SKDU", true)}
          {fileInput("npwpFile", "Upload NPWP", true)}
          {fileInput("ktpDireksiFile", "Upload KTP Direksi", true)}
          {fileInput("ktpKomisarisFile", "Upload KTP Komisaris", true)}
        </>
      }

      {/* Experience & Financials */}
      <div>
        <label className="block font-medium mb-1">Pengalaman Bisnis (Tahun)</label>
        <Controller
          name="pengalaman"
          control={control}
          render={({ field }) => (
            <input {...field} type="number" className="input w-full" />
          )}
        />
        {typeof errors.pengalaman?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.pengalaman.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Rata-rata Penghasilan (Juta/Tahun)</label>
        <Controller
          name="penghasilan"
          control={control}
          render={({ field }) => (
            <input {...field} type="number" className="input w-full" />
          )}
        />
        {typeof errors.penghasilan?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.penghasilan.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Buy Power per Bulan (Juta)</label>
        <Controller
          name="buyPower"
          control={control}
          render={({ field }) => (
            <input {...field} type="number" className="input w-full" />
          )}
        />
        {typeof errors.buyPower?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.buyPower.message}</p>
        )}
      </div>

      {/* Dropdowns */}
      <div>
        <label className="block font-medium mb-1">Kategori Produk Paling Diminati</label>
        <Controller
          name="kategoriProduk"
          control={control}
          render={({ field }) => (
            <select {...field} className="input w-full">
              <option value="">-- Pilih --</option>
              <option value="Bayi">Baju Bayi</option>
              <option value="Anak Laki-Laki">Anak Laki-Laki</option>
              <option value="Anak Perempuan">Anak Perempuan</option>
              <option value="Muslim">Baju Muslim Anak</option>
            </select>
          )}
        />
        {typeof errors.kategoriProduk?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.kategoriProduk.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Paket Usaha yang Dibeli</label>
        <Controller
          name="paket"
          control={control}
          render={({ field }) => (
            <select {...field} className="input w-full">
              <option value="">-- Pilih Paket --</option>
              <option value="Basic">Basic</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          )}
        />
        {typeof errors.paket?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.paket.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Alamat Usaha</label>
        <Controller
          name="alamatUsaha"
          control={control}
          render={({ field }) => <textarea {...field} className="input w-full" />}
        />
        {typeof errors.alamatUsaha?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.alamatUsaha.message}</p>
        )}
      </div>
    </div>
  );
}
