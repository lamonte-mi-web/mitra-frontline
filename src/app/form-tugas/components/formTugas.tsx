'use client';

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "@/lib/formTugasSchema";
import type { FormData } from "@/lib/formTugasSchema";

import { useState } from "react";
import CustomButton from "@/components/CustomButton";


export default function FormTugas() {
    const {
        control,
        handleSubmit,
        trigger,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            instagramUsername: '',
            likes: '',
            saran: '',
        }
    })

    const onSubmit = async (data: FormData) => {
        console.log("🚀 Form Data Submitted:", data);

        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, String(value));
        });

        const entries = Array.from(formData.entries());
        console.log("📦 As FormData entries:", entries);

        alert(`Form berhasil disimpan:\n${entries.map(([key, val]) => `${key}: ${val}`).join('\n')}`);
    };



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-3xl mx-auto px-4 sm:px-6"
        >

            <div className="space-y-4">
                {/* Nama */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
                    />
                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
                {/* Instagram Username */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username Instagram</label>
                    <Controller
                        name="instagramUsername"
                        control={control}
                        render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
                    />
                    {errors.instagramUsername && <p className="text-sm text-red-500 mt-1">{errors.instagramUsername.message}</p>}
                </div>
                {/* Source Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tahu Lamonte darimana</label>
                    <Controller
                        name="source"
                        control={control}
                        render={({ field }) => (
                            <select {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                                <option value="">-- Pilih Sumber Tahu darimana --</option>
                                <option value="Instagram">Instagram</option>
                                <option value="TikTok">TikTok</option>
                                <option value="Marketplace">Marketplace</option>
                                <option value="Teman">Teman</option>
                                <option value="Iklan">Iklan</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        )}
                    />
                    {errors.source && <p className="text-sm text-red-500 mt-1">{errors.source.message}</p>}
                </div>
                {/* Tingkat Kepuasan Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tingkat Kepuasan</label>
                    <Controller
                        name="satisfaction"
                        control={control}
                        render={({ field }) => (
                            <select {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                                <option value="">-- Pilih Tingkat Kepuasan --</option>
                                <option value="0">TIdak Puas</option>
                                <option value="1">Biasa Saja</option>
                                <option value="2">Puas</option>
                                <option value="3">Sangat Puas</option>
                            </select>
                        )}
                    />
                    {errors.satisfaction && <p className="text-sm text-red-500 mt-1">{errors.satisfaction.message}</p>}
                </div>
                {/* Produk Yang di Sukai */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Apa yang disukai dari produk Lamonte.id</label>
                    <Controller
                        name="likes"
                        control={control}
                        render={({ field }) => <input {...field} className="input w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />}
                    />
                    {errors.likes && <p className="text-sm text-red-500 mt-1">{errors.likes.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Saran dan Masukan untuk Lamonte.id</label>
                    <Controller
                        name="saran"
                        control={control}
                        render={({ field }) => <textarea
                            {...field}
                            rows={2}
                            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        />}
                    />
                    {errors.saran && <p className="text-sm text-red-500 mt-1">{errors.saran.message}</p>}
                </div>
            </div>
            <div className="flex justify-center">
                <CustomButton type="submit">Submit</CustomButton>
            </div>
        </form>
    )
}