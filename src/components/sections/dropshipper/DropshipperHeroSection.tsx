"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function DropshipperHeroSection() {
    return (
        <section className="w-full bg-[#FFF6E8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center min-h-[90vh] md:min-h-screen py-20 md:py-0">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="flex flex-col text-center md:text-left items-center md:items-start z-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-4xl lg:text-5xl font-bold text-[#166534] leading-tight mb-4"
                            variants={itemVariants}
                        >
                            Mulai Bisnis Fashion Anak, <span className="text-[#FF9000]">Tanpa Modal.</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 max-w-lg mb-8"
                            variants={itemVariants}
                        >
                            Jualkan ratusan produk terlaris tanpa perlu stok barang, packing, atau kirim paket. Kami siapkan semuanya untuk Anda.
                        </motion.p>

                        <motion.ul className="space-y-3 text-left mb-8" variants={itemVariants}>
                            {[
                                "Pendaftaran 100% Gratis",
                                "Komisi & Keuntungan Menarik",
                                "Materi Marketing Disediakan",
                                "Tanpa Stok & Urus Pengiriman",
                            ].map(point => (
                                <li key={point} className="flex items-center text-gray-700 font-medium">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 w-5 h-5 mr-3" />
                                    {point}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start"
                            variants={itemVariants}
                        >
                            <CTAButton href="/form" styles="default">Daftar Gratis Sekarang</CTAButton>
                            <CTAButton href="https://wa.me/628111209921" styles="whatsapp">Tanya via WhatsApp</CTAButton>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        className="relative w-full h-[50vh] md:h-[70vh]"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="absolute inset-0 bg-[#fcd92b] rounded-full transform z-1 -translate-x-1/4 scale-150"></div>
                        <Image
                            src="/assets/img/dropshipper-hero.png"
                            alt="Ibu Indonesia sukses menjalankan bisnis dropshipper baju anak Lamonte dari rumah"
                            fill
                            className="object-contain object-center z-10"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
