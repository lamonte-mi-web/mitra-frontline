"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Data Statistik dari PDF
const STATS = [
    { value: 14, label: "Tahun Pengalaman", suffix: "+" },
    { value: 1000, label: "Mitra Aktif", suffix: "+" },
    { value: 15000, label: "Produk/Bulan", suffix: "+" },
    { value: 10, label: "Desainer Profesional", suffix: "+" },
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DropshipperAboutUsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section id="about-us" className="w-full bg-transparent py-16 sm:py-24" aria-labelledby="about-us-heading">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <motion.div
                        className="relative w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow-xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src="/assets/img/dropshipper-about-us.png"
                            alt="Tim Lamonte sedang berdiskusi mengenai strategi bisnis fashion anak"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>

                    {/* Right Column: Text and Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2
                            id="about-us-heading"
                            className="text-3xl md:text-4xl font-bold text-[#FF9000] mb-4"
                            variants={itemVariants}
                        >
                            Partner Bisnis yang Bisa Anda Andalkan
                        </motion.h2>
                        <motion.p
                            className="text-lg text-[#166534] mb-8"
                            variants={itemVariants}
                        >
                            Didirikan sejak 2011, PT Lamonte Mode Internasional telah tumbuh menjadi salah satu pemain utama di industri fashion anak Indonesia. Misi kami adalah menyediakan produk berkualitas tinggi dengan harga terjangkau, sambil terus berinovasi mengikuti tren untuk mendukung kesuksesan ribuan mitra kami di seluruh negeri.
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div
                            ref={ref}
                            className="grid grid-cols-2 gap-6"
                            variants={containerVariants}
                        >
                            {STATS.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    className="bg-slate-50 p-4 rounded-lg text-center cursor-pointer"
                                    variants={itemVariants}
                                    // ADDED: Hover animation
                                    whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <p className="text-3xl md:text-4xl font-bold text-[#166534]">
                                        {inView && <CountUp end={stat.value} duration={2.5} />}
                                        {stat.suffix}
                                    </p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}