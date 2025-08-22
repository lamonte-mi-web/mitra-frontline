'use client';

import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
  agama: { id: string; name: string }[];
};

export default function Step1({ control, errors, watch, agama }: Props) {
  const mitraType = watch('mitraType');

  return (
    <div className="space-y-4">
      <FormInput name="nama" label="Nama Lengkap" control={control} errors={errors} />
      <FormInput name="email" label="Email" type="email" control={control} errors={errors} />
      <FormInput name="phone" label="Nomor WA Aktif" control={control} errors={errors} />
      <FormInput name="nikKtp" label="NIK KTP" control={control} errors={errors} />
      <FormInput name="alamat" label="Alamat Domisili" type="textarea" control={control} errors={errors} />

      <div className="grid grid-cols-2 gap-4">
        <FormInput name="bod" label="Tanggal Lahir" type="date" control={control} errors={errors} />
        <FormInput type='select' name="agama" label="Agama" control={control} errors={errors} options={agama?.map((a) => ({ label: a.name, value: a.id })) || []} />
        <FormInput name="pendapatanBulanan" label="Pendapatan Bulanan (Rp)" type="number" min={0} step={1000} control={control} errors={errors} />
        <FormInput name="pengeluaranBulanan" label="Pengeluaran Bulanan (Rp)" type="number" min={0} step={1000} control={control} errors={errors} />
        <FormInput name="jumlahTanggungan" label="Jumlah Tanggungan" type="number" min={0} control={control} errors={errors} />
      </div>
    </div>
  );
}
