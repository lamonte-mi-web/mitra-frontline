'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faBolt, faChartLine, faClock, faMoneyBill, faServer, faShirt, faHandshake, faHeart } from '@fortawesome/free-solid-svg-icons';

const MagicKeywords = [
    { icon: faMoneyBill, text: "Untung maksimal dengan modal ringan. Hasil cepat terasa." },
    { icon: faChartLine, text: "Produk bestseller yang selalu dicari pasar." },
    { icon: faShirt, text: "Tren fashion anak terbaru. Selalu fresh, selalu relevan." },
    { icon: faHeart, text: "Dukungan 100%. Kami ada sampai Anda sukses." },
    { icon: faServer, text: "Sistem bisnis otomatis, mudah, dan terintegrasi." },
    { icon: faBolt, text: "Pengiriman kilat ke seluruh Indonesia & Asia." },
    { icon: faClock, text: "Kemitraan jangka panjang dengan keuntungan berkelanjutan." },
    { icon: faHandshake, text: "Transparansi dan kepercayaan yang dibuktikan, bukan dijanjikan." },
];

export default function MagicKeywordsSection() {
    return (
        <section className="relative w-full py-12">
            <Image
                src="/assets/img/bg-magic-keywords.png"
                alt="Background CTA Section"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-green-600/70 z-10" />

            <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-12">
                <h2 className="text-4xl font-bold capitalize text-white mb-3 max-w-5xl">
                    Ratusan Mitra Sudah Bergabung
                </h2>
                <p className="text-white font-semibold text-xl max-w-5xl mb-6">
                    Inilah Alasan Mereka Memilih Lamonte
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-6xl w-full">
                    {MagicKeywords.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#FEEACD] rounded-xl p-6 flex flex-col items-center gap-4 h-full
                        border-2 border-transparent hover:border-[#FF9000]
                        transform transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="w-12 h-12 bg-[#FF9000] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:ring-4 group-hover:ring-[#FF9000] group-hover:ring-opacity-60 group-hover:animate-pulse">
                                <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
                            </div>
                            <p className="font-semibold text-[#166534] text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
