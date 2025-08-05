'use client';

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    fullSchema,
    personalInfoSchema,
    companyProfileSchema,
    paymentSchema,
    extraSchema,
} from "@/lib/formSchema";
import type { FormData } from "@/lib/formSchema";

import { useState } from "react";

import Step1 from "./Step1_PersonalInfo";
import Step2 from "./Step2_CompanyProfile";
import Step3 from "./Step3_Payment";
import Step4 from "./Step4_Extra";

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const {
        control,
        handleSubmit,
        trigger,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(fullSchema),
        defaultValues: {
            // Step 1: Personal Info
            nama: '',
            email: '',
            phone: '',
            alamat: '',
            ktpFile: null,
            kkFile: null,

            // Step 2: Company Profile
            jenisPerusahaan: '',
            namaPerusahaan: '',
            nibFile: null,
            skduFile: null,
            npwpFile: null,
            ktpDireksiFile: null,
            ktpKomisarisFile: null,
            pengalaman: '',
            penghasilan: '',
            buyPower: '',
            kategoriProduk: '',
            paket: '',
            alamatUsaha: '',

            // Step 3: Payment
            bank: '',
            rekening: '',
            namaRekening: '',

            // Step 4: Extra
            cs: '',
            tahuDari: '',
        },
    });


    const steps = [
        {
            name: "Informasi Pribadi",
            component: <Step1 control={control} errors={errors} watch={watch} />,
            schema: personalInfoSchema,
        },
        {
            name: "Profil Perusahaan",
            component: <Step2 control={control} errors={errors} watch={watch} />,
            schema: companyProfileSchema,
        },
        {
            name: "Detail Pembayaran",
            component: <Step3 control={control} errors={errors} />,
            schema: paymentSchema,
        },
        {
            name: "Info Tambahan",
            component: <Step4 control={control} errors={errors} />,
            schema: extraSchema,
        },
    ];

    const handleNext = async () => {
        const keys = Object.keys(steps[currentStep].schema.shape) as (keyof FormData)[];
        const valid = await trigger(keys);
        if (valid) setCurrentStep((prev) => prev + 1);
    };


    const handleBack = () => setCurrentStep((prev) => prev - 1);

    const onSubmit = async (data: FormData) => {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof File || typeof value === 'string') {
                formData.append(key, value);
            }
        });

        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (result.success) {
            alert(`Form berhasil dikirim! Folder ID: ${result.folder}`);
        } else {
            alert('Gagal mengirim form.');
        }
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-3xl mx-auto px-4 sm:px-6"
        >

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
