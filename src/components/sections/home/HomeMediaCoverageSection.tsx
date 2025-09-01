'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 5 },
    desktop: { breakpoint: { max: 1535, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1023, min: 640 }, items: 3 },
    mobile: { breakpoint: { max: 639, min: 0 }, items: 3 },
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

const carouselVariants: Variants = {
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

export default function HomeMediaCoverageSection() {
    const mediaItems = [
        { src: "/assets/img/media/TribunNews.png", alt: "Tribun News", link: "https://www.tribunnews.com/corona/2023/04/01/lamonte-beri-edukasi-masyarakat-jualan-itu-mudah-dan-menyenangkan" },
        { src: "/assets/img/media/Detikcom.png", alt: "Detikcom", link: "https://inet.detik.com/business/d-6656463/peluang-besar-pasarkan-pakaian-ibu-dan-anak-secara-online-saat-lebaran" },
        { src: "/assets/img/media/Go-Deals.png", alt: "Go Deals", link: "https://www.godeal.id/lamonte-id-terbaik-di-tanah-air.html" },
        { src: "/assets/img/media/LiveJournal.png", alt: "LiveJournal", link: "https://ext-5583813.livejournal.com/5715.html" },
        { src: "/assets/img/media/Republik-News.png", alt: "Republik News", link: "https://newsrepublikindonesia.blogspot.com/2021/09/lamonteid-terbaik-di-tanah-air.html" },
        { src: "/assets/img/media/UKM-Indonesia.png", alt: "UKM Indonesia", link: "https://ukmindonesia.id/baca-deskripsi-posts/6-maklon-pakaian-anak-buat-kamu-yang-mau-bikin-brand-sendiri" },
        { src: "/assets/img/media/Ngiklan.png", alt: "Ngiklan", link: "https://www.ngiklan.id/lamonte-id-terbaik-di-tanah-air.html" },
        { src: "/assets/img/media/Jabodetabek-id.png", alt: "Jabodetabek", link: "https://www.jabodetabek.id/bisnis-umkm/pr-691149972/lamonteid-terbaik-di-tanah-air" },
        { src: "/assets/img/media/Blogger-Terbaik.png", alt: "Blogger Terbaik", link: "https://bloggerterbaik.com/lamonte-id-terbaik-di-tanah-air/" },
        { src: "/assets/img/media/Penana.png", alt: "Penana", link: "https://www.penana.com/article/666037" },
        { src: "/assets/img/media/PepNews.png", alt: "Pep News", link: "https://pepnews.com/gaya/p-916351445234016/lamonteid-terbaik-di-tanah-air" },
        { src: "/assets/img/media/Penzu.png", alt: "Penzu", link: "https://penzu.com/p/d14de30f" },
    ];

    return (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-20">
            {/* Heading */}
            <motion.div
                className="flex flex-col items-center justify-center mb-10"
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h2
                    className="text-4xl font-bold capitalize text-[#FF9000] leading-snug text-center mt-6 mb-4"
                    variants={textItemVariants}
                >
                    Diakui Media Nasional
                </motion.h2>
                <motion.blockquote
                    className="text-xl text-center text-[#FF9000] border-l-4 border-[#FF9000] py-5 italic w-full max-w-4xl"
                    variants={textItemVariants}
                >
                    "Lamonte Mode Internasional, Pemain Kuat di Fashion Anak Digital"
                </motion.blockquote>
                <motion.p
                    className="text-lg text-center text-[#166534] max-w-3xl"
                    variants={textItemVariants}
                >
                    Inovasi dan kualitas kami menarik perhatian media terkemuka Indonesia. Lamonte telah terbukti sebagai pemimpin dalam industri fashion anak, menghadirkan produk dan sistem yang mengubah cara mitra meraih sukses.
                </motion.p>
            </motion.div>

            {/* Carousel */}
            <motion.div
                className="w-full overflow-hidden"
                variants={carouselVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={2000}
                    keyBoardControl
                    centerMode
                    showDots={false}
                    arrows={false}
                    containerClass="carousel-container"
                    itemClass="px-2"
                >
                    {mediaItems.map(({ src, alt, link }) => (
                        <div
                            key={src}
                            className="relative bg-white rounded-lg flex items-center justify-center aspect-[9/4] w-full max-w-[150px] md:max-w-[150px] lg:max-w-[200px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                        >
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Image src={src} alt={alt} fill className="object-contain p-2" />
                            </a>
                        </div>
                    ))}
                </Carousel>
            </motion.div>
        </section>
    );
} 