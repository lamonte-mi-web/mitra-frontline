'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faBolt, faChartLine, faClock, faMoneyBill, faServer, faShirt, faHandshake, faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion, Variants } from 'framer-motion';

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

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Small delay between each card animation
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function HomeMagicKeywordsSection() {
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
                <motion.h2
                    className="text-4xl font-bold capitalize text-white mb-3 max-w-5xl"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Ratusan Mitra Sudah Bergabung
                </motion.h2>
                <motion.p
                    className="text-white font-semibold text-xl max-w-5xl mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Inilah Alasan Mereka Memilih Lamonte
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-6xl w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {MagicKeywords.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group bg-[#FEEACD] rounded-xl p-6 flex flex-col items-center gap-4 h-full
                            border-2 border-transparent hover:border-[#FF9000]"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -5 }} // Hover animation
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-12 h-12 bg-[#FF9000] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:ring-4 group-hover:ring-[#FF9000] group-hover:ring-opacity-60 group-hover:animate-pulse">
                                <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
                            </div>
                            <p className="font-semibold text-[#166534] text-center">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}