'use client';

import { Controller, Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import { classificationSchema } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
};

export default function Step0({ control, errors, watch }: Props) {
    return (
        <div className="space-y-4">
            <FormInput
                name="mitraType"
                label="Daftar Sebagai"
                type="select"
                control={control}
                errors={errors}
                options={[
                    { label: 'B2C / Retail', value: 'B2C' },
                    { label: 'Dropshipper', value: 'Dropshipper' },
                    { label: 'Reseller', value: 'Reseller' },
                    { label: 'Mitra Agen', value: 'Mitra Agen' },
                    { label: 'Distributor', value: 'Distributor' },
                ]}
            />
        </div>
    );
}
