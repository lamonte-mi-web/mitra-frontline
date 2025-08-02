'use client';

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    fullSchema,
    FormData,
    personalInfoSchema,
    companyProfileSchema,
    paymentSchema,
    extraSchema,
} from "@/lib/formSchema";
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

    const onSubmit = (data: FormData) => {
        console.log("Submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{steps[currentStep].name}</h2>
            {steps[currentStep].component}

            <div className="flex justify-between">
                {currentStep > 0 && (
                    <button type="button" onClick={handleBack} className="btn">
                        Kembali
                    </button>
                )}
                {currentStep < steps.length - 1 ? (
                    <button type="button" onClick={handleNext} className="btn">
                        Selanjutnya
                    </button>
                ) : (
                    <button type="submit" className="btn-primary">
                        Kirim Formulir
                    </button>
                )}
            </div>
        </form>
    );
}
