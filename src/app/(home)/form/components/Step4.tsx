'use client';

import { Control, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';
import { useEffect, useState } from 'react';

type Channel = {
    id: string;
    name: string;
    description_id: string | null;
    description_en: string | null;
};

type Source = {
    id: string;
    name: string;
    channel_id: string | null;
    description_id: string | null;
    description_en: string | null;
};

type Props = {
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
    watch: UseFormWatch<FormData>;
    setValue: UseFormSetValue<FormData>; // Add setValue to props
    csStaff: { id: string; name: string; phone: string }[];
    channels: Channel[];
    sources: Source[];
};

export default function Step4_Extra({ control, errors, watch, setValue, csStaff, channels, sources }: Props) {
    const selectedSourceId = watch("tahuDari");

    const [selectedSourceDescription, setSelectedSourceDescription] = useState<string | null>(null);

    useEffect(() => {
        const currentSource = sources.find(s => s.id === selectedSourceId);
        if (currentSource) {
            setSelectedSourceDescription(currentSource.description_id);
            setValue("channel", currentSource.channel_id || ''); // Automatically set channel
        } else {
            setSelectedSourceDescription(null);
            setValue("channel", ''); // Clear channel if no source is selected
        }
    }, [selectedSourceId, sources, setValue]);


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
            {selectedSourceDescription && (
                <div className="mt-2 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-md text-sm">
                    {selectedSourceDescription}
                </div>
            )}
            {/* Hidden Channel Input */}
            <input type="hidden" {...control.register("channel")} />
        </div>
    );
}
