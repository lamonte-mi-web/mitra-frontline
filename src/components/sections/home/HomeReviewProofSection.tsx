"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, Variants } from "framer-motion";

const screenshots = [
    "/assets/img/reviews/proof1.jpg",
    "/assets/img/reviews/proof2.jpg",
    "/assets/img/reviews/proof3.jpg",
    "/assets/img/reviews/proof4.jpg",
];

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
    desktop: { breakpoint: { max: 1535, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1023, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 639, min: 0 }, items: 1 },
};

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

const carouselContainerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};


export default function HomeReviewProofSection() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-20">
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
                    Real Testimoni Customer
                </motion.h2>
                <motion.p
                    className="max-w-3xl text-center text-[#166534] mb-8 px-4 md:px-0"
                    variants={textItemVariants}
                >
                    Lihat beberapa screenshot chat dari Mitra Lamonte yang mempercayakan belanja produk di Lamonte di bawah.
                </motion.p>
            </motion.div>
            <motion.div
                className="w-full overflow-hidden"
                variants={carouselContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3500}
                    keyBoardControl={true}
                    showDots={true}
                    arrows={true}
                    itemClass="px-2"
                    pauseOnHover={true}
                    containerClass="carousel-container pb-6"
                    transitionDuration={800}
                >
                    {screenshots.map((src, i) => (
                        <motion.div
                            key={i}
                            className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05, y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Image
                                src={src}
                                alt={`Screenshot testimoni customer ${i + 1}`}
                                fill
                                className="object-cover"
                                priority={i < 4}
                                loading={i < 4 ? "eager" : "lazy"}
                            />
                        </motion.div>
                    ))}
                </Carousel>
            </motion.div>
        </section>
    );
}