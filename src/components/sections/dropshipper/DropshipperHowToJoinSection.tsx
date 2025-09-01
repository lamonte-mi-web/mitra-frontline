"use client";

import { motion, Variants } from "framer-motion";
import CTAButton from "@/components/CTAButton";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function DropshipperHowToJoinSection() {
    return (
        <section id="how-to-join" className="w-full bg-transparent py-16 sm:py-24" aria-labelledby="how-to-join-heading">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="how-to-join-heading" className="text-3xl md:text-4xl font-bold text-[#FF9000]">
                        Hanya 3 Langkah Mudah untuk Memulai
                    </h2>
                    {/* MODIFIED: Body text color changed to green */}
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Bergabung dengan komunitas dropshipper Lamonte cepat dan 100% gratis. Ikuti langkah-langkah di bawah ini untuk memulai perjalanan bisnis Anda.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <ol className="list-decimal space-y-8">
                        <motion.li variants={itemVariants}>
                            {/* MODIFIED: Body text color changed to green */}
                            <h3 className="text-xl font-bold text-[#166534] mb-1">Isi Formulir Pendaftaran</h3>
                            <p className="text-[#166534]">
                                Klik tombol di bawah dan isi data diri Anda dengan lengkap di formulir pendaftaran online kami. Prosesnya hanya 2 menit!
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            {/* MODIFIED: Body text color changed to green */}
                            <h3 className="text-xl font-bold text-[#166534] mb-1">Terima Konfirmasi & Panduan</h3>
                            <p className="text-[#166534]">
                                Tim kami akan memverifikasi data Anda. Setelah disetujui, Anda akan diundang ke grup WhatsApp khusus dan mendapatkan semua materi untuk berjualan, termasuk katalog dan foto produk resmi.
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            {/* MODIFIED: Body text color changed to green */}
                            <h3 className="text-xl font-bold text-[#166534] mb-1">Mulai Berjualan & Raih Komisi</h3>
                            <p className="text-[#166534]">
                                Selamat! Anda resmi menjadi dropshipper Lamonte. Mulai promosikan produk ke jaringan Anda dan dapatkan komisi dari setiap penjualan yang berhasil.
                            </p>
                        </motion.li>
                    </ol>
                </motion.div>
                
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <CTAButton href="https://mitra.lamonte.co.id/form" styles="default" animated={true}>
                        Isi Formulir Sekarang (Gratis)
                    </CTAButton>
                </motion.div>
            </div>
        </section>
    );
}