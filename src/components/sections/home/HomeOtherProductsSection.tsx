import { faBoxesPacking, faShoppingCart, faTablet, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeOtherProductsSection() {
    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl capitalize font-bold text-[#FF9000] mb-6 text-center leading-tight">
                    Lebih dari sekadar produk
                    <span className="block text-2xl capitalize font-normal text-[#166534] leading-relaxed">
                        Lamonte memberi Anda kemudahan, pilihan,
                    </span>
                    <span className="block text-2xl capitalize font-normal text-[#166534] leading-relaxed">
                        dan solusi bisnis yang siap pakai
                    </span>
                </h2>


                <div className="container mx-auto px-4 mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Grosir Baju Anak",
                                desc: "Beli lebih banyak, untung lebih besar. Koleksi baju anak terkurasi dengan harga grosir spesial — siap kirim dan siap jual.",
                                icon: faShoppingCart,
                            },
                            {
                                title: "Paket Usaha",
                                desc: "Mulai bisnis tanpa ribet. Dapatkan paket usaha baju anak lengkap dengan produk, panduan, dan dukungan penuh dari tim Lamonte.",
                                icon: faBoxesPacking,
                            },
                            {
                                title: "Maklon Baju Anak",
                                desc: "Punya brand sendiri? Wujudkan desain impian Anda dengan layanan maklon eksklusif kami — hasil premium yang memikat pelanggan.",
                                icon: faTools,
                            },
                            {
                                title: "Virtual Shop",
                                desc: "Belanja online dengan pengalaman seolah di toko fisik. Lihat, pilih, dan pesan — semua dari genggaman Anda.",
                                icon: faTablet,
                            },
                        ].map(({ title, desc, icon }) => (
                            <div
                                key={title}
                                className="group relative border rounded-xl border-[#FF9000] overflow-hidden bg-white shadow-lg
                                    transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-105"
                            >
                                {/* Header strip */}
                                <div className="bg-gradient-to-r from-[#FF9000] to-[#FFB347] min-h-20"></div>

                                {/* Content */}
                                <div className="py-10 px-6 h-full text-center">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                                </div>

                                {/* Icon container */}
                                <div className="absolute top-[calc(5rem-2.2rem)] left-1/2 transform -translate-x-1/2 
                                    bg-white border-4 border-[#FF9000] rounded-full p-3 shadow-lg 
                                    transition duration-300 group-hover:scale-110 group-hover:rotate-6">
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
