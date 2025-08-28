"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faUsers, faTshirt, faBullhorn, faTruck, faGift } from "@fortawesome/free-solid-svg-icons";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";

const BENEFITS = [
    { icon: faShieldAlt, title: "Brand Terpercaya Sejak 2011", desc: "Rekam jejak panjang yang memberi kepercayaan pelanggan dan mitra." },
    { icon: faUsers, title: "Ribuan Mitra di Seluruh Indonesia", desc: "Jaringan mitra aktif yang membuktikan sistem kemitraan kami efektif." },
    { icon: faTshirt, title: "Produk Fast-moving & Update Tren", desc: "Koleksi selektif yang cepat laris dan rutin diganti sesuai tren." },
    { icon: faBullhorn, title: "Dukungan Marketing & Training", desc: "Materi promosi, caption, hingga pelatihan singkat supaya Anda mudah jualan." },
    { icon: faTruck, title: "Pengiriman Nasional & Terpercaya", desc: "Logistik terintegrasi — jangkauan luas, proses packing rapi." },
    { icon: faGift, title: "Sample & Paket Starter", desc: "Free sample dan paket awal agar Anda langsung bisa mulai jualan." },
];

export default function WhyLamonteSection() {
    return (
        <section id="why-lamonte" className="mx-auto w-full p-6 my-10 bg-[#fcd92b]" aria-labelledby="why-lamonte-heading">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div className="text-center mb-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h2 id="why-lamonte-heading" className="text-2xl md:text-4xl font-bold text-[#166534]">
                        Kenapa Harus Lamonte
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Kami bantu reseller mulai dari nol sampai bisa scaling. Produk laris, dukungan nyata, dan komunitas yang solid.
                    </p>
                    <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: "#166534" }} aria-hidden />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS.map((b, i) => (
                        <motion.article
                            key={i}
                            className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm hover:shadow-lg cursor-pointer"
                            aria-labelledby={`benefit-${i}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: "#FCD92B" }} aria-hidden>
                                <FontAwesomeIcon icon={b.icon} className="text-[#FF9000] w-5 h-5" />
                            </div>

                            <div>
                                <h3 id={`benefit-${i}`} className="text-lg font-semibold text-gray-800">
                                    {b.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="bg-[#FFF7ED] rounded-xl p-6">
                        <h4 className="text-xl font-bold text-[#166534] mb-3">Visi</h4>
                        <p className="text-gray-700">
                            Menjadi mitra utama untuk usaha fashion anak & bayi di Indonesia — mendorong ekonomi mikro melalui produk berkualitas dan dukungan nyata.
                        </p>
                    </div>

                    <div className="bg-[#FFF7ED] rounded-xl p-6">
                        <h4 className="text-xl font-bold text-[#166534] mb-3">Misi</h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Menyediakan produk trendi dengan harga kompetitif.</li>
                            <li>Membangun komunitas reseller yang saling mendukung.</li>
                            <li>Menyediakan materi marketing & pelatihan untuk meningkatkan penjualan.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
