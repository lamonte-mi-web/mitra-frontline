"use client";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPiggyBank,
    faRocket,
    faLightbulb,
    faHeadset,
    faCogs,
    faShippingFast
} from "@fortawesome/free-solid-svg-icons";

// --- COPYWRITING DIPERTAJAM DENGAN PRINSIP NLP ---
const BENEFITS = [
    {
        icon: faPiggyBank,
        title: "Profit Langsung, Tanpa Risiko",
        description: "Raih keuntungan dari penjualan pertama Anda tanpa mengeluarkan modal sepeser pun untuk stok barang.",
    },
    {
        icon: faRocket,
        title: "Jualan Produk Juara",
        description: "Anda akan menjual koleksi fashion anak yang terbukti laris dan selalu dinanti pasar, membuat penjualan jadi lebih mudah.",
    },
    {
        icon: faLightbulb,
        title: "Selalu Jadi yang Paling Update",
        description: "Dapatkan akses ke ratusan produk tren terbaru setiap minggunya, jadikan toko Anda selalu segar dan relevan.",
    },
    {
        icon: faHeadset,
        title: "Anda Tidak Pernah Sendirian",
        description: "Kami bukan sekadar supplier. Tim ahli kami siap membimbing Anda dengan materi promosi dan pelatihan agar Anda sukses.",
    },
    {
        icon: faCogs,
        title: "Sistem Canggih, Kerja Mudah",
        description: "Nikmati kemudahan mengelola pesanan hingga melacak pengiriman dengan sistem terintegrasi yang kami siapkan.",
    },
    {
        icon: faShippingFast,
        title: "Fokus Jualan, Kami Urus Sisanya",
        description: "Bebaskan diri Anda dari repotnya packing dan pengiriman. Kami akan mengirimkan setiap pesanan langsung ke pelanggan Anda.",
    },
];

// ... (Animation Variants tetap sama)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

export default function DropshipperWhyLamonteSection() {
    return (
        <section
            id="why-lamonte"
            className="w-full bg-[#F59607] py-16 sm:py-24"
            aria-labelledby="why-lamonte-heading"
        >
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* --- COPYWRITING DIPERTAJAM --- */}
                    <h2 id="why-lamonte-heading" className="text-4xl font-bold text-center text-amber-100">
                        Lebih dari Sekadar Supplier, Kami Adalah Partner Sukses Anda
                    </h2>
                    <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
                        Kami membangun sebuah ekosistem bisnis di mana kesuksesan Anda adalah prioritas utama kami.
                    </p>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col text-center items-center md:flex-row md:text-left md:items-start space-y-4 md:space-y-0 md:space-x-4"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <FontAwesomeIcon
                                icon={benefit.icon}
                                className="text-[#FF9000] text-4xl flex-shrink-0 w-12 h-12 p-3 bg-amber-100 rounded-full"
                                aria-hidden="true"
                            />
                            <div>
                                <h3 className="text-2xl font-bold text-amber-100">{benefit.title}</h3>
                                <p className="text-lg text-white">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}