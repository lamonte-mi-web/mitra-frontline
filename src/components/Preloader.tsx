"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fungsi ini akan dijalankan saat seluruh halaman (termasuk gambar dan stylesheet) selesai dimuat.
        const handleLoad = () => {
            // Memberi sedikit jeda agar transisi fade-out terlihat mulus
            setTimeout(() => setLoading(false), 200);
        };

        // Jika halaman sudah selesai dimuat sebelum komponen ini muncul, langsung sembunyikan preloader.
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            // Tambahkan event listener untuk menunggu halaman selesai dimuat.
            window.addEventListener('load', handleLoad);
        }

        // Cleanup: Hapus event listener saat komponen di-unmount untuk mencegah memory leak.
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div
            className={`fixed inset-0 bg-white z-[1500] flex items-center justify-center transition-opacity duration-500 ease-in-out ${loading ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
            {/* Menggunakan logo untuk branding yang lebih baik */}
            <div className="flex flex-col items-center">
                <Image
                    src="/assets/img/logo-lamonte.png"
                    alt="Lamonte Logo Loading"
                    width={150}
                    height={40}
                    className="animate-pulse" // Animasi sederhana untuk menunjukkan aktivitas
                    priority
                />
            </div>
        </div>
    );
}