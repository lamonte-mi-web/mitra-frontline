"use client";

import { motion, Variants } from "framer-motion";

const TERMS = [
  "Warga Negara Indonesia (WNI) dengan KTP yang masih berlaku.",
  "Memiliki tempat penyimpanan stok dan penjualan produk.",
  "Membayar biaya pendaftaran sebesar Rp150.000 dan langsung mendapatkan paket mystery box senilai Rp150.000.",
  "Tidak ada minimal order untuk pembelian awal.",
  "Memiliki toko online atau offline. Jika belum punya, kami akan bantu membuatkannya.",
  "Memiliki nomor telepon khusus untuk bisnis dan akun media sosial atau marketplace (Instagram, Telegram, Facebook, dsb.).",
  "Bersedia aktif mengikuti grup dan melakukan penjualan setiap bulan.",
  "Bersikap profesional dan sabar dalam berbisnis.",
  "Pembelian produk harus berkelanjutan. Jika tidak ada pembelian ulang selama 6 bulan, status reseller akan diturunkan menjadi dropshipper.",
  "Biaya pengiriman menjadi tanggung jawab Anda sebagai mitra.",
  "Dengan mendaftar, Anda dianggap sudah memahami dan menyetujui seluruh ketentuan yang berlaku."
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } }
};

export default function TermsSection() {
  return (
    <section
      id="terms"
      className="max-w-6xl mx-auto p-6 my-16"
      aria-labelledby="terms-heading"
    >
      <motion.div className="text-center mb-10">
        <motion.h3
          id="terms-heading"
          className="text-3xl md:text-4xl font-bold text-[#FF9000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Syarat & Ketentuan Reseller
        </motion.h3>
        <motion.p
          className="text-[#166534] mt-3 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Pastikan Anda memenuhi syarat berikut agar bisa menjadi mitra resmi Lamonte.
        </motion.p>
      </motion.div>

      <motion.ul
        className="grid md:grid-cols-1 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {TERMS.map((term, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 p-4 rounded-lg bg-white shadow hover:shadow-lg cursor-pointer transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
          >
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-[#FF9000]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#166534] text-lg">{term}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
