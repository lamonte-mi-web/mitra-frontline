'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form'; // Import useFormContext
import { FormData } from '@/lib/formSchema';
import FormInput from '@/components/FormInput';
import { Tables } from "@/types/database.types"; // Import Tables type

type Props = {
  mitraTypes: Tables<'mitra_type'>[]; // Use Tables type
  leadSources: Tables<'lead_source'>[]; // Use Tables type
  csStaff: { id: string, name: string, phone: string, mitra_type_id: string }[]; // Specific type for transformed CS staff
  selectedMitraTypeName: string;
};

export default function Step0({ mitraTypes, leadSources, csStaff, selectedMitraTypeName }: Props) {
  const { control, watch, formState: { errors } } = useFormContext<FormData>(); // Use useFormContext
  const selectedMitraTypeId = watch("mitraType");
  const selectedLeadSourceId = watch("leadSource"); // Get leadSource from context
  const [selectedMitraTypeDescription, setSelectedMitraTypeDescription] = useState<string | null>(null);
  // const [assignedCS, setAssignedCS] = useState(csStaff.filter((cs) => cs.mitra_type_id === selectedMitraTypeId ? cs : []))


  const selectedLeadSource = leadSources.find(
    (source) => source.id === selectedLeadSourceId
  );

  const assignedCS = csStaff.filter(
    (cs) => cs.mitra_type_id === selectedMitraTypeId
  );

  useEffect(() => {
    const currentMitraType = mitraTypes.find(mt => mt.id === selectedMitraTypeId);
    if (currentMitraType) {
      setSelectedMitraTypeDescription(currentMitraType.description_id);
      // setAssignedCS(csStaff.filter((cs) => cs.mitra_type_id === selectedMitraTypeId))
      console.log(currentMitraType.description_id)
      console.log(csStaff)
      console.log(assignedCS)
    } else {
      setSelectedMitraTypeDescription(null);
    }
  }, [selectedMitraTypeId, mitraTypes]);

  return (
    <div className="space-y-4">
      <FormInput
        name="mitraType"
        label="Daftar Sebagai"
        type="select"
        control={control}
        errors={errors}
        options={mitraTypes.map(mt => ({
          label: mt.name,
          value: mt.id,   // use UUID for DB consistency
        }))}
      />
      {selectedMitraTypeDescription && (
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-md text-sm">
          {selectedMitraTypeDescription}
        </div>
      )}

      {/* CS Info Card */}
      {assignedCS.length > 0 && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
          <p className="font-bold">Informasi Customer Service</p>
          <p>Berdasarkan jenis mitra Anda ({selectedMitraTypeName}), CS yang akan melayani Anda adalah:</p>
          <ul className="list-disc list-inside mt-2">
            {assignedCS.map((cs) => (
              <li key={cs.id}>
                {cs.name} ({cs.phone})
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Lead Source Dropdown */}
      <FormInput
        name="leadSource"
        label="Dari mana Anda tahu tentang kami?"
        type="select"
        options={leadSources.map(source => ({ value: source.id, label: source.name }))}
        control={control}
        errors={errors}
      />

      {/* Lead Source Description (optional, if you still want it) */}
      {selectedLeadSource?.description_id && (
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-md text-sm">
          {selectedLeadSource.description_id}
        </div>
      )}


    </div>
  );
}
