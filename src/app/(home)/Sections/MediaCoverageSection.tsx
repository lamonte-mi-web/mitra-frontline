"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { OrangeDivider } from "@/components/OrangeDivider";
import Image from "next/image";
import { link } from "fs";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 6 },
    desktop: { breakpoint: { max: 1535, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1023, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 639, min: 0 }, items: 1 },
};

export default function MediaCoverageSection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            {/* Heading container is flex-row to avoid vertical stacking */}
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-[2.5rem] font-bold uppercase text-gray-800 leading-snug text-center md:text-left flex-shrink-0 mb-4">
                    Dari Kecil ke Besar: Lamonte Mendapat Sorotan Eksklusif di Media Nasional dan Internasional
                </h2>
                <OrangeDivider className="mb-6" />
                <h3 className="text-xl text-gray-600 text-center md:text-left mb-8">
                    Dapatkan inspirasi dan kepercayaan dari pengalaman Lamonte yang sudah terbukti di berbagai media besar.
                </h3>

            </div>

            {/* Container for carousel, no flex-col here */}
            <div className="flex-1 px-4">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    showDots={false}
                    arrows={false}
                    containerClass="carousel-container"
                    itemClass="px-2"
                >
                    {[
                        { src: "/assets/img/media/TribunNews.png", alt: "Tribun News", link: "https://www.tribunnews.com/corona/2023/04/01/lamonte-beri-edukasi-masyarakat-jualan-itu-mudah-dan-menyenangkan" },
                        { src: "/assets/img/media/Detikcom.png", alt: "Detikcom", link: "https://inet.detik.com/business/d-6656463/peluang-besar-pasarkan-pakaian-ibu-dan-anak-secara-online-saat-lebaran" },
                        { src: "/assets/img/media/Go-Deals.png", alt: "Go Deals", link: 'https://www.godeal.id/lamonte-id-terbaik-di-tanah-air.html' },
                        { src: "/assets/img/media/LiveJournal.png", alt: "LiveJournal", link: 'https://ext-5583813.livejournal.com/5715.html' },
                        { src: "/assets/img/media/Republik-News.png", alt: "Republik News", link: 'https://newsrepublikindonesia.blogspot.com/2021/09/lamonteid-terbaik-di-tanah-air.html' },
                        { src: "/assets/img/media/UKM-Indonesia.png", alt: "UKM Indonesia", link: "https://ukmindonesia.id/baca-deskripsi-posts/6-maklon-pakaian-anak-buat-kamu-yang-mau-bikin-brand-sendiri" },
                        { src: "/assets/img/media/Ngiklan.png", alt: "Ngiklan", link: 'https://www.ngiklan.id/lamonte-id-terbaik-di-tanah-air.html' },
                        { src: "/assets/img/media/Jabodetabek-id.png", alt: "Jabodetabek", link: "https://www.jabodetabek.id/bisnis-umkm/pr-691149972/lamonteid-terbaik-di-tanah-air" },
                        { src: "/assets/img/media/Blogger-Terbaik.png", alt: "Blogger Terbaik", link: 'https://bloggerterbaik.com/lamonte-id-terbaik-di-tanah-air/' },
                        { src: "/assets/img/media/Penana.png", alt: "Penana", link: 'https://www.penana.com/article/666037' },
                        { src: "/assets/img/media/PepNews.png", alt: "Pep News", link: 'https://pepnews.com/gaya/p-916351445234016/lamonteid-terbaik-di-tanah-air' },
                        { src: "/assets/img/media/Penzu.png", alt: "Penzu", link: 'https://penzu.com/p/d14de30f' },
                    ].map(({ src, alt, link }) => (
                        <div
                            key={src}
                            className="relative bg-white rounded-lg shadow-md flex items-center justify-center w-36 h-16"
                        >
                            <a href={link}>

                                <Image src={src} alt={alt} fill className="object-contain" />
                            </a>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
