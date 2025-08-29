"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faGift, faStore, faStar } from "@fortawesome/free-solid-svg-icons";

const PERSONAS = [
    {
        name: "Orang Tua Muda",
        age: "23–40",
        description: "Mencari fashion anak trendy dan nyaman.",
        icon: faChild,
        color: "text-[#FF9000]"
    },
    {
        name: "Pecinta Tren Fashion Anak",
        age: "-",
        description: "Selalu ingin anak tampil stylish & up-to-date.",
        icon: faStar,
        color: "text-[#00B37E]"
    },
    {
        name: "Pemilik Toko Baju",
        age: "-",
        description: "Mencari produk laris untuk dijual di toko offline/online.",
        icon: faStore,
        color: "text-[#FF5722]"
    },
    {
        name: "Tante/Om Pembeli Kado",
        age: "-",
        description: "Membeli pakaian anak sebagai kado untuk keponakan.",
        icon: faGift,
        color: "text-[#3B82F6]"
    }
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }
};

export default function ResellerTargetMarketSection() {
    return (
        <section
            id="target-market"
            className="max-w-6xl mx-auto p-6 my-16"
            aria-labelledby="target-heading"
        >
            <div className="text-center mb-12">
                <motion.h3
                    id="target-heading"
                    className="text-3xl md:text-4xl font-bold text-[#FF9000]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Target Pasar & Strategi Penjualan
                </motion.h3>
                <motion.p
                    className="text-[#166534] mt-3 text-lg max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Kenali audiens utama Anda untuk strategi pemasaran yang tepat.
                </motion.p>
            </div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {PERSONAS.map((p, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-xl cursor-pointer transition-transform"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className={`text-4xl mb-4 ${p.color}`}>
                            <FontAwesomeIcon icon={p.icon} />
                        </div>
                        <h4 className="text-xl font-semibold text-[#FF9000] mb-2">{p.name}</h4>
                        <p className="text-[#166534] text-sm mb-1">{p.age}</p>
                        <p className="text-[#166534] text-base">{p.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
