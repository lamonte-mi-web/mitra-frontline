"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faBoxesStacked, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DropshipperCommissionSection() {
    return (
        <section
            id="commission"
            className="w-full bg-transparent py-16 sm:py-24"
            aria-labelledby="commission-heading"
        >
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="commission-heading" className="text-3xl md:text-4xl font-bold text-[#FF9000]">
                        Potensi Penghasilan Anda
                    </h2>
                    <p className="mt-4 text-lg text-[#166534] max-w-3xl mx-auto">
                        Kami menawarkan sistem komisi yang transparan dan kompetitif. Semakin banyak Anda menjual, semakin besar potensi penghasilan Anda.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center" // Menggunakan items-center untuk align vertikal
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Card 1: Komisi Produk Eceran & Grosir */}
                    <motion.div
                        className="bg-slate-50 rounded-xl shadow-lg p-8 flex flex-col h-full cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FontAwesomeIcon icon={faTshirt} className="h-10 w-10 text-[#FF9000] mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Komisi Eceran & Grosir</h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                            Dapatkan komisi untuk setiap produk yang berhasil Anda jual, baik satuan maupun dalam jumlah grosir.
                        </p>
                        <div className="mt-auto">
                            <p className="text-4xl font-extrabold text-[#166534]">Rp 4.000<span className="text-lg font-semibold text-gray-500">/pcs</span></p>
                            <p className="text-sm text-gray-500">(untuk penjualan eceran)</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Komisi Order Custom (Hero Card) */}
                    <motion.div
                        className="bg-green-800 text-white rounded-xl shadow-2xl p-8 flex flex-col h-full lg:scale-105 z-10 cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.08, y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FontAwesomeIcon icon={faFileInvoiceDollar} className="h-10 w-10 text-[#fcd92b] mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Komisi Order Custom</h3>
                        <p className="text-green-200 mb-4 flex-grow">
                            Potensi penghasilan terbesar datang dari order custom (seragam, maklon, dll) dengan sistem komisi progresif.
                        </p>
                        <div className="mt-auto">
                            <p className="text-5xl font-extrabold text-white">8%</p>
                            <p className="text-lg text-green-200">+ Bonus Jutaan Rupiah</p>
                            <p className="text-sm text-green-300 mt-4">Contoh: Order Rp 51 jt, <br /> Komisi Anda bisa <span className="font-bold">Rp 5 Juta++</span></p>
                        </div>
                    </motion.div>

                    {/* Card 3: Komisi Paket Usaha */}
                    <motion.div
                        className="bg-slate-50 rounded-xl shadow-lg p-8 flex flex-col h-full cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FontAwesomeIcon icon={faBoxesStacked} className="h-10 w-10 text-[#FF9000] mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Komisi Paket Usaha</h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                            Raih komisi besar dengan menjual paket usaha siap jual kami kepada calon pebisnis lain.
                        </p>
                        <div className="mt-auto">
                            <p className="text-5xl font-extrabold text-[#166534]">2%</p>
                            <p className="text-lg text-gray-500">dari Nilai Paket</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

