"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// --- Image Data ---
// Mengasumsikan Anda memiliki 9 gambar bernama review1.png, review2.png, dst.
// Tempatkan gambar-gambar ini di direktori `public/assets/img/shopee-reviews/`.
const reviewImages = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/assets/img/shopee-reviews/review${i + 1}.png`,
    alt: `Screenshot ulasan pelanggan Shopee ${i + 1}`,
}));

// --- Animation Variants ---
const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.42, 0, 0.58, 1]
        }
    }
};

export default function ResellerReviewsSection() {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
        desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
    };

    return (
        <section id="customer-reviews" className="w-full mx-auto py-16 sm:py-24" aria-labelledby="reviews-heading">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        id="reviews-heading"
                        className="text-3xl md:text-4xl font-bold text-[#FF9000]"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Produk Terbukti Laris di Pasaran
                    </motion.h2>
                    <motion.p
                        className="text-[#166534] mt-4 text-lg max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Jangan hanya percaya kata kami. Lihat sendiri ulasan jujur dari pelanggan setia kami di marketplace.
                    </motion.p>
                </div>

                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    arrows={false}
                    showDots={true}
                    draggable={true}
                    swipeable={true}
                    containerClass="carousel-container"
                    itemClass="px-2 sm:px-3"
                >
                    {reviewImages.map((image) => (
                        <motion.div
                            key={image.id}
                            className="group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

