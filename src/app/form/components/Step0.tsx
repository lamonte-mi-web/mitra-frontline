'use client';

import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
  mitraTypes: { id: string; name: string }[];
};

export default function Step0({ control, errors, watch, mitraTypes }: Props) {
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
    </div>
  );
}
