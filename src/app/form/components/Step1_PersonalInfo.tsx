'use client';

import { Controller, Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
};

export default function Step1_PersonalInfo({ control, errors, watch }: Props) {
  const mitraType = watch('mitraType');

  return (
    <div className="space-y-4">
      {/* Mitra Type Dropdown */}
      <div>
        <label className="block font-medium mb-1">Daftar Sebagai</label>
        <Controller
          name="mitraType"
          control={control}
          render={({ field }) => (
            <select {...field} className="input w-full">
              <option value="">-- Pilih Jenis Mitra --</option>
              <option value="Reseller">Reseller</option>
              <option value="Mitra Agen">Mitra Agen</option>
              <option value="Distributor">Distributor</option>
            </select>
          )}
        />
        {errors.mitraType && <p className="text-red-500 text-sm">{errors.mitraType.message}</p>}
      </div>

      {/* Nama */}
      <div>
        <label className="block font-medium mb-1">Nama Lengkap</label>
        <Controller
          name="nama"
          control={control}
          render={({ field }) => <input {...field} className="input w-full" />}
        />
        {errors.nama && <p className="text-red-500 text-sm">{errors.nama.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium mb-1">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} type="email" className="input w-full" />}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block font-medium mb-1">Nomor Telepon</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <input {...field} className="input w-full" />}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      {/* KTP Upload */}
      <div>
        <label className="block font-medium mb-1">Upload KTP</label>
        <Controller
          name="ktpFile"
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
        {typeof errors.ktpFile?.message === "string" && (
          <p className="text-red-500 text-sm">{errors.ktpFile.message}</p>
        )}

      </div>

      {/* KK Upload */}
      <div>
        <label className="block font-medium mb-1">Upload KK</label>
        <Controller
          name="kkFile"
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
        {typeof errors.kkFile?.message === "string" && (
          <p className="text-red-500 text-sm">{errors.kkFile.message}</p>
        )}
      </div>

      {/* Alamat Domisili */}
      <div>
        <label className="block font-medium mb-1">Alamat Domisili</label>
        <Controller
          name="alamat"
          control={control}
          render={({ field }) => <textarea {...field} className="input w-full" />}
        />
        {errors.alamat && <p className="text-red-500 text-sm">{errors.alamat.message}</p>}
      </div>
    </div>
  );
}
