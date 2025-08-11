import { OrangeDivider } from "@/components/OrangeDivider";
import Image from "next/image";

export default function ClassificationSection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-[2.5rem] font-bold uppercase text-gray-800 mb-3 text-center">
                    Yuk Bergabung dengan Kemitraan Lamonte
                </h2>
                <OrangeDivider />
            </div>
            <div className="grid grid-cols-1 max-w-6xl md:grid-cols-3 gap-6 w-full">
                {/* Reseller */}
                <div className="p-6 bg-white border border-[#FF9000] shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div className="relative w-full h-48">
                        <Image src={'/assets/img/classification/reseller-poster.jpeg'} alt="Poster Reseller Lamonte" fill objectFit="cover" />
                    </div>
                    <h3 className="mt-2 font-bold text-2xl text-[#FF9000]">Reseller</h3>
                    <p className="text-gray-700 font-semibold">
                        Mulai bisnis tanpa ribet stok atau produksi. Jual produk Lamonte yang lagi hits dan dapatkan untung maksimal dengan mudah.
                    </p>
                </div>

                {/* Mitra Agen */}
                <div className="p-6 bg-white border border-[#FF9000] shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div className="relative w-full h-48">
                        <Image src={'/assets/img/classification/mitra-agen-poster.jpeg'} alt="Poster Mitra Agen Lamonte" fill objectFit="cover" />
                    </div>
                    <h3 className="mt-2 font-bold text-2xl text-[#FF9000]">Mitra Agen</h3>
                    <p className="text-gray-700 font-semibold">
                        Langkah cerdas jadi bos dengan modal kecil. Raih peluang profit besar sambil mengembangkan jaringan tanpa batas.
                    </p>
                </div>

                {/* Distributor */}
                <div className="p-6 bg-white border border-[#FF9000] shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div className="relative w-full h-48">
                        <Image src={'/assets/img/classification/distributor-poster.jpeg'} alt="Poster Distributor Lamonte" fill objectFit="cover" />
                    </div>
                    <h3 className="my-2 font-bold text-2xl text-[#FF9000]">Distributor</h3>
                    <p className="text-gray-700 font-semibold">
                        Gabung jaringan distribusi Lamonte, kembangkan bisnis tanpa risiko besar, dan nikmati keuntungan berlipat dari pasar fashion anak yang terus tumbuh.
                    </p>
                </div>
            </div>
        </section>
    )
}
