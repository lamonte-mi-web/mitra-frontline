import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section className="w-full bg-[#fcd92b] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Tentang Lamonte</h2>

                <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-center">
                    {/* Text */}
                    <div className="space-y-4 text-gray-700 text-lg">
                        <p>
                            Sejak 2011, PT Lamonte Mode Internasional telah menjadi mitra terpercaya dalam industri fashion anak di Indonesia. Kami tidak hanya memproduksi pakaian berkualitas tinggi, tetapi juga membangun kemitraan yang saling menguntungkan dengan lebih dari 1.500 mitra setiap bulannya.
                        </p>
                        <p>
                            Dengan fasilitas produksi modern dan tenaga kerja terampil, kami memastikan setiap produk memenuhi standar kualitas tertinggi. Komitmen kami untuk mengikuti tren mode terkini, menawarkan harga terbaik, dan memberikan pelayanan prima menjadikan kami pilihan utama bagi para mitra yang ingin berkembang bersama kami.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-full max-w-xs mx-auto md:mx-0 aspect-[5/6] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/assets/img/Logo-PT-LMI.jpg"
                            alt="PT Lamonte Logo"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={80}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
