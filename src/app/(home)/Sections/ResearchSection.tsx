import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const researchPoints = [
    {
        title: "Transformasi Belanja Online",
        description: "80% ibu di Indonesia kini memilih membeli baju anak secara online — peluang pasar yang luar biasa (Survei Nielsen)"
    },
    {
        title: "Pasar Yang Terus Bertumbuh",
        description: "Dengan 4,2 juta kelahiran setiap tahun, potensi pasar fashion anak di Indonesia terus tumbuh pesat (Data Kementerian Kesehatan 2023)"
    },
    {
        title: "Trend Pencarian Meningkat",
        description: 'Pencarian produk "baju anak" naik 20% sepanjang 2023 — tren yang terus memperkuat peluang bisnis Anda (Google Trends)'
    }
];

export default function ResearchSection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-4xl font-bold uppercase text-gray-800 mb-3 text-center">
                    Pertumbuhan Pesat Bisnis Fashion Anak
                </h2>
                <p className="text-center text-gray-600 font-semibold text-xl max-w-5xl mb-6">
                    Pasar fashion anak di Indonesia menunjukkan potensi luar biasa dengan pertumbuhan yang konsisten. Inilah fakta dan data yang menunjukkan mengapa saat ini adalah waktu yang tepat untuk terjun ke bisnis ini.
                </p>
            </div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-6 max-w-6xl mx-auto w-full">
                {/* Image */}
                <div className="relative w-full h-full mx-auto md:mx-0 aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/assets/img/support-research.png"
                        alt="Image to Sopport Research"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={80}
                    />
                </div>

                {/* Research Points */}
                <div className="flex flex-col justify-center gap-6">
                    {researchPoints.map(({ title, description }, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start gap-4">
                            <FontAwesomeIcon icon={faChevronRight} className="text-[#FF9000] text-xl mt-1" />
                            <div>
                                <h5 className="text-xl font-bold text-gray-800">{title}</h5>
                                <p className="text-gray-600 text-lg">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
