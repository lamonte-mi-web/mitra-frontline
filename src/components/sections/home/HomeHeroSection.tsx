"use client"
import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            // FIX: Replaced the custom cubic-bezier array with a more stable, named easing function.
            ease: "easeOut",
        },
    },
};

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

export default function HomeHeroSection() {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <Image
                src="/assets/img/bg-cta.png"
                alt="Background CTA Section"
                fill
                className="object-cover"
                priority
            />
            <motion.div
                className="absolute inset-0 bg-amber-500/80 z-10"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
            />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold capitalize text-[#3B1F0B] mb-3 max-w-5xl leading-tight"
                        variants={itemVariants}
                    >
                        99% Mitra Sukses Bersama Lamonte
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-[#3B1F0B] font-semibold max-w-5xl mb-6"
                        variants={itemVariants}
                    >
                        Saatnya Anda bergabung dan meraih omzet impian di bisnis fashion anak,
                        dengan sistem yang sudah terbukti membawa ratusan mitra naik level.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <CTAButton styles="brown" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}