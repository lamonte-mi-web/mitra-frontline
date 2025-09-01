'use client';
import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";

const stats = [
    {
        end: 500000,
        suffix: "+",
        label: "Produk Terjual",
        description: "Bukti kepercayaan pasar terhadap kualitas fashion anak Lamonte"
    },
    {
        end: 12,
        suffix: "+",
        label: "Tahun Pengalaman",
        description: "Dedikasi Lamonte di industri fashion anak sejak 2011"
    },
    {
        end: 99,
        suffix: "%",
        label: "Mitra Sukses",
        description: "Hampir semua mitra mencapai omzet impian dengan sistem kami"
    },
    {
        end: 700,
        suffix: "+",
        label: "Anggota Kemitraan",
        description: "Jaringan luas distributor, agen, dan reseller di seluruh Indonesia"
    },
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function HomeStatisticSection() {
    return (
        <section className="w-full min-h-[210px] flex items-center justify-center p-4 bg-[#fdf6e3]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <motion.h2
                    className="text-4xl font-bold text-center text-[#FF9000] mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Keberhasilan Kami dalam Angka
                </motion.h2>

                <motion.div
                    className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map(({ end, suffix, label, description }, idx) => (
                        <motion.div
                            key={idx}
                            className="p-6 flex flex-col bg-white rounded-xl shadow-md cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CountUp
                                end={end}
                                duration={3}
                                enableScrollSpy
                                scrollSpyOnce
                                suffix={suffix}
                                className="text-5xl text-[#FF9000] font-bold text-center"
                            />
                            <h5 className="mt-2 text-xl text-gray-800 font-semibold text-center">{label}</h5>
                            <p className="text-center text-gray-500 text-lg mt-1">{description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    className="text-center text-xl mt-8 text-[#166534] max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }} // Delay to appear after cards
                >
                    Bergabunglah dengan <strong>99% Mitra Sukses Bersama Lamonte</strong> dan rasakan pertumbuhan bisnis fashion anak Anda dengan sistem yang sudah terbukti.
                </motion.p>
            </div>
        </section>
    );
}