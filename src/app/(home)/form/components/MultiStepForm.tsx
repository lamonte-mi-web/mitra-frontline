// /form/components/MultiStepForm.tsx
'use client';

import { useForm, FormProvider } from "react-hook-form"; // Import FormProvider
import { zodResolver } from "@hookform/resolvers/zod";
import { fullSchema, classificationSchema, personalInfoSchema, companyProfileSchema, leadSourceSchema } from "@/lib/formSchema";
import type { FormData } from "@/lib/formSchema";
import { insertMitraAction } from "../actions";

// Import useState
import { useState } from "react";

import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import StepInfo from "./StepInfo"; // Import the new StepInfo component
import CustomButton from "@/components/CustomButton";
import { APIFormData } from "@/lib/APIFormSchema";

import { translateSupabaseError } from "@/lib/supabaseErrorUtils"


// UPDATED: Allow the message to be a string OR a React component
type SubmissionResult = {
    success: boolean;
    message: string | React.ReactNode;
};

export default function MultiStepForm({
    mitraTypes,
    companies,
    csStaff,
    channels,
    leadSources,
}: {
    mitraTypes: { id: string, name: string, description_id: string | null, description_en: string | null }[]
    companies: { id: string, name: string }[]
    csStaff: { id: string, name: string, phone: string, mitra_type_id: string }[] // Updated CS Staff type
    channels: { id: string, name: string, description_id: string | null, description_en: string | null }[]
    leadSources: { id: string, name: string, channel_id: string | null, description_id: string | null, description_en: string | null }[] // Added leadSources
}) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);


    const methods = useForm<FormData>({ // Create methods object
        resolver: zodResolver(fullSchema),
        defaultValues: {
            nama: '',
            email: '',
            phone: '',
            alamat: '',
            nikKtp: '',
            bod: '',
            jenisPerusahaan: '',
            namaPerusahaan: '',
            nib: '',
            skdu: '',
            npwp: '',
            nikDireksi: '',
            nikKomisaris: '',
            pengalaman: "0",
            rataPenghasilan: "0",
            buyPower: "0",
            alamatUsaha: '',
        },
    });
    const selectedMitraTypeId = methods.watch("mitraType"); // Use methods.watch
    const selectedMitraTypeName = mitraTypes.find(m => m.id === selectedMitraTypeId)?.name ?? "";

    const steps = [
        { name: "Ingin Bergabung Menjadi Apa?", component: <Step0 mitraTypes={mitraTypes} csStaff={csStaff} selectedMitraTypeName={selectedMitraTypeName} />, schema: classificationSchema },
        { name: "Informasi Tambahan", component: <StepInfo leadSources={leadSources} />, schema: leadSourceSchema }, // New Step
        { name: "Informasi Pribadi", component: <Step1 />, schema: personalInfoSchema },
        ...(selectedMitraTypeName === "Retail" || selectedMitraTypeName === "Dropshipper" ? [] : [
            { name: "Profil Perusahaan", component: <Step2 companies={companies} selectedMitraTypeName={selectedMitraTypeName} />, schema: companyProfileSchema }
        ]),
    ];

    const serializeData = (data: FormData): APIFormData => {
        const isDate = (value: unknown): value is Date => value instanceof Date;
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => {
                if (isDate(value)) {
                    return [key, value.toISOString().split("T")[0]];
                } else if (typeof value === "boolean") {
                    return [key, value ? 1 : 0];
                } else if (typeof value === "string" || typeof value === "number" || value === undefined) {
                    return [key, value];
                }
                return [key, String(value)];
            })
        ) as APIFormData;
    };


    const handleNext = async () => {
        const keys = Object.keys(steps[currentStep].schema.shape) as (keyof FormData)[];
        const valid = await methods.trigger(keys); // Use methods.trigger
        if (valid) setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => setCurrentStep(prev => prev - 1);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmissionResult(null);

        console.log("1. Raw form data:", data);
        const payload = serializeData(data);
        console.log("2. Serialized payload:", payload);

        const result = await insertMitraAction(payload, "Form Pendaftaran Online");
        console.log("5. Result from server action:", result);

        if (result.success) {
            setSubmissionResult({ success: true, message: `Pendaftaran berhasil! ID Mitra Anda adalah: ${result.mitraId}. Silahkan Hubungi Tim kami lagi untuk proses selanjutnya.` });
        } else {
            // UPDATED: This block now uses the translator function
            let errorContent: string | React.ReactNode = "Terjadi kesalahan yang tidak diketahui.";

            if (result.error) {
                // Check for Zod validation errors first (from the server action)
                if (result.error.code === 'VALIDATION_ERROR' && typeof result.error.message === 'object' && result.error.message !== null) {
                    const fieldErrors = result.error.message as Record<string, string[] | undefined>;
                    errorContent = (
                        <div>
                            <p className="font-semibold mb-2">Harap perbaiki kesalahan berikut:</p>
                            <ul className="list-disc list-inside text-left max-w-md mx-auto">
                                {Object.entries(fieldErrors).map(([field, messages]) =>
                                    messages ? <li key={field}><strong>{field}:</strong> {messages.join(', ')}</li> : null
                                )}
                            </ul>
                        </div>
                    );
                } else {
                    // If it's not a validation error, use our new translator for database errors!
                    errorContent = translateSupabaseError(result.error);
                }
            }

            setSubmissionResult({ success: false, message: errorContent });
            console.error("Submit failed:", result.error);
        }
        setIsSubmitting(false);
    };

    const progress = Math.round(((currentStep + 1) / steps.length) * 100);

    if (submissionResult) {
        return (
            <div className={`p-6 rounded-lg text-center ${submissionResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <h3 className="text-2xl font-bold mb-4">{submissionResult.success ? "Terima Kasih!" : "Oops! Terjadi Kesalahan"}</h3>
                {/* This <p> tag can now render a string or the JSX list */}
                <div>{submissionResult.message}</div>
            </div>
        )
    }

    return (
        <FormProvider {...methods}> {/* Correctly spread the methods object */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                    className="bg-[#F59607] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl font-bold mb-4">{steps[currentStep].name}</h2>
                <p className="text-sm text-gray-600 mb-2">
                    Step {currentStep + 1} of {steps.length}
                </p>
                {steps[currentStep].component}
                <div className="flex justify-between mt-8">
                    {currentStep > 0 && (
                        <CustomButton type="button" onClick={handleBack} disabled={isSubmitting}>
                            ← Kembali
                        </CustomButton>
                    )}
                    {currentStep < steps.length - 1 ? (
                        <CustomButton type="button" onClick={handleNext} disabled={isSubmitting}>
                            Selanjutnya →
                        </CustomButton>
                    ) : (
                        <CustomButton type="submit" className="font-medium" disabled={isSubmitting}>
                            {isSubmitting ? "Mengirim..." : "Kirim Formulir"}
                        </CustomButton>
                    )}
                </div>
            </form>
        </FormProvider>
    );
}
