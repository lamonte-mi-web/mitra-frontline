'use client';

import React from 'react';
import CustomButton from '@/components/CustomButton';

interface SubmissionResultProps {
    success: boolean;
    message: string | React.ReactNode;
    onBack: () => void;
    userName?: string;
    mitraTypeName?: string;
    csPhoneNumber?: string;
}

export default function SubmissionResult({
    success,
    message,
    onBack,
    userName,
    mitraTypeName,
    csPhoneNumber,
}: SubmissionResultProps) {
    const whatsappMessage = encodeURIComponent(
        `Halo Kak, Saya ingin menginformasikan bahwa saya telah berhasil mendaftar sebagai Mitra Lamonte.\n\nBerikut adalah data saya:\nNama: ${userName || 'Calon Mitra'}\nJenis Kemitraan: ${mitraTypeName || 'Mitra'}\n\nMohon informasinya untuk langkah selanjutnya. Terima kasih.`
    );
    const whatsappLink = csPhoneNumber ? `https://wa.me/${csPhoneNumber}?text=${whatsappMessage}` : '#';

    return (
        <div className={`p-6 rounded-lg text-center ${success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <h3 className="text-2xl font-bold mb-4">{success ? "Terima Kasih!" : "Oops! Terjadi Kesalahan"}</h3>
            <div>{message}</div>

            {success && csPhoneNumber && (
                <div className="mt-6">
                    <p className="mb-3">Untuk info selanjutnya, hubungi admin kami:</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Hubungi Admin via WhatsApp
                    </a>
                </div>
            )}

            <div className="mt-8">
                <CustomButton type="button" onClick={onBack}>
                    ← Kembali ke Formulir
                </CustomButton>
            </div>
        </div>
    );
}
