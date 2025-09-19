'use client';

import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
};

export default function Step1({ control, errors, watch }: Props) {
  const mitraType = watch('mitraType');

  return (
    <div className="space-y-4">
      <FormInput name="nama" label="Nama Lengkap" control={control} errors={errors} />
      <FormInput name="email" label="Email" type="email" control={control} errors={errors} />
      <FormInput name="phone" label="Nomor WA Aktif" control={control} errors={errors} />
      <FormInput name="nikKtp" label="NIK KTP" control={control} errors={errors} />
      <FormInput name="alamat" label="Alamat Domisili" type="textarea" control={control} errors={errors} />
      <FormInput name="bod" label="Tanggal Lahir" type="date" control={control} errors={errors} />
    </div>
  );
}
