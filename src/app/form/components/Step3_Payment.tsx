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
        <label className="block font-medium mb-1">Nama Bank</label>
        <Controller
          name="bank"
          control={control}
          render={({ field }) => <input {...field} className="input w-full" />}
        />
        {typeof errors.bank?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.bank.message}</p>
        )}
      </div>

      {/* Nomor Rekening */}
      <div>
        <label className="block font-medium mb-1">Nomor Rekening</label>
        <Controller
          name="rekening"
          control={control}
          render={({ field }) => <input {...field} className="input w-full" />}
        />
        {typeof errors.rekening?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.rekening.message}</p>
        )}
      </div>

      {/* Nama Akun */}
      <div>
        <label className="block font-medium mb-1">Nama Akun</label>
        <Controller
          name="namaRekening"
          control={control}
          render={({ field }) => <input {...field} className="input w-full" />}
        />
        {typeof errors.namaRekening?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.namaRekening.message}</p>
        )}
      </div>
    </div>
  );
}
