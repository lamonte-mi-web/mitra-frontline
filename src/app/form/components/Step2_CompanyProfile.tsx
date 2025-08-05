'use client';

import {
  Controller,
  Control,
  FieldErrors,
  UseFormWatch,
} from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import LocationPicker from './LocationPicker';

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
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => field.onChange(e.target.files?.[0])}
            className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        )}
      />
      {typeof errors[name]?.message === 'string' && (
        <p className="text-sm text-red-500 mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Jenis Perusahaan Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jenis Perusahaan
          </label>
          <Controller
            name="jenisPerusahaan"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="">-- Pilih --</option>
                <option value="PT">PT</option>
                <option value="CV">CV</option>
                <option value="UD">UD</option>
                <option value="Perorangan">Perorangan</option>
                <option value="Koperasi">Koperasi</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            )}
          />
          {typeof errors.jenisPerusahaan?.message === 'string' && (
            <p className="text-sm text-red-500 mt-1">
              {errors.jenisPerusahaan.message}
            </p>
          )}
        </div>

        {/* Nama Perusahaan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Perusahaan
          </label>
          <Controller
            name="namaPerusahaan"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            )}
          />
          {typeof errors.namaPerusahaan?.message === 'string' && (
            <p className="text-sm text-red-500 mt-1">
              {errors.namaPerusahaan.message}
            </p>
          )}
        </div>
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Pengalaman Bisnis (Tahun)</label>
        <Controller
          name="pengalaman"
          control={control}
          render={({ field }) => (
            <input {...field} type="number" className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
          )}
        />
        {typeof errors.pengalaman?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.pengalaman.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Rata-rata Penghasilan (Juta/Tahun)</label>
        <Controller
          name="penghasilan"
          control={control}
          render={({ field }) => (
            <input {...field} type="number" className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
          )}
        />
        {typeof errors.penghasilan?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.penghasilan.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Buy Power per Bulan (Juta)</label>
        <Controller
          name="buyPower"
          control={control}
          render={({ field }) => (
            <input {...field} type="number" className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
          )}
        />
        {typeof errors.buyPower?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.buyPower.message}</p>
        )}
      </div>

      {/* Dropdowns */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Produk Paling Diminati</label>
        <Controller
          name="kategoriProduk"
          control={control}
          render={({ field }) => (
            <select {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
              <option value="">-- Pilih --</option>
              <option value="Bayi">Baju Bayi</option>
              <option value="Anak Laki-Laki">Anak Laki-Laki</option>
              <option value="Anak Perempuan">Anak Perempuan</option>
              <option value="Muslim">Baju Muslim Anak</option>
            </select>
          )}
        />
        {typeof errors.kategoriProduk?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.kategoriProduk.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Paket Usaha yang Dibeli</label>
        <Controller
          name="paket"
          control={control}
          render={({ field }) => (
            <select {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
              <option value="">-- Pilih Paket --</option>
              <option value="Basic">Basic</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          )}
        />
        {typeof errors.paket?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.paket.message}</p>
        )}
      </div>

      <Controller
        name="alamatUsaha"
        control={control}
        render={({ field }) => (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat Usaha (Klik di Peta)
            </label>
            <textarea
              {...field}
              rows={2}
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <LocationPicker
              onSelectLocation={(address, lat, lng) => field.onChange(address)}
            />
          </>
        )}
      />
      {typeof errors.alamatUsaha?.message === 'string' && (
        <p className="text-sm text-red-500 mt-1">{errors.alamatUsaha.message}</p>
      )}
    </div>
  );
}
