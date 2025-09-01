"use client";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faClock, faHome, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

// Data untuk Solution Cards, diambil dari PDF
const SOLUTIONS = [
    {
        icon: faMoneyBillWave,
        title: "Pendaftaran Gratis, Tanpa Modal",
        description: "Bergabung menjadi dropshipper tidak dikenakan biaya pendaftaran sama sekali (Gratis). Anda bisa memulai bisnis tanpa risiko finansial.",
    },
    {
        icon: faClock,
        title: "Fleksibilitas Penuh",
        description: "Anda bebas mengelola bisnis sesuai gaya dan waktu Anda sendiri, tanpa ada sistem yang membebani.",
    },
    {
        icon: faBullhorn,
        title: "Dukungan Penuh Tim Marketing",
        description: "Dapatkan bimbingan eksklusif, materi promosi, dan panduan langsung dari tim marketing kami yang berpengalaman.",
    },
    {
        icon: faHome,
        title: "Jualan dari Mana Saja",
        description: "Tanpa perlu keluar rumah, Anda tetap bisa menjalankan bisnis dan menghasilkan jutaan rupiah. Praktis dan menguntungkan.",
    },
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


export default function DropshipperSolutionSection() {
    return (
        <section
            id="solution"
            className="w-full bg-[#fcd92b] py-16 sm:py-24"
            aria-labelledby="solution-heading"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="solution-heading" className="text-3xl md:text-4xl font-bold text-[#166534]">
                        Solusi Cerdas untuk Bisnis Anda
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Kami menghilangkan semua hambatan agar Anda bisa langsung fokus berjualan dan meraih keuntungan.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {SOLUTIONS.map((solution, index) => (
                        <motion.div
                            key={index}
                            // ADDED: Menambahkan cursor-pointer untuk UX
                            className="bg-white p-6 rounded-xl shadow-lg text-left cursor-pointer"
                            variants={itemVariants}
                            // ADDED: Animasi saat kursor mouse di atas elemen
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <FontAwesomeIcon
                                icon={solution.icon}
                                className="h-8 w-8 text-[#ff9000] mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{solution.title}</h3>
                            <p className="text-gray-600 text-base">{solution.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}