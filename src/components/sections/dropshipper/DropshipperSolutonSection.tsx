"use client";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faClock, faHome, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// --- COPYWRITING DIPERTAJAM ---
const SOLUTIONS = [
    {
        icon: faMoneyBillWave,
        title: "Mulai Tanpa Modal, Tanpa Risiko",
        description: "Pendaftaran 100% gratis. Anda bisa langsung memulai bisnis fashion anak impian Anda hari ini juga, tanpa perlu khawatir soal biaya.",
    },
    {
        icon: faClock,
        title: "Bisnis di Tangan Anda",
        description: "Atur jam kerja dan strategi penjualan Anda sendiri. Jadilah bos bagi diri Anda dan jalankan bisnis sesuai gaya hidup Anda.",
    },
    {
        icon: faBullhorn,
        title: "Didukung Penuh oleh Ahlinya",
        description: "Anda tidak sendirian. Dapatkan akses ke materi promosi siap pakai, foto produk profesional, dan bimbingan langsung dari tim marketing kami.",
    },
    {
        icon: faHome,
        title: "Kantor Anda Adalah di Mana Saja",
        description: "Cukup dengan laptop atau smartphone, Anda bisa menjalankan bisnis dan meraih profit dari kafe, rumah, atau di mana pun Anda berada.",
    },
];

// ... (Animation Variants tetap sama)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function DropshipperSolutionSection() {
    return (
        <section
            id="solution"
            className="w-full bg-[#fcd92b] py-16 sm:py-24"
            aria-labelledby="solution-heading"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* --- COPYWRITING DIPERTAJAM --- */}
                    <h2 id="solution-heading" className="text-3xl md:text-4xl font-bold text-[#166534]">
                        Semua yang Anda Butuhkan untuk Sukses, Sudah Kami Siapkan.
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        Fokus saja pada penjualan. Biarkan kami yang mengurus sisanya, mulai dari produk hingga dukungan ahli untuk Anda.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Left Column Solutions */}
                    <div className="space-y-8">
                        {SOLUTIONS.slice(0, 2).map((solution) => (
                            <motion.div
                                key={solution.title}
                                className="bg-white p-6 rounded-xl shadow-lg text-left cursor-pointer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <FontAwesomeIcon icon={solution.icon} className="h-8 w-8 text-[#ff9000] mb-3" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{solution.title}</h3>
                                <p className="text-gray-600 text-base">{solution.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <motion.div
                        className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-first lg:order-none"
                        variants={imageVariants}
                    >
                        <Image
                            src="/assets/img/dropshipper-solutions.png"
                            alt="Ibu Indonesia bahagia menjalankan bisnis dropship Lamonte dari rumah"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                    </motion.div>

                    {/* Right Column Solutions */}
                    <div className="space-y-8">
                        {SOLUTIONS.slice(2, 4).map((solution) => (
                            <motion.div
                                key={solution.title}
                                className="bg-white p-6 rounded-xl shadow-lg text-left cursor-pointer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <FontAwesomeIcon icon={solution.icon} className="h-8 w-8 text-[#ff9000] mb-3" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{solution.title}</h3>
                                <p className="text-gray-600 text-base">{solution.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}