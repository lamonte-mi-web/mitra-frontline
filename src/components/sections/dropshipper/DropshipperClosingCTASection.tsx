"use client";

import { motion, Variants } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BENEFITS = [
    "Pendaftaran 100% Gratis, Tanpa Modal",
    "Akses Ratusan Produk Laris",
    "Dukungan Penuh Tim Marketing",
    "Tidak Perlu Urus Stok & Pengiriman",
];

export default function DropshipperClosingCTASection() {
    return (
        <section id="closing-cta" className="w-full bg-[#166534]" aria-labelledby="closing-cta-heading">
            <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.h2
                            id="closing-cta-heading"
                            className="text-3xl md:text-4xl font-bold text-white leading-tight"
                            variants={itemVariants}
                        >
                            Siap Memulai Bisnis Anda <br /> <span className="text-[#fcd92b]">Hari Ini Juga?</span>
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-green-100 max-w-lg mx-auto lg:mx-0"
                            variants={itemVariants}
                        >
                            Kesempatan terbaik untuk membangun sumber penghasilan dari rumah ada di depan mata Anda. Jangan tunda lagi!
                        </motion.p>

                        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
                            {BENEFITS.map((benefit) => (
                                <div key={benefit} className="flex items-center justify-center lg:justify-start">
                                    <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-[#fcd92b] mr-3" />
                                    <span className="text-white text-lg">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: CTA Card */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-2xl text-center"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl font-bold text-gray-800">
                            Pendaftaran Akan Ditutup Jika Kuota Terpenuhi
                        </h3>
                        <p className="text-gray-600 mt-2 mb-6">
                            Amankan posisi Anda sekarang juga sebelum kesempatan ini berakhir. Klik tombol di bawah untuk mengisi formulir pendaftaran.
                        </p>
                        <CTAButton
                            href="https://mitra.lamonte.co.id/form"
                            styles="default"
                            className="w-full max-w-sm mx-auto"
                            animated={true}
                        >
                            Daftar Gratis Sekarang
                        </CTAButton>
                        <p className="text-xs text-gray-400 mt-3">Proses pendaftaran hanya 2 menit.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}