// /form/components/Step2.tsx
'use client';

import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
    watch: UseFormWatch<FormData>; // watch is still useful if you have logic *within* this step
    companies: { id: string; name: string }[];
    // UPDATED: Receive this as a prop
    selectedMitraTypeName: string;
};

export default function Step2({ control, errors, watch, companies, selectedMitraTypeName }: Props) {
    // REMOVED: No need to watch and find the name here anymore.

    const hideDocsFor = ["B2C", "Dropshipper", "Reseller"];
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