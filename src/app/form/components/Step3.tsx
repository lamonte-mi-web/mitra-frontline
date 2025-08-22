'use client';

import { Control, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  banks: { id: string; name: string }[]
};

export default function Step3({ control, errors, banks }: Props) {
  return (
    <div className="space-y-4">
      <FormInput type='select' name="bank" label="Nama Bank" control={control} errors={errors} options={banks.map((b) => ({ value: b.id, label: b.name }))} />
      <FormInput name="rekening" label="Nomor Rekening" control={control} errors={errors} />
      <FormInput name="namaRekening" label="Nama Akun" control={control} errors={errors} />
    </div>
  );
}
