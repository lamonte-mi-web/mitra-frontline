"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faTags,
    faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const UPSELL_PROGRAMS = [
    {
        icon: faArrowUp,
        title: "Naik Level Menjadi Agen",
        description: "Siap untuk skala bisnis yang lebih besar? Dapatkan keuntungan lebih tinggi, akses prioritas ke produk baru, dan konsultasi bisnis pribadi dengan menjadi Agen resmi kami.",
        link: "/agen",
        cta: "Pelajari Program Agen",
    },
    {
        icon: faTags,
        title: "Buat Brand Sendiri (Maklon)",
        description: "Punya mimpi membangun brand fashion sendiri? Wujudkan desain eksklusif Anda dengan layanan produksi custom (maklon) dari Lamonte.",
        link: "/custom-produk",
        cta: "Lihat Layanan Maklon",
    },
    {
        icon: faGraduationCap,
        title: "Perdalam Ilmu di Lamonte Academy",
        description: "Tingkatkan skill bisnis dan produksi fashion Anda. Ikuti bootcamp intensif kami yang dibimbing langsung oleh para praktisi ahli di industri.",
        link: "/academy",
        cta: "Info Lamonte Academy",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function ResellerUpsellSection() {
    return (
        <section id="upsell" className="w-full py-16 sm:py-24" aria-labelledby="upsell-heading">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="upsell-heading" className="text-3xl md:text-4xl font-bold text-[#166534]">
                        Siap Naik Level?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Sebagai mitra, perjalanan Anda tidak berhenti di sini. Jelajahi program lain dari Lamonte untuk mengakselerasi pertumbuhan bisnis Anda.
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
                            className="group bg-white rounded-xl overflow-hidden shadow-lg border border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-yellow-200"
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="p-8 flex flex-col items-center text-center h-full">
                                <div className="bg-[#FFF7ED] p-4 rounded-full mb-5">
                                    <FontAwesomeIcon
                                        icon={program.icon}
                                        className="h-8 w-8 text-[#ff9000]"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                                <p className="text-gray-600 text-base flex-grow">{program.description}</p>

                                {/* FIXED: Menghapus legacyBehavior dan tag <a> */}
                                <Link
                                    href={program.link}
                                    className="mt-6 inline-block text-[#166534] font-bold border-b-2 border-transparent transition-colors duration-300 group-hover:border-[#166534]"
                                >
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