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

// Data Keunggulan diambil dari PDF Halaman 10
const BENEFITS = [
    {
        icon: faPiggyBank,
        title: "Profit Tinggi, Tanpa Modal",
        description: "Raih margin keuntungan yang menarik tanpa perlu investasi awal untuk stok barang.",
    },
    {
        icon: faRocket,
        title: "Produk Laris & Mudah Dijual",
        description: "Jualkan koleksi fast-moving yang selalu update sesuai tren pasar fashion anak terkini.",
    },
    {
        icon: faLightbulb,
        title: "Update Tren & Banyak Pilihan",
        description: "Dapatkan akses ke ratusan pilihan produk baru setiap minggunya agar jualan Anda tetap segar.",
    },
    {
        icon: faHeadset,
        title: "Dibantu Sampai Sukses",
        description: "Kami menyediakan materi promosi, pelatihan, dan bimbingan penuh dari tim profesional.",
    },
    {
        icon: faCogs,
        title: "Didukung Sistem Terintegrasi",
        description: "Manfaatkan sistem mandiri kami yang memudahkan Anda dalam proses order hingga pelacakan.",
    },
    {
        icon: faShippingFast,
        title: "Pengiriman Seluruh Indonesia",
        description: "Kami yang mengurus packing dan pengiriman langsung ke pelanggan Anda di seluruh Indonesia.",
    },
];

// Animation Variants diadaptasi dari contoh Anda
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
        // MODIFIED: Menggunakan styling background dan padding dari contoh
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
                    <h2 id="why-lamonte-heading" className="text-4xl font-bold text-center text-amber-100">
                        Kenapa Bergabung Dengan Lamonte?
                    </h2>
                    <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
                        Anda bukan sekadar mitra, tapi bagian dari ekosistem bisnis yang kami dukung untuk tumbuh dan sukses bersama.
                    </p>
                </motion.div>

                <motion.div
                    // MODIFIED: Menggunakan grid layout dari contoh
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            key={index}
                            // MODIFIED: Menggunakan layout item dari contoh
                            className="flex flex-col text-center items-center md:flex-row md:text-left md:items-start space-y-4 md:space-y-0 md:space-x-4"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <FontAwesomeIcon
                                icon={benefit.icon}
                                // MODIFIED: Warna dan ukuran ikon disesuaikan
                                className="text-green-800 text-4xl flex-shrink-0 w-12 h-12 p-3 bg-amber-100 rounded-full"
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

