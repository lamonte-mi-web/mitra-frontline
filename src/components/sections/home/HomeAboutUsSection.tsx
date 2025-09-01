'use client'

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function HomeAboutUsSection() {
  // Variants for individual elements
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#fcd92b] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-[#5B3A29] mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Animasi hanya sekali saat masuk viewport
          variants={titleVariants}
        >
          Tentang Lamonte
        </motion.h2>

        {/* White Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animasi hanya sekali saat masuk viewport
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2 // Animasi anak-anak di dalam div ini
              }
            }
          }}
        >
          <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-center">
            {/* Text */}
            <motion.div
              className="space-y-4 text-gray-700 text-lg leading-relaxed"
              variants={textVariants} // Menggunakan variants yang sama untuk setiap paragraf
            >
              <p>
                Sejak 2011, PT Lamonte Mode Internasional telah menjadi pilihan
                utama bagi para pelaku bisnis fashion anak di Indonesia. Kami
                menyediakan koleksi terkini yang siap jual, dengan kualitas terjaga
                dan harga yang bersaing.
              </p>
              <p>
                Ratusan mitra aktif setiap bulan mempercayai Lamonte sebagai sumber
                produk mereka — karena kami mengerti apa yang dibutuhkan untuk
                memenangkan pasar: tren yang relevan, ketersediaan stok, dan dukungan
                penjualan yang nyata.
              </p>
              <p>
                Bergabunglah bersama kami, dan temukan cara mudah untuk mengembangkan
                bisnis fashion anak dengan produk yang selalu diminati pelanggan.
              </p>
            </motion.div>

            {/* Image Card */}
            <motion.div
              className="relative w-full max-w-sm lg:max-w-md mx-auto md:mx-0 aspect-[5/6] 
                         rounded-xl overflow-hidden shadow-md transform transition-transform 
                         duration-300 hover:scale-105 hover:shadow-xl"
              variants={imageVariants} // Menggunakan variants khusus untuk gambar
            >
              <Image
                src="/assets/img/Logo-PT-LMI.jpg"
                alt="PT Lamonte Logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

