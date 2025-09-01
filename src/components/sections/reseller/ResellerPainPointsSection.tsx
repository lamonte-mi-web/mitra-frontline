"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { WHATSAPP_LINKS } from "@/lib/whatsappContacts";

// Poin masalah dipertajam dengan NLP
const PAIN_POINTS = [
    "Ingin bisnis dari rumah, tapi bingung harus mulai dari mana?",
    "Modal terbatas, takut risiko stok barang yang tidak laku?",
    "Ragu apakah produknya akan disukai pasar dan mudah dijual?",
    "Tidak punya materi promosi dan merasa berjuang sendirian?",
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ResellerPainPointsSection() {
    return (
        <section
            id="painpoints"
            aria-labelledby="painpoints-heading"
            className="w-full bg-transparent py-16 sm:py-24"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="painpoints-heading"
                            className="text-3xl md:text-4xl font-bold text-[#FF9000] mb-4"
                            variants={itemVariants}
                        >
                            Mimpi Punya Bisnis Seringkali Terhenti di Sini.
                        </motion.h2>

                        <motion.p
                            className="text-lg text-[#166534] mb-8"
                            variants={itemVariants}
                        >
                            Kami tahu Anda punya semangat wirausaha. Tapi seringkali, langkah pertama terasa berat karena berbagai keraguan ini. Apakah Anda merasakannya juga?
                        </motion.p>

                        <motion.ul className="space-y-4 mb-8" variants={itemVariants}>
                            {PAIN_POINTS.map((point, i) => (
                                <motion.li key={i} className="flex items-start gap-3" variants={itemVariants}>
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        className="text-amber-500 w-6 h-6 mt-1 flex-shrink-0"
                                    />
                                    <span className="text-[#166534] text-lg">{point}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            className="flex flex-col sm:flex-row items-start gap-4"
                            variants={itemVariants}
                        >
                            <CTAButton href={WHATSAPP_LINKS.PARTNERSHIP_INQUIRY.href} styles="default">
                                Saya Punya Pertanyaan Ini
                            </CTAButton>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        className="relative w-full aspect-[4/5] max-w-md mx-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="absolute -top-4 -right-4 w-full h-full bg-[#fcd92b] rounded-2xl"></div>
                        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-300 hover:scale-105 hover:-translate-x-2 hover:-translate-y-2">
                            <Image
                                src="/assets/img/reseller-painpoints.png"
                                alt="Ibu Indonesia sedang mempertimbangkan untuk memulai bisnis reseller baju anak dari rumah"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
