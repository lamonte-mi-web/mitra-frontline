"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { whatsappContacts } from "@/lib/whatsappContacts";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function ResellerHeroSection() {
    return (
        <section className="w-full bg-[#FFF6E8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center min-h-[90vh] md:min-h-screen py-20 md:py-0">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="flex flex-col text-center md:text-left items-center md:items-start order-last md:order-first"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.h1
                            className="text-4xl lg:text-5xl font-bold text-[#166534] leading-tight mb-4"
                            variants={itemVariants}
                        >
                            Mulai Bisnis Baju Anak, <br /> <span className="text-[#FF9000]">Stok Langsung dari Gudang.</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 max-w-lg mb-8"
                            variants={itemVariants}
                        >
                            Gabung sebagai Reseller resmi Lamonte dan dapatkan akses ke produk-produk terlaris dengan harga grosir. Kami siapkan semua yang Anda butuhkan untuk sukses.
                        </motion.p>

                        <motion.ul className="space-y-3 text-left mb-8" variants={itemVariants}>
                            {[
                                "Modal Awal Hanya Rp150.000",
                                "Langsung Dapat Paket Produk Senilai Biaya Daftar",
                                "Margin Profit & Keuntungan Menarik",
                                "Dukungan Penuh & Materi Marketing Lengkap",
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
                            <CTAButton href="/form" styles="default">Daftar Jadi Reseller</CTAButton>
                            <CTAButton href={"https://wa.me/" + whatsappContacts.kakMona.phoneNumber + "?text=" + whatsappContacts.kakMona.message} styles="whatsapp">Tanya Kami</CTAButton>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image Collage */}
                    <div className="relative w-full h-[60vh] md:h-[70vh]">
                        <motion.div
                            className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl shadow-2xl cursor-pointer"
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.05, rotate: 2, zIndex: 20 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src="/assets/img/product-casual.png"
                                alt="Produk Baju Anak Casual Lamonte"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 75vw, 40vw"
                            />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl shadow-2xl border-4 border-white cursor-pointer"
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            // FIXED: Menggabungkan dua properti 'transition' menjadi satu
                            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.1, rotate: -3, zIndex: 20 }}
                        >
                            <Image
                                src="/assets/img/product-sportswear.png"
                                alt="Produk Baju Anak Sportswear Lamonte"
                                fill
                                className="object-cover rounded-xl"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

