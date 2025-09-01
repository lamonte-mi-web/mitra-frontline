"use client";

import { motion, Variants } from "framer-motion";

// Animation Variants
const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const videoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4, // Video animates after the text
        },
    },
};

export default function HomeTestimonySection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <motion.div
                className="flex flex-col justify-center items-center text-center p-4"
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h2
                    className="text-4xl capitalize font-bold text-[#FF9000] mb-3 max-w-3xl"
                    variants={textItemVariants}
                >
                    Lihat Sendiri Perubahan yang Kami Hadirkan
                </motion.h2>
                <motion.p
                    className="mb-4 text-lg max-w-4xl text-[#166534]"
                    variants={textItemVariants}
                >
                    Dari pemula hingga pebisnis sukses, mitra Lamonte membagikan kisah nyata
                    bagaimana mereka mengubah impian menjadi penghasilan.
                </motion.p>
                <motion.p
                    className="mb-4 text-lg max-w-4xl text-[#166534]"
                    variants={textItemVariants}
                >
                    Tonton bagaimana sistem dan dukungan kami membantu mereka naik level
                    di bisnis fashion anak.
                </motion.p>

                {/* YouTube embed responsive */}
                <motion.div
                    className="w-full max-w-4xl aspect-video rounded-lg shadow-lg overflow-hidden"
                    variants={videoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/eCr-ey5_4Y4?si=8yOjS-OMTt0k9M_s"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.div>
        </section>
    );
}