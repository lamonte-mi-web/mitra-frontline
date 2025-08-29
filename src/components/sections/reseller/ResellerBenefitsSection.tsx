"use client";

import { motion, Variants } from "framer-motion";
import CTAButton from "@/components/CTAButton";

const BENEFITS = [
    "Profit tinggi dengan modal rendah",
    "Dibantu hingga sukses oleh tim profesional",
    "Free 3–5 sample produk untuk mulai jualan",
    "Free akses komunitas reseller Lamonte",
    "Free materi promosi (foto, caption, dsb.)",
    "Sistem mandiri yang mudah digunakan"
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, ease: [0.42, 0, 0.58, 1] }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
    }
};

export default function ResellerBenefitsSection() {
    return (
        <section
            id="benefits"
            className="w-full mx-auto p-6 my-16 bg-green-600/80 rounded-2xl"
            aria-labelledby="benefits-heading"
        >
            <div className="container max-w-6xl mx-auto">

                <div className="text-center mb-10">
                    <motion.h3
                        id="benefits-heading"
                        className="text-3xl md:text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                        viewport={{ once: true }}
                    >
                        Keuntungan Jadi Reseller Lamonte
                    </motion.h3>
                    <motion.p
                        className="text-white/90 mt-3 text-lg max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
                        viewport={{ once: true }}
                    >
                        Bergabung dengan Lamonte memberikan keuntungan yang nyata untuk memulai dan mengembangkan bisnis fashion anak dari rumah.
                    </motion.p>
                </div>

                <motion.ul
                    className="grid md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {BENEFITS.map((benefit, i) => (
                        <motion.li
                            key={i}
                            className="flex items-start gap-3 p-4 rounded-lg bg-white shadow hover:shadow-lg cursor-pointer transition-shadow"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, y: -3, transition: { duration: 0.3 } }}
                        >
                            <svg
                                className="flex-shrink-0 w-6 h-6 text-[#FF9000] mt-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                                <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[#166534] text-lg font-medium">{benefit}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className="mt-10 text-center">
                    <CTAButton source="benefits_cta"></CTAButton>
                </div>
            </div>
        </section>
    );
}
