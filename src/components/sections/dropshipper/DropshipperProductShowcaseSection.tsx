"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CTAButton from "@/components/CTAButton";

// Data kategori produk dari Panduan Distributor Hal. 17
const PRODUCT_CATEGORIES = [
    {
        name: "Pakaian Kasual (Casual Wear)",
        description: "T-shirt, kemeja, hoodie, jaket, dan sweater.",
        imageUrl: "/assets/img/product-casual.png",
    },
    {
        name: "Pakaian Olahraga (Sportswear)",
        description: "Jersey, pakaian latihan, dan setelan olahraga (tracksuit).",
        imageUrl: "/assets/img/product-sportswear.png",
    },
    {
        name: "Seragam & Pakaian Kerja (Uniforms)",
        description: "Seragam kantor, seragam sekolah, dan seragam industri.",
        imageUrl: "/assets/img/product-uniforms.png",
    },
    {
        name: "Fashion Custom (Custom Design)",
        description: "Produksi berdasarkan desain eksklusif dari brand Anda sendiri.",
        imageUrl: "/assets/img/product-custom.png",
    },
];

const responsiveCarousel = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DropshipperProductShowcaseSection() {
    return (
        <section id="product-showcase" className="w-full bg-transparent py-16 sm:py-24" aria-labelledby="product-showcase-heading">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="product-showcase-heading" className="text-3xl md:text-4xl font-bold text-[#ff9000]">
                        Produk Terlaris yang Akan Anda Jual
                    </h2>
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Sebagai dropshipper, Anda mendapat akses penuh ke seluruh katalog produk kami yang fast-moving dan selalu up-to-date tanpa perlu membeli stoknya.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Carousel
                        responsive={responsiveCarousel}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-40-px px-4"
                        arrows={false}
                        showDots={true}
                    >
                        {PRODUCT_CATEGORIES.map((category) => (
                            <motion.div
                                key={category.name}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full"
                                variants={itemVariants}
                            >
                                <div className="relative w-full h-64">
                                    <Image
                                        src={category.imageUrl}
                                        alt={`Kategori Produk Lamonte - ${category.name}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                                    <p className="text-gray-600 mt-2">{category.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </Carousel>
                </motion.div>
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <CTAButton href="/form" styles="default">
                        Mulai Jualan Sekarang
                    </CTAButton>
                </motion.div>
            </div>
        </section>
    );
}