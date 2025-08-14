import { faHandshake, faHeart, faRocket, faScaleBalanced, faShield, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const coreValues = [
    {
        icon: faHandshake,
        title: "Syukur",
        description:
            "Kami berterima kasih atas setiap kesempatan untuk melayani dan berkembang bersama mitra. Sikap syukur ini menjadi fondasi dalam setiap langkah bisnis kami.",
    },
    {
        icon: faHeart,
        title: "Empati",
        description:
            "Memahami kebutuhan mitra dan pelanggan adalah prioritas kami. Kami mendengarkan dan merespons dengan solusi yang tepat sasaran.",
    },
    {
        icon: faTrophy,
        title: "Juara",
        description:
            "Kami berkomitmen untuk selalu memberikan yang terbaik, baik dalam produk maupun layanan, untuk memastikan kesuksesan bersama.",
    },
    {
        icon: faRocket,
        title: "Antusias",
        description:
            "Semangat dan energi positif menjadi penggerak kami dalam menciptakan inovasi dan memberikan pelayanan yang memuaskan.",
    },
    {
        icon: faShield,
        title: "Tangguh",
        description:
            "Kami menghadapi tantangan dengan ketangguhan dan tekad, memastikan stabilitas bisnis dalam berbagai kondisi pasar.",
    },
    {
        icon: faScaleBalanced,
        title: "Integritas",
        description:
            "Kejujuran dan transparansi adalah landasan dalam setiap interaksi kami dengan mitra dan pelanggan.",
    },
];

export default function CoreValueSection() {
    return (
        <section className="w-full bg-[#F59607] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Nilai & Dedikasi Kami: <span className="text-white">SEJATII!</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row text-center items-center md:text-left"
                        >
                            <FontAwesomeIcon icon={value.icon} className="text-4xl mr-4" />
                            <div>
                                <h5 className="text-2xl font-bold">{value.title}</h5>
                                <p className="text-lg">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
