// /form/components/Step2.tsx
'use client';

import { useFormContext } from 'react-hook-form'; // Import useFormContext
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
    companies: { id: string; name: string }[];
    selectedMitraTypeName: string;
};

export default function Step2({ companies, selectedMitraTypeName }: Props) {
    const { control, watch, formState: { errors } } = useFormContext<FormData>(); // Use useFormContext

    const hideDocsFor = ["Retail", "Dropshipper", "Reseller"];
    const shouldHideDocs = hideDocsFor.includes(selectedMitraTypeName);

    return (
        <div className="space-y-4">
            <FormInput
                name="jenisPerusahaan"
                label="Jenis Perusahaan"
                type="select"
                options={companies.map((c) => ({ value: c.id, label: c.name })) || []}
                control={control}
                errors={errors}
            />

            <FormInput
                name="namaPerusahaan"
                label="Nama Perusahaan"
                control={control}
                errors={errors}
            />

            {!shouldHideDocs && (
                <>
                    <FormInput name="nib" label="Nomor NIB" control={control} errors={errors} />
                    <FormInput name="skdu" label="Nomor SKDU" control={control} errors={errors} />
                    <FormInput name="npwp" label="Nomor NPWP" control={control} errors={errors} />
                    <FormInput name="nikDireksi" label="Nomor KTP Direksi" control={control} errors={errors} />
                    <FormInput name="nikKomisaris" label="Nomor KTP Komisaris" control={control} errors={errors} />
                </>
            )}

            <FormInput
                name="pengalaman"
                label="Pengalaman Bisnis (Tahun)"
                type="number"
                min={0}
                step={1}
                control={control}
                errors={errors}
            />
            <FormInput
                name="rataPenghasilan"
                label="Rata-rata Penghasilan (Juta/Tahun)"
                type="number"
                min={0}
                step={1000}
                control={control}
                errors={errors}
            />
            <FormInput
                name="buyPower"
                label="Buy Power per Bulan (Juta)"
                type="number"
                min={0}
                step={1000}
                control={control}
                errors={errors}
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Usaha</label>
                <FormInput
                    name="alamatUsaha"
                    label=""
                    type="textarea"
                    control={control}
                    errors={errors}
                />
            </div>
        </div>
    );
}
