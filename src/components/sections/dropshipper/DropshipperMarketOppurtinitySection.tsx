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
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CTAButton from "@/components/CTAButton";

// --- COPYWRITING DIPERTAJAM DENGAN PRINSIP NLP ---
const REASONS = [
    {
        icon: faUsers,
        title: "Permintaan yang Tak Pernah Padam",
        description: "Setiap anak butuh pakaian, dan mereka tumbuh begitu cepat. Ini menciptakan pasar yang stabil dan permintaan berkelanjutan sepanjang tahun.",
    },
    {
        icon: faTags,
        title: "Margin Profit Menggiurkan",
        description: "Dengan volume penjualan tinggi di pasar yang luas, Anda berpotensi meraih keuntungan signifikan bahkan dari produk dengan harga terjangkau.",
    },
    {
        icon: faSyncAlt,
        title: "Tren Selalu Baru, Penjualan Terus Berputar",
        description: "Orang tua modern suka mendandani anak mereka. Tren baru berarti peluang baru untuk Anda menjual koleksi terkini secara rutin.",
    },
    {
        icon: faLaptopCode,
        title: "Era Digital, Jualan Makin Mudah",
        description: "Manfaatkan kekuatan media sosial dan e-commerce. Produk fashion anak sangat visual dan mudah viral, membuka pintu ke jutaan calon pelanggan.",
    },
    {
        icon: faBoxes,
        title: "Bisnis Bebas Risiko Stok",
        description: "Sebagai dropshipper, risiko barang menumpuk adalah nol. Anda hanya perlu fokus pada promosi, kami yang urus sisanya.",
    },
    {
        icon: faChartLine,
        title: "Investasi di Pasar yang Terus Naik",
        description: "Anda tidak sedang berspekulasi. Data membuktikan pasar ini terus tumbuh, menjadikan bisnis Anda investasi jangka panjang yang cerdas.",
    },
];

// ... (Animation Variants tetap sama)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DropshipperMarketOpportunitySection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section id="market-opportunity" className="w-full bg-transparent py-16 sm:py-24" aria-labelledby="market-opportunity-heading">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* --- COPYWRITING DIPERTAJAM --- */}
                    <h2 id="market-opportunity-heading" className="text-3xl md:text-4xl font-bold text-[#ff9000]">
                        Anda Berada di Tengah Peluang Emas.
                    </h2>
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Bisnis fashion anak bukan sekadar tren, tapi sebuah pasar raksasa yang terus bertumbuh. Inilah mengapa ini adalah pilihan bisnis yang cerdas.
                    </p>
                </motion.div>

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
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-[#FF9000]"
                            variants={itemVariants}
                        >
                            <div className="p-6">
                                <FontAwesomeIcon
                                    icon={reason.icon}
                                    className="h-8 w-8 text-[#166534] mb-4"
                                    aria-hidden="true"
                                />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                                <p className="text-gray-600 text-base">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16 bg-gradient-to-br from-[#166534] to-green-800 text-white rounded-2xl shadow-xl p-8 md:p-12"
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
                            {/* --- COPYWRITING DIPERTAJAM --- */}
                            <h3 className="text-2xl font-bold text-[#fcd92b] mb-4">Angka Tidak Pernah Bohong</h3>
                            <p className="text-green-100 text-lg leading-relaxed mb-6">
                                Pasar pakaian anak di Indonesia diproyeksikan akan meroket, dengan nilai pasar mencapai lebih dari:
                            </p>
                            <div ref={ref} className="text-5xl md:text-6xl font-bold text-white mb-6">
                                {inView && <CountUp start={0} end={88} duration={2.5} prefix="Rp " suffix=" Triliun" />}
                                <span className="block text-xl font-normal text-green-200 mt-2">pada tahun 2029.</span>
                            </div>
                            <p className="text-green-100 font-semibold">
                                Bergabung sekarang berarti Anda ikut bertumbuh bersama pasar raksasa ini.
                            </p>
                        </div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-white/10 p-2">
                            <Image
                                src="/assets/img/research.png"
                                alt="Grafik Pertumbuhan Pasar Pakaian di Indonesia oleh Statista"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <CTAButton href="/form" styles="default">
                            Saya Siap Ambil Peluang Ini
                        </CTAButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}