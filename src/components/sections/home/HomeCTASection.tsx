"use client"

import CTAButton from "@/components/CTAButton";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Animation Variants
const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Creates a sequence for child animations
        },
    },
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export default function HomeCTASection() {
    return (
        <section className="w-full bg-[#33A940] py-16 overflow-hidden"> {/* Added overflow-hidden */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2
                            className="text-5xl font-bold text-white mb-6"
                            variants={textItemVariants}
                        >
                            Saatnya Bergabung dan Raih Kesuksesan Bersama Lamonte
                        </motion.h2>
                        <motion.p
                            className="text-white text-xl mb-3"
                            variants={textItemVariants}
                        >
                            Tidak perlu menunggu momen sempurna. Mitra sukses kami memulainya dengan satu langkah kecil — dan kini mereka memetik hasil besar.
                        </motion.p>
                        <motion.p
                            className="text-white text-lg mb-6"
                            variants={textItemVariants}
                        >
                            Bergabunglah hari ini, dan jadilah bagian dari kesuksesan Lamonte.
                        </motion.p>
                        <motion.div variants={textItemVariants}>
                            <CTAButton />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative w-full h-64 md:h-full mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Image
                            src="/assets/img/supportimg-cta.png"
                            alt="Image for supporting the CTA"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={80}
                        />
                    </motion.div>
                </div>
            </div>
        </section >
    );
}