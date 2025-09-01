"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faTags,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

// Program upsell yang relevan untuk Dropshipper
const UPSELL_PROGRAMS = [
    {
        icon: faArrowUp,
        title: "Naik Level ke Reseller",
        description: "Sudah mahir berjualan? Tingkatkan profit Anda dengan memegang stok sendiri dan nikmati margin keuntungan yang lebih tinggi sebagai Reseller.",
        link: "/reseller",
        cta: "Pelajari Program Reseller",
    },
    {
        icon: faTags,
        title: "Wujudkan Brand Impian Anda",
        description: "Punya visi untuk brand fashion sendiri? Manfaatkan layanan produksi custom (maklon) kami untuk menciptakan produk eksklusif Anda.",
        link: "/custom-produk",
        cta: "Lihat Layanan Maklon",
    },
    {
        icon: faUserTie,
        title: "Mentorship & Coaching Eksklusif",
        description: "Asah strategi bisnis Anda lebih dalam. Dapatkan bimbingan personal dari para ahli di Lamonte Partner Center untuk akselerasi bisnis.",
        link: "/partner-center", // Ganti dengan link yang sesuai
        cta: "Info Program Mentorship",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DropshipperUpsellSection() {
    return (
        <section id="upsell" className="w-full bg-transparent py-16 sm:py-24" aria-labelledby="upsell-heading">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="upsell-heading" className="text-3xl md:text-4xl font-bold text-[#ff9000]">
                        Perjalanan Anda Tidak Berhenti di Sini
                    </h2>
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Dropshipper adalah langkah awal yang luar biasa. Saat Anda siap, Lamonte menyediakan berbagai jalur untuk membawa bisnis Anda ke level berikutnya.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {UPSELL_PROGRAMS.map((program) => (
                        <motion.div
                            key={program.title}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg border border-transparent transition-all duration-300 hover:border-[#FF9000] hover:shadow-[#FF9000]/20"
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="p-8 flex flex-col items-center text-center h-full">
                                <div className="bg-[#FFF6E8] p-4 rounded-full mb-5">
                                    <FontAwesomeIcon
                                        icon={program.icon}
                                        className="h-8 w-8 text-[#FF9000]"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                                <p className="text-gray-600 text-base flex-grow">{program.description}</p>
                                <Link href={program.link} className="mt-6 inline-block text-[#166534] font-bold border-b-2 border-transparent transition-colors duration-300 group-hover:border-[#166534]">
                                    {program.cta} &rarr;
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
