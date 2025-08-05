'use client';

import { Controller, Control, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

export default function Step3_Payment({ control, errors }: Props) {
  return (
    <div className="space-y-4">
      {/* Bank */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Bank</label>
        <Controller
          name="bank"
          control={control}
          render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
        />
        {typeof errors.bank?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.bank.message}</p>
        )}
      </div>

      {/* Nomor Rekening */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Rekening</label>
        <Controller
          name="rekening"
          control={control}
          render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
        />
        {typeof errors.rekening?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.rekening.message}</p>
        )}
      </div>

      {/* Nama Akun */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Akun</label>
        <Controller
          name="namaRekening"
          control={control}
          render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
        />
        {typeof errors.namaRekening?.message === 'string' && (
          <p className="text-sm text-red-500 mt-1">{errors.namaRekening.message}</p>
        )}
      </div>
    </div>
  );
}
