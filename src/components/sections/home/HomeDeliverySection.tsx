"use client"
import { motion, Variants } from "framer-motion";

// Animation Variants
const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between title and paragraph animation
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
            delay: 0.4, // Video animates slightly after the text
        },
    },
};


export default function HomeDeliverySection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <motion.div
                className="flex flex-col items-center justify-center mb-6"
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h2
                    className="text-4xl font-bold text-[#FF9000] leading-snug text-center flex-shrink-0 mb-2"
                    variants={textItemVariants}
                >
                    Pengiriman Cepat ke Seluruh Indonesia!
                </motion.h2>
                <motion.p
                    className="max-w-3xl text-center text-[#166534] mb-8 px-4 md:px-0"
                    variants={textItemVariants}
                >
                    Kami telah bekerjasama dengan berbagai Expedisi untuk memastikan pesanan kamu terkirim dengan cepat dan hemat.
                    <br />
                    <br />
                    Melayani pengiriman ke seluruh Indonesia!
                </motion.p>
            </motion.div>

            {/* Video iframe below the text */}
            <motion.div
                className="flex justify-center"
                variants={videoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <iframe
                    width="1120"
                    height="630"
                    src="https://www.youtube.com/embed/DwMpK4z11_I"
                    title="Pengiriman Satu Customer Grosir Baju Anak Import Lamonte.id"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="max-w-full rounded-lg shadow-2xl"
                ></iframe>
            </motion.div>
        </section>
    );
}