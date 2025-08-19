'use client';
import CountUp from "react-countup";

const stats = [
    {
        end: 500000,
        suffix: "+",
        label: "Produk Terjual",
        description: "Bukti kepercayaan pasar terhadap kualitas fashion anak Lamonte"
    },
    {
        end: 12,
        suffix: "+",
        label: "Tahun Pengalaman",
        description: "Dedikasi Lamonte di industri fashion anak sejak 2011"
    },
    {
        end: 99,
        suffix: "%",
        label: "Mitra Sukses",
        description: "Hampir semua mitra mencapai omzet impian dengan sistem kami"
    },
    {
        end: 700,
        suffix: "+",
        label: "Anggota Kemitraan",
        description: "Jaringan luas distributor, agen, dan reseller di seluruh Indonesia"
    },
];

export default function StatisticSection() {
    return (
        <section className="w-full min-h-[210px] flex items-center justify-center p-4 bg-[#fdf6e3]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold text-center text-[#FF9000] mb-8">
                    Keberhasilan Kami dalam Angka
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
                    {stats.map(({ end, suffix, label, description }, idx) => (
                        <div
                            key={idx}
                            className="p-6 flex flex-col transform transition-transform duration-300 ease-in-out bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105"
                        >
                            <CountUp
                                end={end}
                                duration={3}
                                enableScrollSpy
                                scrollSpyOnce
                                suffix={suffix}
                                className="text-5xl text-[#FF9000] font-bold text-center"
                            />
                            <h5 className="mt-2 text-xl text-gray-800 font-semibold text-center">{label}</h5>
                            <p className="text-center text-gray-500 text-lg mt-1">{description}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xl mt-8 text-[#166534] max-w-3xl mx-auto">
                    Bergabunglah dengan <strong>99% Mitra Sukses Bersama Lamonte</strong> dan rasakan pertumbuhan bisnis fashion anak Anda dengan sistem yang sudah terbukti.
                </p>
            </div>
        </section>
    );
}
