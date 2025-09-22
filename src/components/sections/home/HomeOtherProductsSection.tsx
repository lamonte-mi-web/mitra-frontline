"use client"
import { faIndustry, faGraduationCap, faMobileAlt, faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const otherServices = [
    {
        title: "Produksi Custom & Seragam",
        description: "Punya brand sendiri atau butuh seragam? Wujudkan desain impian Anda dengan layanan maklon eksklusif dan produksi seragam berkualitas dari kami.",
        icon: faIndustry,
        link: "/",
    },
    {
        title: "Paket Usaha Siap Jual",
        description: "Mulai bisnis tanpa ribet. Dapatkan paket usaha baju anak terlaris yang sudah kami kurasi, lengkap dengan produk pilihan untuk Anda.",
        icon: faBoxesPacking,
        link: "/",
    },
    {
        title: "Lamonte Academy",
        description: "Ikuti program bootcamp intensif kami untuk menjadi talenta siap kerja di industri fashion, dibimbing langsung oleh para praktisi ahli.",
        icon: faGraduationCap,
        link: "/",
    },
    {
        title: "Virtual Shopping",
        description: "Rasakan sensasi belanja grosir personal dari rumah Anda melalui video call langsung dengan tim gudang kami yang interaktif.",
        icon: faMobileAlt,
        link: "/",
    },
];


// Animation Variants
const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomeOtherProductsSection() {
    return (
        <section className="w-full py-16 sm:py-24" aria-labelledby="other-services-heading">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="other-services-heading"
                        className="text-3xl md:text-4xl capitalize font-bold text-[#FF9000] leading-tight"
                    >
                        Lebih dari Sekadar Kemitraan
                    </h2>
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Kami menyediakan ekosistem dan layanan pendukung untuk memastikan bisnis Anda memiliki semua yang dibutuhkan untuk berkembang.
                    </p>
                </motion.div>


                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {otherServices.map(({ title, description, icon, link }) => (
                        <motion.div
                            key={title}
                            className="h-full"
                            variants={cardVariants}
                        >
                            <Link href={link} passHref legacyBehavior>
                                <a className="group block relative h-full border rounded-xl border-[#FF9000] overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
                                    <div className="bg-gradient-to-r from-[#FF9000] to-[#FFB347] h-20"></div>
                                    <div className="pt-12 pb-8 px-6 text-center h-full flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                                        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
                                    </div>
                                    <div className="absolute top-[calc(5rem-2.5rem)] left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#FF9000] rounded-full p-4 shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <FontAwesomeIcon icon={icon} className="h-8 w-8 text-[#FF9000]" />
                                    </div>
                                </a>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}