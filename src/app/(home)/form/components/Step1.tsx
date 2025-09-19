'use client';

import { useFormContext } from 'react-hook-form'; // Import useFormContext
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {}; // No props needed

export default function Step1({}: Props) {
  const { control, watch, formState: { errors } } = useFormContext<FormData>(); // Use useFormContext
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
