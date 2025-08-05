'use client';

import { Controller, Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';

import LocationPicker from './LocationPicker';

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
        <label className="block text-sm font-medium text-gray-700 mb-1">Daftar Sebagai</label>
        <Controller
          name="mitraType"
          control={control}
          render={({ field }) => (
            <select {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
              <option value="">-- Pilih Jenis Mitra --</option>
              <option value="Reseller">Reseller</option>
              <option value="Mitra Agen">Mitra Agen</option>
              <option value="Distributor">Distributor</option>
            </select>
          )}
        />
        {errors.mitraType && <p className="text-sm text-red-500 mt-1">{errors.mitraType.message}</p>}
      </div>

      {/* Nama */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
        <Controller
          name="nama"
          control={control}
          render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
        />
        {errors.nama && <p className="text-sm text-red-500 mt-1">{errors.nama.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} type="email" className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
        />
        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
      </div>

      {/* KTP Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload KTP</label>
        <Controller
          name="ktpFile"
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
        {typeof errors.ktpFile?.message === "string" && (
          <p className="text-sm text-red-500 mt-1">{errors.ktpFile.message}</p>
        )}

      </div>

      {/* KK Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload KK</label>
        <Controller
          name="kkFile"
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
        {typeof errors.kkFile?.message === "string" && (
          <p className="text-sm text-red-500 mt-1">{errors.kkFile.message}</p>
        )}
      </div>

      <Controller
        name="alamat"
        control={control}
        render={({ field }) => (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat (Klik di Peta)
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
