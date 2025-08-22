// /form/components/MultiStepForm.tsx
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fullSchema, classificationSchema, personalInfoSchema, companyProfileSchema, paymentSchema, extraSchema } from "@/lib/formSchema";
import type { FormData } from "@/lib/formSchema";
import { insertMitraAction } from "../actions";


import { useState } from "react";

import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import CustomButton from "@/components/CustomButton";
import { APIFormData } from "@/lib/APIFormSchema";

export default function MultiStepForm({
    mitraTypes,
    agama,
    banks,
    companies,
    csStaff,
    channels,
    sources,
}: {
    mitraTypes: { id: string, name: string }[]
    agama: { id: string, name: string }[]
    banks: { id: string, name: string }[]
    companies: { id: string, name: string }[]
    csStaff: { id: string, name: string, phone: string }[]
    channels: { id: string, name: string }[]
    sources: { id: string, name: string, channel_id: string | null }[]
}) {
    const [currentStep, setCurrentStep] = useState(0);

    const { control, handleSubmit, trigger, watch, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(fullSchema),
        defaultValues: {
            nama: '',
            email: '',
            phone: '',
            alamat: '',
            nikKtp: '',
            bod: '',
            agama: '',
            pendapatanBulanan: "0",
            pengeluaranBulanan: "0",
            jumlahTanggungan: "0",
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
            bank: '',
            rekening: '',
            namaRekening: '',
            cs: '',
            tahuDari: '',
        },
    });
    const selectedMitraTypeId = watch("mitraType");
    const selectedMitraTypeName = mitraTypes.find(m => m.id === selectedMitraTypeId)?.name ?? "";
    const steps = [
        { name: "Ingin Bergabung Menjadi Apa?", component: <Step0 control={control} errors={errors} watch={watch} mitraTypes={mitraTypes} />, schema: classificationSchema },
        { name: "Informasi Pribadi", component: <Step1 control={control} errors={errors} watch={watch} agama={agama} />, schema: personalInfoSchema },
        // hide Step2 if B2C
        ...(selectedMitraTypeName === "B2C" ? [] : [
            { name: "Profil Perusahaan", component: <Step2 control={control} errors={errors} watch={watch} companies={companies} mitraTypes={mitraTypes} />, schema: companyProfileSchema }
        ]),
        { name: "Detail Pembayaran", component: <Step3 control={control} errors={errors} banks={banks} />, schema: paymentSchema },
        { name: "Info Tambahan", component: <Step4 control={control} errors={errors} csStaff={csStaff} channels={channels} sources={sources} />, schema: extraSchema },
    ];


    // serialize form data to string | number
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
                return [key, undefined];
            })
        ) as APIFormData;
    };



    const handleNext = async () => {
        const keys = Object.keys(steps[currentStep].schema.shape) as (keyof FormData)[];
        const valid = await trigger(keys);
        if (valid) setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => setCurrentStep(prev => prev - 1);

    const onSubmit = async (data: FormData) => {
        const payload = serializeData(data);

        const result = await insertMitraAction(payload, "Form Pendaftaran Online");

        if (result.success) {
            alert(`Form berhasil dikirim! ID Mitra: ${result.mitraId}`);
        } else {
            // Check if error has code and message
            if (result.error && "code" in result.error && "message" in result.error) {
                alert(`Gagal mengirim form!\nKode Error: ${result.error.code}\nPesan: ${JSON.stringify(result.error.message, null, 2)}`);
                console.error(`Submit failed at step: ${result.error.code}`, result.error.message);
            } else {
                alert(`Gagal mengirim form! ${JSON.stringify(result.error, null, 2)}`);
                console.error("Submit failed:", result.error);
            }
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-4">{steps[currentStep].name}</h2>
            {steps[currentStep].component}

            <div className="flex justify-between mt-8">
                {currentStep > 0 && (
                    <CustomButton type="button" onClick={handleBack}>
                        ← Kembali
                    </CustomButton>
                )}
                {currentStep < steps.length - 1 ? (
                    <CustomButton type="button" onClick={handleNext}>
                        Selanjutnya →
                    </CustomButton>
                ) : (
                    <CustomButton type="submit" className="font-medium">
                        Kirim Formulir
                    </CustomButton>
                )}
            </div>
        </form>
    );
}
