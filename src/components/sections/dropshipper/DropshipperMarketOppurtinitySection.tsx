"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faTags,
    faChartLine,
    faSyncAlt,
    faLaptopCode,
    faBoxes
} from "@fortawesome/free-solid-svg-icons";

const REASONS = [
    {
        icon: faUsers,
        title: "Permintaan Tinggi & Stabil",
        description: "Populasi anak di Indonesia sangat besar dan terus bertumbuh, menciptakan permintaan yang tidak pernah berhenti untuk pakaian anak.",
    },
    {
        icon: faTags,
        title: "Margin Keuntungan Menarik",
        description: "Meskipun harga jual terjangkau, volume penjualan yang tinggi di segmen ini bisa menghasilkan keuntungan yang signifikan.",
    },
    {
        icon: faSyncAlt,
        title: "Tren yang Cepat Berubah",
        description: "Orang tua modern gemar mengikuti tren fashion terbaru untuk anak, mendorong pembelian model-model baru secara rutin.",
    },
    {
        icon: faLaptopCode,
        title: "Pemasaran Digital yang Efektif",
        description: "Produk baju anak sangat cocok dipasarkan di media sosial dan e-commerce, sehingga mudah menjangkau target pasar",
    },
    {
        icon: faBoxes,
        title: "Risiko Stok Minimal (Untuk Dropshipper)",
        description: "Dengan model dropship, Anda tidak perlu khawatir dengan risiko stok menumpuk karena kami yang mengurus semuanya.",
    },
    {
        icon: faChartLine,
        title: "Pasar yang Terus Bertumbuh",
        description: "Data menunjukkan pasar pakaian anak di Indonesia terus naik setiap tahun, dengan proyeksi pertumbuhan yang kuat hingga 2029.",
    },
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DropshipperMarketOpportunitySection() {
    return (
        <section id="market-opportunity" className="w-full py-16 sm:py-24" aria-labelledby="market-opportunity-heading">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="market-opportunity-heading" className="text-3xl md:text-4xl font-bold text-[#ff9000]">
                        Kenapa Bisnis Fashion Anak? Peluangnya Terbuka Lebar.
                    </h2>
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Pasar yang terus bertumbuh, permintaan stabil, dan keuntungan menarik. Inilah alasan mengapa ratusan mitra kami berhasil.
                    </p>
                </motion.div>

                {/* Grid of Reasons */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {REASONS.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md"
                            variants={itemVariants}
                        >
                            <FontAwesomeIcon
                                icon={reason.icon}
                                className="h-8 w-8 text-[#ff9000] mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                            <p className="text-gray-600 text-base">{reason.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Data Fact Section */}
                <motion.div
                    className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                >
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-[#166534] mb-4">Didukung Oleh Fakta & Data</h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Data dari Statista menunjukkan bahwa segmen pasar pakaian anak (Children's Apparel) di Indonesia terus mengalami kenaikan setiap tahunnya.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                                Proyeksi pertumbuhan hingga tahun 2029 menyiratkan potensi bisnis jangka panjang yang sangat kuat dan menjanjikan di sektor ini. Anda sudah berada di jalur yang tepat!
                            </p>
                        </div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                            {/* Pastikan gambar ini ada di folder public/assets/img/ */}
                            <Image
                                src="/assets/img/research.png"
                                alt="Grafik Pertumbuhan Pasar Pakaian di Indonesia oleh Statista"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}