"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowTrendUp, faStore } from '@fortawesome/free-solid-svg-icons';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CTAButton from '@/components/CTAButton';
import { WHATSAPP_LINKS } from '@/lib/whatsappContacts';

// Poin riset dipertajam dengan NLP
const researchPoints = [
    {
        icon: faChartLine,
        title: "Pasar Stabil & Terus Tumbuh",
        description: "Permintaan yang konsisten dibuktikan dengan kenaikan pasar yang terjadi setiap tahunnya. Ini bukan bisnis musiman."
    },
    {
        icon: faArrowTrendUp,
        title: "Potensi Jangka Panjang yang Kuat",
        description: "Proyeksi pertumbuhan hingga 2029 menunjukkan bahwa ini adalah investasi bisnis yang cerdas untuk masa depan Anda."
    },
    {
        icon: faStore,
        title: "Peluang Usaha yang Sangat Relevan",
        description: "Menjadi reseller, agen, atau distributor di sektor ini semakin menjanjikan seiring dengan pertumbuhan pasar yang masif."
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ResellerResearchSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section id="research" className="w-full bg-transparent py-16 sm:py-24" aria-labelledby="research-heading">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="research-heading" className="text-3xl md:text-4xl font-bold text-[#FF9000]">
                        Anda Berada di Tengah Peluang Emas
                    </h2>
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Bisnis fashion anak bukan sekadar tren, tapi sebuah pasar raksasa yang terus bertumbuh. Data membuktikan ini adalah pilihan bisnis yang cerdas.
                    </p>
                </motion.div>

                {/* Bagian utama dengan layout baru */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Kiri: Poin-poin riset */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {researchPoints.map((point) => (
                            <motion.div
                                key={point.title}
                                className="flex items-start gap-5 p-6 bg-slate-50 rounded-xl shadow-sm cursor-pointer"
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.08)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="flex-shrink-0 bg-[#166534] text-white rounded-lg w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={point.icon} className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{point.title}</h3>
                                    <p className="text-gray-600 mt-1">{point.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Kanan: Visual Data */}
                    <motion.div
                        ref={ref}
                        className="bg-white rounded-2xl shadow-xl p-8 text-center cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
                    >
                        <h3 className="text-2xl font-bold text-[#166534] mb-4">Angka Tidak Pernah Bohong</h3>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                            <Image
                                src="/assets/img/research.png"
                                alt="Grafik Pertumbuhan Pasar Pakaian di Indonesia oleh Statista"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <p className="text-lg text-gray-600">
                            Pasar pakaian anak di Indonesia diproyeksikan akan meroket hingga mencapai nilai lebih dari:
                        </p>
                        {/* MODIFIED: Mengubah Dolar ke Rupiah */}
                        <div className="text-5xl md:text-6xl font-extrabold text-[#FF9000] my-3">
                            {inView && <CountUp start={0} end={88} duration={2.5} prefix="Rp " suffix=" Triliun" />}
                        </div>
                        <p className="text-lg font-semibold text-gray-500">
                            pada tahun 2029.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

