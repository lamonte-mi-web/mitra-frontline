import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const researchPoints = [
    {
        title: "Belanja Online Jadi Kebiasaan",
        description: "80% ibu di Indonesia kini membeli baju anak secara online — peluang pasar yang tak boleh dilewatkan (Survei Nielsen)."
    },
    {
        title: "Pasar Terus Melebar",
        description: "4,2 juta kelahiran setiap tahun menciptakan permintaan fashion anak yang terus meningkat (Data Kementerian Kesehatan 2023)."
    },
    {
        title: "Tren Pencarian Naik",
        description: 'Pencarian “baju anak” tumbuh 20% sepanjang 2023 — sinyal kuat untuk memulai bisnis sekarang (Google Trends).'
    }
];

export default function HomeResearchSection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-4xl font-bold capitalize text-[#FF9000] mb-3 text-center">
                    Fakta yang Menguatkan Peluang Bisnis Anda
                </h2>
                <p className="text-center text-[#166534] font-semibold text-xl max-w-5xl mb-6">
                    Data terbaru menunjukkan pasar fashion anak di Indonesia sedang berada di puncak pertumbuhan. 
                    Ini adalah waktu terbaik untuk mengambil posisi dan mulai menghasilkan.
                </p>
            </div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-6 max-w-6xl mx-auto w-full">
                {/* Image */}
                <div className="relative w-full h-full mx-auto md:mx-0 aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/assets/img/support-research.png"
                        alt="Ilustrasi Data Pasar Fashion Anak"
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
                                <h5 className="text-xl font-bold text-[#FF9000]">{title}</h5>
                                <p className="text-[#166534] text-lg">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
