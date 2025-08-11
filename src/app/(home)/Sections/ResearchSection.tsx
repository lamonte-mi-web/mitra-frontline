import { OrangeDivider } from "@/components/OrangeDivider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ResearchSection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-[2.5rem] font-bold uppercase text-gray-800 mb-3 text-center">
                    Pertumbuhan Pesat Bisnis Fashion Anak: Fakta yang Tak Bisa Diabaikan
                </h2>
                <OrangeDivider />
            </div>
            <div className="grid grid-cols-1 max-w-6xl md:grid-cols-3 gap-6 w-full">
                {/* Stat Item 1 */}
                <div className="p-6 bg-white border border-[#FF9000] shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <FontAwesomeIcon icon={['fas', 'chart-bar']} className="text-[#FF9000] text-4xl" />
                    <p className="mt-4 text-gray-700 font-semibold">
                        80% ibu di Indonesia kini memilih membeli baju anak secara online — peluang pasar yang luar biasa.
                        <br />
                        <span className="text-[#FF9000] font-medium">
                            (Survei Nielsen)
                        </span>
                    </p>
                </div>

                {/* Stat Item 2 */}
                <div className="p-6 bg-white border border-[#FF9000] shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <FontAwesomeIcon icon={['fas', 'users']} className="text-[#FF9000] text-4xl" />
                    <p className="mt-4 text-gray-700 font-semibold">
                        Dengan 4,2 juta kelahiran setiap tahun, potensi pasar fashion anak di Indonesia terus tumbuh pesat.
                        <br />
                        <span className="text-[#FF9000] font-medium">
                            (Data Kementerian Kesehatan 2023)
                        </span>
                    </p>
                </div>

                {/* Stat Item 3 */}
                <div className="p-6 bg-white border border-[#FF9000] shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <FontAwesomeIcon icon={['fas', 'chart-line']} className="text-[#FF9000] text-4xl" />
                    <p className="mt-4 text-gray-700 font-semibold">
                        Pencarian produk “baju anak” naik 20% sepanjang 2023 — tren yang terus memperkuat peluang bisnis Anda.
                        <br />
                        <span className="text-[#FF9000] font-medium">
                            (Google Trends)
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
