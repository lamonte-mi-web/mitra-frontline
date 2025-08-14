'use client';
import CountUp from "react-countup";

const stats = [
    {
        end: 500000,
        suffix: "+",
        label: "Produk Terjual",
        description: 'Bukti kepercayaan pasar terhadap kualitas produk fashion anak Lamonte'
    },
    {
        end: 12,
        suffix: "+",
        label: "Tahun Pengalaman",
        description: 'Dedikasi dalam industri fashion anak sejak 2011'
    },
    {
        end: 99,
        suffix: "%",
        label: "Mitra Sukses",
        description: 'Tingkat keberhasilan mitra yang bermitra dengan Lamonte'
    },
    {
        end: 700,
        suffix: "+",
        label: "Anggota Kemitraan",
        description: 'Jaringan luas distributor, agen, dan reseller di seluruh Indonesia'
    },
];

export default function StatisticSection() {
    return (
        <section className="w-full min-h-[210px] flex items-center justify-center p-4">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Pencapaian Kami dalam Angka
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full">
                    {stats.map(({ end, suffix, label, description }, idx) => (
                        <div
                            key={idx}
                            className="p-6 flex flex-col transform transition-transform duration-300 ease-in-out"
                        >
                            <CountUp
                                end={end}
                                duration={3}
                                enableScrollSpy
                                scrollSpyOnce
                                suffix={suffix}
                                className="text-5xl text-black font-bold text-center"
                            />
                            <h5 className="mt-2 text-xl text-gray-600 font-semibold text-center">{label}</h5>
                            <p className="text-center text-lg">{description}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-lg">Bergabunglah dengan ratusan mitra yang telah membuktikan keberhasilan sistem kemitraan Lamonte dan nikmati pertumbuhan bisnis yang konsisten.</p>
            </div>
        </section>
    );
}
