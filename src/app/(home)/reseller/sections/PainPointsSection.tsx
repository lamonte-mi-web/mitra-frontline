"use client";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const WA_LINK =
    "https://wa.me/+628111089921?text=Halo%20Mila%2C%20saya%20tertarik%20jadi%20reseller%20Lamonte.%20Bisa%20bantu%20info%20lebih%20lanjut%3F";

const POINTS = [
    "Mau raup jutaan tapi maunya di rumah saja?",
    "Terbatas modal, waktu, atau pengalaman berjualan?",
    "Belum ketemu produk yang terbukti laris?",
    "Kesulitan mempromosikan produk secara efektif?",
    "Kurang dukungan & materi pemasaran dari supplier?",
];

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            ease: [0.42, 0, 0.58, 1]
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }
};

export default function PainPointsSection() {
    return (
        <section
            id="painpoints"
            aria-labelledby="painpoints-heading"
            className="max-w-6xl mx-auto p-6 my-10"
        >
            <motion.div
                className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Left: Copy */}
                <motion.div className="w-full md:w-6/12 flex flex-col gap-4" variants={itemVariants}>
                    <h3
                        id="painpoints-heading"
                        className="text-3xl md:text-4xl font-bold text-[#ff9000] mb-4"
                    >
                        Masalah yang Sering Dihadapi Calon Reseller
                    </h3>

                    <p className="text-base md:text-lg text-[#166534] mb-6 max-w-2xl">
                        Lamonte hadir untuk menutup semua gap itu. Produk fast-moving, dukungan
                        pemasaran, dan sistem kemitraan yang memudahkan Anda mulai dan scaling
                        tanpa pusing.
                    </p>

                    <ul className="space-y-3 mb-6" role="list" aria-label="Daftar masalah calon reseller">
                        {POINTS.map((p, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start gap-3 p-2 rounded-lg cursor-pointer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, x: 5, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <svg
                                    className="flex-shrink-0 mt-1 w-6 h-6 text-amber-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[#166534]">{p}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <CTAButton source="reseller_painpoints" className="mx-auto md:mx-0">
                        </CTAButton>

                        <CTAButton
                            styles="whatsapp"
                            href={WA_LINK}
                            source="reseller_painpoints_wa"
                            className="mx-auto md:mx-0"
                            ariaLabel="Hubungi via WhatsApp"
                        >
                            Chat via WhatsApp
                        </CTAButton>
                    </div>

                    <p className="text-xs text-[#166534] mt-4 max-w-sm">
                        Catatan: Pendaftaran resmi lewat form — hati-hati penipuan. Lihat rekening resmi di halaman <em>Syarat & Ketentuan</em>.
                    </p>
                </motion.div>

                {/* Right: Visual */}
                <motion.div
                    className="w-full md:w-6/12 flex items-center justify-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative w-[320px] md:w-[420px] lg:w-[520px] aspect-square rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/assets/img/reseller-painpoints.jpeg"
                            alt="Ilustrasi reselling baju anak dari rumah"
                            fill
                            className="object-cover"
                            priority={false}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
