'use client';

import { Controller, Control, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

export default function Step4_Extra({ control, errors }: Props) {
  return (
    <div className="space-y-4">
      {/* Nama CS */}
      <div>
        <label className="block font-medium mb-1">Nama CS yang Melayani</label>
        <Controller
          name="cs"
          control={control}
          render={({ field }) => <input {...field} className="input w-full" />}
        />
        {typeof errors.cs?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.cs.message}</p>
        )}
      </div>

      {/* Tahu Lamonte dari Mana */}
      <div>
        <label className="block font-medium mb-1">Tahu Lamonte dari Mana</label>
        <Controller
          name="tahuDari"
          control={control}
          render={({ field }) => (
            <select {...field} className="input w-full">
              <option value="">-- Pilih Sumber --</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Sosial Media">Sosial Media</option>
              <option value="Artikel">Artikel</option>
              <option value="Marketplace">Marketplace</option>
              <option value="Teman/Referensi">Teman / Referensi</option>
            </select>
          )}
        />
        {typeof errors.tahuDari?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.tahuDari.message}</p>
        )}
      </div>
    </div>
  );
}
