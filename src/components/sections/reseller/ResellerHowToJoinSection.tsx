"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMoneyBillWave, faUpload } from "@fortawesome/free-solid-svg-icons";
import CTAButton from "@/components/CTAButton";

const STEPS = [
    {
        title: "Isi Formulir Pendaftaran",
        description: "Isi data diri dan profil Anda melalui form resmi Lamonte.",
        icon: faPen,
        color: "bg-[#FF9000]"
    },
    {
        title: "Lakukan Pembayaran",
        description: "Bayar Rp150.000/tahun untuk akses reseller + Mystery Box.",
        icon: faMoneyBillWave,
        color: "bg-[#00B37E]"
    },
    {
        title: "Kirim Bukti Pembayaran",
        description: "Validasi dalam ≤ 1x24 jam, pastikan transfer ke rekening resmi.",
        icon: faUpload,
        color: "bg-[#FF5722]"
    }
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }
};

export default function ResellerHowToJoinSection() {
    return (
        <section
            id="how-to-join"
            className="max-w-6xl mx-auto p-6 my-16"
            aria-labelledby="howto-heading"
        >
            <motion.div className="text-center mb-12">
                <motion.h3
                    id="howto-heading"
                    className="text-3xl md:text-4xl font-bold text-[#FF9000]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                    viewport={{ once: true }}
                >
                    Cara Daftar Reseller Lamonte
                </motion.h3>
                <motion.p
                    className="text-[#166534] mt-3 text-lg max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
                    viewport={{ once: true }}
                >
                    Ikuti langkah mudah ini dan mulai bisnis fashion anak dari rumah hari ini.
                </motion.p>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row md:justify-between items-start gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {STEPS.map((step, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center md:items-start bg-white rounded-2xl p-6 shadow hover:shadow-xl cursor-pointer transition-shadow"
                        variants={stepVariants}
                        whileHover={{ scale: 1.03, y: -3 }}
                    >
                        <div className={`w-12 h-12 flex items-center justify-center text-xl font-bold text-white rounded-full ${step.color} mb-4`}>
                            <FontAwesomeIcon icon={step.icon} />
                        </div>
                        <h4 className="text-xl font-semibold text-[#FF9000] mb-2">{step.title}</h4>
                        <p className="text-[#166534] mb-3">{step.description}</p>



                    </motion.div>
                ))}
            </motion.div>
            <div className="flex justify-center mt-6">
                <CTAButton className="text-center" source="howto_cta">
                    
                </CTAButton>
            </div>
        </section>
    );
}
