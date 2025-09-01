"use client";
import CTAButton from "@/components/CTAButton";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faWallet, faSearch, faBullhorn, faUsersSlash } from "@fortawesome/free-solid-svg-icons";

// Data pain points dengan copywriting yang sudah dipertajam
const topRowPoints = [
    {
        icon: faHome,
        title: "Ingin Bebas Finansial dari Rumah?",
        description: "Anda punya impian meraih penghasilan besar, tapi ingin tetap bisa fleksibel mengurus keluarga dari rumah.",
    },
    {
        icon: faWallet,
        title: "Terhalang Modal & Pengalaman?",
        description: "Ide bisnis banyak, tapi seringkali terhenti karena butuh modal besar dan belum punya pengalaman sama sekali.",
    }
];

const bottomRowPoints = [
    {
        icon: faSearch,
        title: "Ragu Produknya Laku?",
        description: "Takut salah pilih produk dan akhirnya barang hanya menumpuk tak terjual karena tidak diminati pasar.",
    },
    {
        icon: faBullhorn,
        title: "Tidak Tahu Cara Promosi?",
        description: "Punya produk bagus tapi bingung bagaimana cara memasarkannya agar bisa dilihat oleh calon pembeli yang tepat.",
    },
    {
        icon: faUsersSlash,
        title: "Merasa Berjuang Sendirian?",
        description: "Supplier lepas tangan dan tidak memberikan dukungan bimbingan atau materi promosi untuk membantu Anda.",
    }
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DropshipperPainPointsSection() {
    return (
        <section
            id="painpoints"
            aria-labelledby="painpoints-heading"
            className="w-full bg-transparent py-16 sm:py-24 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF9000]/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <motion.h2
                        id="painpoints-heading"
                        className="text-3xl md:text-4xl font-bold text-[#FF9000]"
                        variants={itemVariants}
                    >
                        Kami Paham Rintangan Anda untuk Memulai
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Banyak orang punya mimpi bisnis, namun seringkali terhenti oleh tantangan yang terasa berat. Mungkin beberapa di antaranya terdengar familiar bagi Anda.
                    </motion.p>
                </motion.div>

                <div className="mt-12 flex flex-col gap-8">
                    {/* Top Row - 2 Items */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {topRowPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                // Menggunakan styling kartu yang lebih premium
                                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border-t-4 border-[#FF9000] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                variants={itemVariants}
                            >
                                <div className="inline-block bg-[#166534] p-4 rounded-full mb-4">
                                    <FontAwesomeIcon icon={point.icon} className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
                                <p className="text-gray-600 text-base">{point.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom Row - 3 Items */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {bottomRowPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                // Menggunakan styling kartu yang lebih premium
                                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border-t-4 border-[#FF9000] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                variants={itemVariants}
                            >
                                <div className="inline-block bg-[#166534] p-4 rounded-full mb-4">
                                    <FontAwesomeIcon icon={point.icon} className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
                                <p className="text-gray-600 text-base">{point.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={itemVariants}
                >
                    <p className="text-xl text-[#166534] font-semibold max-w-3xl mx-auto">
                        Jangan biarkan rintangan ini menghentikan mimpi Anda. Lamonte hadir untuk menjawab semua tantangan ini.
                    </p>
                    <div className="mt-6">
                        <CTAButton href="/form" styles="default">Saya Mau Solusinya</CTAButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}