"use client";

import { motion, Variants } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TESTIMONIALS = [
    {
        name: "Ayu P.",
        location: "Jakarta",
        text: "Bergabung dengan Lamonte adalah keputusan terbaik! Produk laris, support luar biasa.",
    },
    {
        name: "Rian S.",
        location: "Bandung",
        text: "Dukungan marketing dan komunitas membuat saya cepat naik level sebagai reseller.",
    },
    {
        name: "Lina M.",
        location: "Surabaya",
        text: "Mudah mulai bisnis dari rumah dengan modal minim. Profit cepat terasa!",
    },
    // Add more testimonials as needed
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }
};

export default function ResellerTestimonialsSection() {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 3, slidesToSlide: 1 },
        desktop: { breakpoint: { max: 1536, min: 1024 }, items: 2, slidesToSlide: 1 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 1, slidesToSlide: 1 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 }
    };

    return (
        <section id="testimonials" className="max-w-6xl mx-auto p-6 my-16" aria-labelledby="testimonials-heading">
            <motion.div className="text-center mb-12">
                <motion.h3
                    id="testimonials-heading"
                    className="text-3xl md:text-4xl font-bold text-[#FF9000]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Kisah Sukses Reseller Lamonte
                </motion.h3>
                <motion.p
                    className="text-[#166534] mt-3 text-lg max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Lihat pengalaman mereka yang sukses memulai bisnis fashion anak dari rumah.
                </motion.p>
            </motion.div>

            <Carousel
                responsive={responsive}
                autoPlay={true}            // automatic scrolling
                autoPlaySpeed={4000}       // 4s per slide
                infinite={true}            // loop infinitely
                arrows={false}             // hide arrows to prevent overlap
                draggable={true}           // allow mouse drag
                swipeable={true}           // allow touch swipe
                containerClass="carousel-container"
                itemClass="px-3"
            >
                {TESTIMONIALS.map((t, i) => (
                    <motion.div
                        key={i}
                        className="bg-white rounded-2xl p-6 shadow hover:shadow-xl flex flex-col items-center text-center cursor-pointer"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.03, y: -3 }}
                    >
                        <p className="text-[#166534] text-base mb-3">&quot;{t.text}&quot;</p>
                        <h5 className="text-lg font-semibold text-[#FF9000]">{t.name}</h5>
                        <span className="text-sm text-[#166534]">{t.location}</span>
                    </motion.div>
                ))}
            </Carousel>
        </section>
    );
}
