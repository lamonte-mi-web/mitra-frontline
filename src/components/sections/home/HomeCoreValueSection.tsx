"use client"

import { faHandshake, faHeart, faRocket, faScaleBalanced, faShield, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";

const coreValues = [
    {
        icon: faHandshake,
        title: "Syukur",
        description:
            "Kami berterima kasih atas setiap kesempatan untuk melayani dan berkembang bersama mitra. Sikap syukur ini menjadi fondasi dalam setiap langkah bisnis kami.",
    },
    {
        icon: faHeart,
        title: "Empati",
        description:
            "Memahami kebutuhan mitra dan pelanggan adalah prioritas kami. Kami mendengarkan dan merespons dengan solusi yang tepat sasaran.",
    },
    {
        icon: faTrophy,
        title: "Juara",
        description:
            "Kami berkomitmen untuk selalu memberikan yang terbaik, baik dalam produk maupun layanan, untuk memastikan kesuksesan bersama.",
    },
    {
        icon: faRocket,
        title: "Antusias",
        description:
            "Semangat dan energi positif menjadi penggerak kami dalam menciptakan inovasi dan memberikan pelayanan yang memuaskan.",
    },
    {
        icon: faShield,
        title: "Tangguh",
        description:
            "Kami menghadapi tantangan dengan ketangguhan dan tekad, memastikan stabilitas bisnis dalam berbagai kondisi pasar.",
    },
    {
        icon: faScaleBalanced,
        title: "Integritas",
        description:
            "Kejujuran dan transparansi adalah landasan dalam setiap interaksi kami dengan mitra dan pelanggan.",
    },
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each item animation
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function HomeCoreValueSection() {
    return (
        <section className="w-full bg-[#F59607] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center text-amber-100 mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Nilai & Dedikasi Kami: SEJATI
                </motion.h2>
                <motion.div
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row text-center items-center md:text-left space-y-4 md:space-y-0 md:space-x-4"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }} // Hover animation
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <FontAwesomeIcon icon={value.icon} className="text-green-600 text-5xl flex-shrink-0" />
                            <div>
                                <h5 className="text-2xl font-bold text-amber-100">{value.title}</h5>
                                <p className="text-lg text-white">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}