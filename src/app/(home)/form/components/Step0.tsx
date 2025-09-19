'use client';

import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';
import { useEffect, useState } from 'react';

type MitraType = {
  id: string;
  name: string;
  description_id: string | null;
  description_en: string | null;
};

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
  mitraTypes: MitraType[];
};

export default function Step0({ control, errors, watch, mitraTypes }: Props) {
  const selectedMitraTypeId = watch("mitraType");
  const [selectedMitraTypeDescription, setSelectedMitraTypeDescription] = useState<string | null>(null);

  useEffect(() => {
    const currentMitraType = mitraTypes.find(mt => mt.id === selectedMitraTypeId);
    if (currentMitraType) {
      setSelectedMitraTypeDescription(currentMitraType.description_id);
      console.log(currentMitraType.description_id)
    } else {
      setSelectedMitraTypeDescription(null);
    }
  }, [selectedMitraTypeId, mitraTypes]);

  return (
    <div className="space-y-4">
      <FormInput
        name="mitraType"
        label="Daftar Sebagai"
        type="select"
        control={control}
        errors={errors}
        options={mitraTypes.map(mt => ({
          label: mt.name,
          value: mt.id,   // use UUID for DB consistency
        }))}
      />
      {selectedMitraTypeDescription && (
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-md text-sm">
          {selectedMitraTypeDescription}
        </div>
      )}
    </div>
  );
}
