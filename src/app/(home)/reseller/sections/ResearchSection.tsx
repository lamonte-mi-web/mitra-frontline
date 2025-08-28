"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, Variants, Transition } from 'framer-motion';

const researchPoints = [
    {
        title: "Pertumbuhan Pasar Stabil",
        description: "Pasar menunjukkan kenaikan bertahap setiap tahunnya, menandakan permintaan yang konsisten."
    },
    {
        title: "Proyeksi Jangka Panjang",
        description: "Proyeksi menuju 2029 menyiratkan potensi jangka panjang yang kuat di segmen fashion anak."
    },
    {
        title: "Peluang Usaha Semakin Relevan",
        description: "Indikator ini menunjukkan peluang usaha di sektor pakaian anak, termasuk reseller, manufaktur, dan keagenan, semakin menjanjikan."
    }
];

// ✅ Corrected Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } // Using cubic-bezier for easeOut
    }
};

export default function ResearchSection() {
    return (
        <section id="research" className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <motion.h2
                    className="text-4xl font-bold capitalize text-[#FF9000] mb-3 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                    viewport={{ once: true }}
                >
                    Kenapa Fashion Anak Itu Potensial?
                </motion.h2>
                <motion.p
                    className="text-center text-[#166534] font-semibold text-xl max-w-5xl mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
                    viewport={{ once: true }}
                >
                    Pasar fashion anak menawarkan peluang bisnis yang menguntungkan dengan risiko minimal.
                    Data terbaru menunjukkan tren pertumbuhan positif di segmen ini.
                </motion.p>
            </div>

            <motion.div
                className="grid md:grid-cols-[2fr_3fr] gap-6 max-w-6xl mx-auto w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {/* Chart Image */}
                <motion.div
                    className="relative w-full h-full mx-auto md:mx-0 aspect-square rounded-lg overflow-hidden shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="/assets/img/research.png"
                        alt="Grafik Pertumbuhan Pasar Fashion Anak"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={80}
                    />
                </motion.div>

                {/* Research Points */}
                <div className="flex flex-col justify-center gap-6">
                    {researchPoints.map(({ title, description }, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-lg cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -3, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" }}
                        >
                            <FontAwesomeIcon icon={faChevronRight} className="text-[#FF9000] text-xl mt-1" />
                            <div>
                                <h5 className="text-xl font-bold text-[#FF9000]">{title}</h5>
                                <p className="text-[#166534] text-lg">{description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
