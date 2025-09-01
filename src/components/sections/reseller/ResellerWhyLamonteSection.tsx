"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faUsers, faTshirt, faBullhorn, faTruck, faGift } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { WHATSAPP_LINKS } from "@/lib/whatsappContacts";


// Copywriting dipertajam dengan prinsip NLP
const BENEFITS = [
    {
        icon: faShieldAlt,
        title: "Bangun Kepercayaan Pelanggan",
        desc: "Anda menjual produk dari brand yang telah dipercaya sejak 2011, membuat pelanggan lebih yakin untuk membeli dari Anda."
    },
    {
        icon: faUsers,
        title: "Bergabung dengan Komunitas Juara",
        desc: "Anda menjadi bagian dari ribuan mitra sukses yang membuktikan bahwa sistem kemitraan kami benar-benar bekerja."
    },
    {
        icon: faTshirt,
        title: "Jual Produk yang Pasti Laku",
        desc: "Fokuskan energi Anda untuk menjual koleksi yang terbukti fast-moving dan selalu mengikuti tren fashion anak terkini."
    },
    {
        icon: faBullhorn,
        title: "Dapatkan 'Amunisi' Jualan Lengkap",
        desc: "Kami siapkan semuanya untuk Anda: materi promosi, foto produk profesional, hingga bimbingan agar jualan makin mudah."
    },
    {
        icon: faGift,
        title: "Langsung Siap Berjualan",
        desc: "Dengan modal Rp150rb, Anda langsung mendapatkan paket produk sampel senilai sama. Tak ada jeda, bisnis Anda langsung dimulai."
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ResellerWhyLamonteSection() {
    return (
        <section id="why-lamonte" className="w-full bg-[#F59607] py-16 sm:py-24" aria-labelledby="why-lamonte-heading">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text & Benefits */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.h2 id="why-lamonte-heading" className="text-3xl md:text-4xl font-bold text-amber-100 mb-4" variants={itemVariants}>
                            Bukan Sekadar Supplier, Kami Partner Pertumbuhan Bisnis Anda.
                        </motion.h2>

                        <motion.p className="mt-3 text-lg text-white max-w-2xl mb-8" variants={itemVariants}>
                            Kami serius membantu reseller mulai dari nol hingga bisa berkembang. Inilah pondasi kesuksesan yang akan Anda dapatkan bersama kami.
                        </motion.p>

                        <div className="space-y-6">
                            {BENEFITS.map((b) => (
                                <motion.div key={b.title} className="flex gap-4 items-start" variants={itemVariants}>
                                    <div className="flex-shrink-0 bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
                                        <FontAwesomeIcon icon={b.icon} className="text-[#166534] w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{b.title}</h3>
                                        <p className="text-amber-50 mt-1">{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div className="mt-10" variants={itemVariants}>
                            <CTAButton href={WHATSAPP_LINKS.PARTNERSHIP_INQUIRY.href} styles="reverse">
                                Saya Tertarik, Tanya Lebih Lanjut
                            </CTAButton>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image
                            src="/assets/img/reseller-why-lamonte.png"
                            alt="Reseller Lamonte yang sukses dan percaya diri menampilkan produk baju anak"
                            fill
                            className="object-cover rounded-2xl shadow-2xl"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
