'use client';

import { useFormContext } from "react-hook-form";
import { FormData } from "@/lib/formSchema";
import FormInput from "@/components/FormInput";

export default function StepInfo({
    leadSources = [], // Add default empty array as safeguard
}: {
    leadSources: { id: string, name: string, description_id: string | null }[];
}) {
    const { control, watch, formState: { errors } } = useFormContext<FormData>(); // Use useFormContext
    const selectedLeadSourceId = watch("leadSource"); // Define selectedLeadSourceId here
    const selectedLeadSource = leadSources.find(
        (source) => source.id === selectedLeadSourceId
    );

    return (
        <div className="space-y-6">
            {/* Lead Source Dropdown */}
            <FormInput
                name="leadSource"
                label="Dari mana Anda tahu tentang kami?"
                type="select"
                options={leadSources.map(source => ({ value: source.id, label: source.name }))}
                control={control}
                errors={errors}
            />

            {/* Lead Source Description */}
            {selectedLeadSource?.description_id && (
                <div>
                    <label htmlFor="leadSourceDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                        Deskripsi Sumber Informasi
                    </label>
                    <textarea
                        id="leadSourceDescription"
                        value={selectedLeadSource.description_id}
                        readOnly
                        rows={3}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm shadow-sm transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none bg-gray-50"
                    />
                </div>
            )}
        </div>
    );
}
