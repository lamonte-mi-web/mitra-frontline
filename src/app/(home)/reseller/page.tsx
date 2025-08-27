// app/reseller/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reseller Baju Anak & Bayi | Daftar Mitra Lamonte Sekarang",
    description:
        "Jadilah reseller baju anak & bayi terpercaya dengan Lamonte. Nikmati harga grosir, produk tren, dukungan penuh, dan peluang bisnis menguntungkan di seluruh Indonesia.",
    keywords: [
        "reseller baju anak",
        "reseller baju bayi",
        "reseller pakaian anak",
        "reseller grosir baju anak murah",
        "mitra lamonte",
        "peluang bisnis baju anak",
        "reseller terpercaya Indonesia",
        "supplier baju anak",
        "usaha rumahan baju anak",
    ],
    alternates: {
        canonical: "https://mitra.lamonte.co.id/reseller",
    },
    robots: {
        index: true,
        follow: true,
    },
    category: "Business",
    creator: "Lamonte",
    publisher: "Lamonte",
};


export default function Reseller() {
    const sections = [
    ];

    return (
        <div className="font-sans">
            <main className="flex flex-col items-center sm:items-start w-full">
                {/* {sections.map((Section, idx) => (
                    <Section key={idx} />
                ))} */}
            </main>
        </div>
    );
}
