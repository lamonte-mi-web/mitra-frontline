"use client";

import { OrangeDivider } from "@/components/OrangeDivider";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default function ReviewProofSection() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-20">

            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-4xl font-bold text-[#FF9000] leading-snug text-center flex-shrink-0 mb-2">
                    Real Testimoni Customer
                </h2>
                <p className="max-w-3xl text-center text-[#166534] mb-8 px-4 md:px-0">
                    Lihat beberapa screenshot chat dari Mitra Lamonte yang mempercayakan belanja produk di Lamonte di bawah.
                </p>
            </div>
            <div className="w-full overflow-hidden">

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
                        <div
                            key={i}
                            className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg"
                        >
                            <Image
                                src={src}
                                alt={`Screenshot testimoni customer ${i + 1}`}
                                fill
                                className="object-cover"
                                priority={i < 4}
                                loading={i < 4 ? "eager" : "lazy"}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
