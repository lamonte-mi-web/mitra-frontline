"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, Variants } from 'framer-motion';

const researchPoints = [
    {
        title: "Belanja Online Jadi Kebiasaan",
        description: "80% ibu di Indonesia kini membeli baju anak secara online — peluang pasar yang tak boleh dilewatkan (Survei Nielsen)."
    },
    {
        title: "Pasar Terus Melebar",
        description: "4,2 juta kelahiran setiap tahun menciptakan permintaan fashion anak yang terus meningkat (Data Kementerian Kesehatan 2023)."
    },
    {
        title: "Tren Pencarian Naik",
        description: 'Pencarian “baju anak” tumbuh 20% sepanjang 2023 — sinyal kuat untuk memulai bisnis sekarang (Google Trends).'
    }
];

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

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const pointItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function HomeResearchSection() {
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
                    className="text-4xl font-bold capitalize text-[#FF9000] mb-3 text-center"
                    variants={textItemVariants}
                >
                    Fakta yang Menguatkan Peluang Bisnis Anda
                </motion.h2>
                <motion.p
                    className="text-center text-[#166534] font-semibold text-xl max-w-5xl mb-6"
                    variants={textItemVariants}
                >
                    Data terbaru menunjukkan pasar fashion anak di Indonesia sedang berada di puncak pertumbuhan.
                    Ini adalah waktu terbaik untuk mengambil posisi dan mulai menghasilkan.
                </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-6 max-w-6xl mx-auto w-full">
                {/* Image */}
                <motion.div
                    className="relative w-full h-full mx-auto md:mx-0 aspect-square rounded-lg overflow-hidden shadow-lg"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Image
                        src="/assets/img/support-research.png"
                        alt="Ilustrasi Data Pasar Fashion Anak"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={80}
                    />
                </motion.div>

                {/* Research Points */}
                <motion.div
                    className="flex flex-col justify-center gap-6"
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {researchPoints.map(({ title, description }, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-4"
                            variants={pointItemVariants}
                        >
                            <FontAwesomeIcon icon={faChevronRight} className="text-[#FF9000] text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h5 className="text-xl font-bold text-[#FF9000]">{title}</h5>
                                <p className="text-[#166534] text-lg">{description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}