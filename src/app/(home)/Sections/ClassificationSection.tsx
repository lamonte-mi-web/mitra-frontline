import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const packages = [
    {
        title: "Reseller",
        points: [
            "Harga khusus untuk reseller, margin hingga 30%",
            "Produk ready stock, pilihan lengkap dan bervariasi",
            "Bonus tahunan dan hadiah menarik",
            "Materi promosi gratis untuk memudahkan penjualan",
            "Akses grup sharing & strategi penjualan",
        ],
    },
    {
        title: "Agen",
        points: [
            "Harga khusus agen, keuntungan hingga 40%",
            "Akses prioritas produk unggulan",
            "Bimbingan bisnis untuk mempercepat perkembangan",
            "Bonus tahunan dan reward tambahan",
            "Hubungan langsung dengan tim Lamonte",
        ],
    },
    {
        title: "Distributor",
        points: [
            "Hak eksklusif: 1 kota hanya 1 distributor",
            "Status resmi sebagai distributor Lamonte",
            "Reward point setiap pembelian",
            "Akses penuh ke e-katalog, foto & detail produk",
            "Bimbingan bisnis eksklusif dan personal",
        ],
    }
];

export default function ClassificationSection() {
    return (
        <section className="w-full bg-[#fcd92b] py-16">
            <div className="max-w-6xl mx-auto px-6 bg-white py-10 rounded-2xl shadow-xl">
                <h2 className="text-4xl font-bold text-center text-[#166534] mb-12">
                    Pilih Paket Kemitraan yang Tepat untuk Anda
                </h2>

                <div className="grid gap-8 lg:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100
                            transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300 hover:bg-yellow-50"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#166534] mb-4">
                                    {pkg.title}
                                </h3>
                                <ul className="space-y-3 text-[#166534] text-lg">
                                    {pkg.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                className="text-yellow-500 text-lg mr-2 
                                                group-hover:scale-110 group-hover:text-yellow-400 
                                                transition-transform duration-200 flex-shrink-0 mt-1"
                                            />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
