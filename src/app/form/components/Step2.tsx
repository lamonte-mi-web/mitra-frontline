'use client';

import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
};

export default function Step2({ control, errors, watch }: Props) {
  const mitraType = watch('mitraType');
  const isMitraOrDistributor = mitraType === 'Mitra' || mitraType === 'Distributor';

  return (
    <div className="space-y-4">

      <FormInput
        name="jenisPerusahaan"
        label="Jenis Perusahaan"
        type="select"
        options={[
          { label: 'PT', value: 'PT' },
          { label: 'CV', value: 'CV' },
          { label: 'UD', value: 'UD' },
          { label: 'Perorangan', value: 'Perorangan' },
          { label: 'Koperasi', value: 'Koperasi' },
          { label: 'Lainnya', value: 'Lainnya' },
        ]}
        control={control}
        errors={errors}
      />

      <FormInput name="namaPerusahaan" label="Nama Perusahaan" control={control} errors={errors} />

      {isMitraOrDistributor && (
        <>
          <FormInput name="nib" label="Nomor NIB" control={control} errors={errors} />
          <FormInput name="skdu" label="Nomor SKDU" control={control} errors={errors} />
          <FormInput name="npwp" label="Nomor NPWP" control={control} errors={errors} />
          <FormInput name="nikDireksi" label="Nomor KTP Direksi" control={control} errors={errors} />
          <FormInput name="nikKomisaris" label="Nomor KTP Komisaris" control={control} errors={errors} />
        </>
      )}

      <FormInput name="pengalaman" label="Pengalaman Bisnis (Tahun)" type="number" control={control} errors={errors} />
      <FormInput name="rataPenghasilan" label="Rata-rata Penghasilan (Juta/Tahun)" type="number" control={control} errors={errors} />
      <FormInput name="buyPower" label="Buy Power per Bulan (Juta)" type="number" control={control} errors={errors} />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Usaha</label>
        <FormInput name="alamatUsaha" label="" type="textarea" control={control} errors={errors} />
      </div>

    </div>
  );
}
