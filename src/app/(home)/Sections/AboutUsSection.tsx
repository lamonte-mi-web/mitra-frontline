'use client'

import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#fcd92b] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#5B3A29] mb-8">
          Tentang Lamonte
        </h2>

        <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-center">
          {/* Text */}
          <div className="space-y-4 text-[#3B1F0B] text-lg leading-relaxed">
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
          </div>

          {/* Image Card */}
          <div
            className="relative w-full max-w-sm lg:max-w-md mx-auto md:mx-0 aspect-[5/6] 
                       rounded-xl overflow-hidden shadow-lg transform transition-transform 
                       duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src="/assets/img/Logo-PT-LMI.jpg"
              alt="PT Lamonte Logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
