import { OrangeDivider } from "@/components/OrangeDivider";
import {
    faBoxesPacking,
    faPhone,
    faShoppingCart,
    faTablet,
    faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OtherProductsSection() {
    return (
        <section className="w-full bg-[#FAF4F0] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-[2rem] font-bold uppercase text-gray-800 mb-3 text-center leading-snug">
                    Bukan hanya itu! <br />
                    Lamonte hadirkan kemudahan belanja dari rumah <br /> dan custom produk sesuai keinginan Anda
                </h2>
                <div className="container mx-auto px-4 mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Grosir Baju Anak",
                                desc: "Dapatkan harga grosir terbaik untuk baju anak berkualitas. Mulai bisnis Anda dengan produk terlaris dan dukungan penuh dari Lamonte.",
                                icon: faShoppingCart,
                            },
                            {
                                title: "Paket Usaha",
                                desc: "Paket lengkap usaha baju anak yang siap membantu Anda meraih sukses. Mulai sekarang, wujudkan impian bisnis Anda dengan mudah.",
                                icon: faBoxesPacking,
                            },
                            {
                                title: "Maklon Baju Anak",
                                desc: "Wujudkan desain eksklusif Anda dengan layanan maklon premium Lamonte. Kualitas terbaik untuk produk yang memikat dan personal.",
                                icon: faTools,
                            },
                            {
                                title: "Virtual Shop",
                                desc: "Nikmati kemudahan belanja online seolah-olah Anda ada di toko. Virtual Shop Lamonte, sensasi belanja masa kini yang praktis dan menyenangkan.",
                                icon: faTablet,
                            },
                        ].map(({ title, desc, icon }) => (
                            <div
                                key={title}
                                className="relative border rounded-xl border-[#FF9000] overflow-hidden bg-white shadow-lg
                transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-105"
                                style={{ willChange: "transform" }}
                            >
                                <div className="bg-[#FF9000] min-h-20"></div>
                                <div className="py-10 px-6 h-full text-center">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                                </div>

                                {/* Icon container - overlapping the orange & white */}
                                <div className="absolute top-[calc(5rem-2.2rem)] left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#FF9000] rounded-full p-3 shadow-lg">
                                    <FontAwesomeIcon icon={icon} className="text-[#FF9000] text-4xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
