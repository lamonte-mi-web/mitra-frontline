'use client';

import { Control, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';

type Props = {
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
    csStaff: { id: string; name: string; phone: string }[];
    channels: { id: string; name: string }[];
    sources: { id: string; name: string; channel_id: string | null }[];
};

export default function Step4_Extra({ control, errors, csStaff, channels, sources }: Props) {
    // map sources into "Source - Channel"
    const sourceOptions = sources.map((s) => {
        const channelName = channels.find((c) => c.id === s.channel_id)?.name ?? "Unknown";
        return {
            value: s.id,
            label: `${s.name} - ${channelName}`,
        };
    });

    return (
        <div className="space-y-4">
            {/* Nama CS */}
            <FormInput
                type="select"
                name="cs"
                label="Nama CS yang Melayani"
                control={control}
                errors={errors}
                options={csStaff.map((cs) => ({
                    value: cs.id,
                    label: `${cs.name} - ${cs.phone}`,
                }))}
            />

            {/* Tahu Lamonte dari Mana */}
            <FormInput
                name="tahuDari"
                label="Tahu Lamonte dari Mana"
                control={control}
                errors={errors}
                type="select"
                options={sourceOptions}
            />
        </div>
    );
}
