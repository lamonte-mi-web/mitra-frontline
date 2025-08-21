'use client';

import { Control, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
};

export default function Step4_Extra({ control, errors }: Props) {
    return (
        <div className="space-y-4">
            {/* Nama CS */}
            <FormInput name="cs" label="Nama CS yang Melayani" control={control} errors={errors} />

            {/* Tahu Lamonte dari Mana */}
            <FormInput
                name="tahuDari"
                label="Tahu Lamonte dari Mana"
                control={control}
                errors={errors}
                type="select"
                options={[
                    { label: "Google Ads", value: "Google Ads" },
                    { label: "Sosial Media", value: "Sosial Media" },
                    { label: "Artikel", value: "Artikel" },
                    { label: "Marketplace", value: "Marketplace" },
                    { label: "Teman / Referensi", value: "Teman/Referensi" },
                ]}
            />
        </div>
    );
}
