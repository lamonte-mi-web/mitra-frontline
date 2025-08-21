'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fullSchema, classificationSchema, personalInfoSchema, companyProfileSchema, paymentSchema, extraSchema } from "@/lib/formSchema";
import type { FormData } from "@/lib/formSchema";

import { useState } from "react";

import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function MultiStepForm() {
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
            agama: 'Lainnya',
            pendapatanBulanan: 0,
            pengeluaranBulanan: 0,
            jumlahTanggungan: 0,
            jenisPerusahaan: '',
            namaPerusahaan: '',
            nib: '',
            skdu: '',
            npwp: '',
            nikDireksi: '',
            nikKomisaris: '',
            pengalaman: 0,
            rataPenghasilan: 0,
            buyPower: 0,
            alamatUsaha: '',
            bank: '',
            rekening: '',
            namaRekening: '',
            cs: '',
            tahuDari: '',
        },
    });

    const steps = [
        { name: "Ingin Menjadi Apa?", component: <Step0 control={control} errors={errors} watch={watch} />, schema: classificationSchema },
        { name: "Informasi Pribadi", component: <Step1 control={control} errors={errors} watch={watch} />, schema: personalInfoSchema },
        { name: "Profil Perusahaan", component: <Step2 control={control} errors={errors} watch={watch} />, schema: companyProfileSchema },
        { name: "Detail Pembayaran", component: <Step3 control={control} errors={errors} />, schema: paymentSchema },
        { name: "Info Tambahan", component: <Step4 control={control} errors={errors} />, schema: extraSchema },
    ];

    // serialize form data to string | number
    const serializeData = (data: FormData): Record<string, string | number | undefined> => {
        const serialized: Record<string, string | number | undefined> = {};

        const isDate = (value: unknown): value is Date => value instanceof Date;

        Object.entries(data).forEach(([key, value]) => {
            if (isDate(value)) {
                serialized[key] = value.toISOString().split('T')[0]; // "YYYY-MM-DD"
            } else if (typeof value === 'boolean') {
                serialized[key] = value ? 1 : 0;
            } else if (typeof value === 'string' || typeof value === 'number' || value === undefined) {
                serialized[key] = value;
            } else {
                // fallback for unexpected types
                serialized[key] = undefined;
            }
        });

        return serialized;
    };


    const handleNext = async () => {
        const keys = Object.keys(steps[currentStep].schema.shape) as (keyof FormData)[];
        const valid = await trigger(keys);
        if (valid) setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => setCurrentStep(prev => prev - 1);

    const onSubmit = async (data: FormData) => {
        const payload = serializeData(data);

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (result.success) {
            alert(`Form berhasil dikirim! Folder ID: ${result.folder}`);
        } else {
            alert('Gagal mengirim form.');
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-4">{steps[currentStep].name}</h2>
            {steps[currentStep].component}

            <div className="flex justify-between mt-8">
                {currentStep > 0 && (
                    <button type="button" onClick={handleBack} className="btn px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
                        ← Kembali
                    </button>
                )}
                {currentStep < steps.length - 1 ? (
                    <button type="button" onClick={handleNext} className="btn px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
                        Selanjutnya →
                    </button>
                ) : (
                    <button type="submit" className="btn-primary px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition font-medium">
                        Kirim Formulir
                    </button>
                )}
            </div>
        </form>
    );
}
