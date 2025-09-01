"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";
import CTAButton from "@/components/CTAButton";

const partnershipTiers = [
    {
        title: "Dropshipper",
        price: "Rp 0",
        priceNote: "Pendaftaran Gratis",
        points: [
            "Tanpa modal, tanpa stok barang",
            "Pendaftaran 100% Gratis",
            "Fokus pada pemasaran, pengiriman diurus Lamonte",
            "Mendapatkan komisi dari setiap penjualan produk",
            "Dukungan penuh materi promosi & grup khusus",
        ],
        ctaLink: "/dropshipper",
        ctaText: "Pelajari Dropship",
    },
    {
        title: "Reseller",
        price: "Rp 150.000",
        priceNote: "Biaya Registrasi",
        points: [
            "Mendapatkan paket mystery box senilai Rp150.000",
            "Tidak ada minimal order untuk pembelian awal",
            "Dapat 3-5 pcs produk sampel gratis",
            "Akses ke komunitas & materi pemasaran lengkap",
            "Wajib aktif melakukan penjualan setiap bulan",
        ],
        ctaLink: "/reseller",
        ctaText: "Daftar Reseller",
    },
    {
        title: "Agen",
        price: "Rp 500.000",
        priceNote: "Biaya Registrasi",
        points: [
            "Mendapatkan paket mystery box senilai Rp500.000",
            "Minimal pembelian awal 50 Lusin",
            "Akses prioritas ke katalog & produk baru",
            "Bisa request model/warna khusus",
            "Konsultasi bisnis pribadi dengan tim Lamonte",
        ],
        ctaLink: "/agen",
        ctaText: "Daftar Agen",
    },
    {
        title: "Distributor",
        price: "Hubungi Kami",
        priceNote: "Penawaran Khusus",
        points: [
            "Hak eksklusif untuk satu wilayah/kota",
            "Potongan harga terbaik untuk profit maksimal",
            "Dukungan pemasaran dan penjualan yang luas",
            "Prioritas utama dalam pengadaan stok produk",
            "Menjadi mitra strategis utama Lamonte",
        ],
        ctaLink: "/distributor",
        ctaText: "Info Distributor",
    }
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function HomeClassificationSection() {
    return (
        <section className="w-full bg-[#fcd92b] py-16 sm:py-24" aria-labelledby="classification-heading">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="classification-heading" className="text-3xl md:text-4xl font-bold text-[#166534]">
                        Pilih Jalur Kemitraan Anda
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        Kami menyediakan berbagai level kemitraan yang dirancang untuk setiap tahap perjalanan bisnis Anda, mulai dari pemula hingga profesional.
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {partnershipTiers.map((tier) => (
                        <motion.div
                            key={tier.title}
                            className="group bg-white rounded-xl flex flex-col overflow-hidden shadow-lg border border-gray-100 transition-shadow duration-300 hover:shadow-2xl hover:shadow-yellow-300"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="p-6 text-center border-b">
                                <h3 className="text-2xl font-bold text-[#166534]">
                                    {tier.title}
                                </h3>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{tier.price}</p>
                                <p className="text-sm text-gray-500">{tier.priceNote}</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <ul className="space-y-3 text-gray-600">
                                    {tier.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                className="text-yellow-500 text-lg mr-3 flex-shrink-0 mt-1"
                                            />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="flex justify-center p-6 mt-auto bg-gray-50">
                                <CTAButton href={tier.ctaLink} styles="default" className="w-full text-center block">
                                    {tier.ctaText}
                                </CTAButton>
                            </div> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}