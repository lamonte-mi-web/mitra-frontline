import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const packages = [
    {
        title: "Reseller",
        points: [
            "Diskon Khusus Reseller",
            "Margin Keuntungan 20-30%",
            "Beragam Produk Tersedia Lengkap",
            "Dapatkan Bonus Menarik Setiap Tahunnya",
            "Grup Sharing Session Kemitraan",
            "Gratis Materi Promosi",
        ],
    },
    {
        title: "Agen",
        points: [
            "Harga khusus Agen",
            "Keuntungan 20-40% dari Harga Jual",
            "Prioritas Produk Unggukan",
            "Mendapatkan Bimbingan Bisnis",
            "Bonus Tahunan dan Beragam Hadiah Menarik",
        ],
    },
    {
        title: "Distributor",
        points: [
            "Hak Eksklusif 1 Kota 1 Distributor",
            "Dicantumkan Sebagai Distributor Resmi",
            "Reward Point Setiap Pembelian",
            "Akses E-Katalog, Foto Produk, Detail Produk",
            "Dapat Bimbingan Bisnis Eksklusif",
        ],
    }
];

export default function ClassificationSection() {
    return (
        <section className="w-full bg-[#fcd92b] py-16">
            <div className="max-w-6xl mx-auto px-6 bg-white py-8 rounded-xl shadow-lg">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Pilih Paket Kemitraan Yang Sesuai Dengan Anda
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-yellow-300 transition-all duration-300 border border-gray-100"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {pkg.title}
                                </h3>
                                <ul className="space-y-3 text-gray-700 text-lg">
                                    {pkg.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                className="text-yellow-500 mr-2 mt-1 group-hover:scale-110 group-hover:text-yellow-400 transition-transform duration-200"
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
