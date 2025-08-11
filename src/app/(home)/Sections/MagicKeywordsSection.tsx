'use client';

import { OrangeDivider } from '@/components/OrangeDivider';
import Image from 'next/image';

export default function MagicKeywordsSection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-[2.5rem] font-bold uppercase text-gray-800 mb-3 text-center">
                    Ratusan Mitra Sudah Bersama Kami — Saatnya Anda Jadi Bagian Kesuksesan Ini
                </h2>
                <OrangeDivider />
            </div>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg">

                    <Image
                        src="/assets/img/pict-magic-keywords.webp"
                        alt="Partners collaboration"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={80}
                    />
                </div>

                <div>
                    <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
                        <li>Profit tinggi, investasi ringan — hasil nyata tanpa ribet.</li>
                        <li>Produk laris cepat, mudah dijual kapan saja.</li>
                        <li>Update tren fashion terbaru, pilihan produk selalu segar.</li>
                        <li>Dukungan penuh sampai Anda benar-benar sukses.</li>
                        <li>Sistem mandiri yang memudahkan langkah Anda.</li>
                        <li>Pengiriman cepat, menjangkau seluruh Indonesia dan Asia.</li>
                        <li>Kemitraan Jangka Panjang, Bukan Sekadar Transaksi.</li>
                    </ol>
                </div>

            </div>
        </section>
    );
}
