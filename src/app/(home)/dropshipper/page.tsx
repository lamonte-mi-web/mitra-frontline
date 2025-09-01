// app/(home)/dropshipper/page.tsx
import { Metadata } from "next";
import DropshipperHeroSection from "../../../components/sections/dropshipper/DropshipperHeroSection";
import DropshipperPainPointsSection from "@/components/sections/dropshipper/DropshipperPainPointsSection";
import DropshipperSolutionSection from "@/components/sections/dropshipper/DropshipperSolutonSection";
import DropshipperWhyLamonteSection from "@/components/sections/dropshipper/DropshipperWhyLamonteSection";
import DropshipperMarketOpportunitySection from "@/components/sections/dropshipper/DropshipperMarketOppurtinitySection";
import DropshipperProductShowcaseSection from "@/components/sections/dropshipper/DropshipperProductShowcaseSection";
import DropshipperCommissionSection from "@/components/sections/dropshipper/DropshipperComissionSection";
import DropshipperHowToJoinSection from "@/components/sections/dropshipper/DropshipperHowToJoinSection";
import DropshipperAboutUsSection from "@/components/sections/dropshipper/DropshipperAboutUsSection";
import DropshipperClosingCTASection from "@/components/sections/dropshipper/DropshipperClosingCTASection";
import DropshipperUpsellSection from "@/components/sections/dropshipper/DropshipperUpsellSection";

export const metadata: Metadata = {
    title: "Dropshipper Baju Anak & Bayi | Gabung Lamonte Tanpa Modal",
    description:
        "Jadilah dropshipper baju anak & bayi Lamonte. Mulai bisnis fashion anak tanpa modal, tanpa stok, didukung penuh. Daftar sekarang dan raih keuntungan!",
    keywords: [
        "dropship baju anak",
        "dropshipper baju bayi",
        "bisnis dropship tanpa modal",
        "supplier dropship baju anak",
        "peluang usaha dropship",
        "mitra lamonte",
        "jualan online baju anak",
        "grosir baju anak dropship",
        "dropship terpercaya",
        "usaha rumahan tanpa stok",
    ],
    alternates: {
        canonical: "https://mitra.lamonte.co.id/dropshipper",
    },
    robots: {
        index: true,
        follow: true,
    },
    category: "Business",
    creator: "Lamonte",
    publisher: "Lamonte",
};


export default function DropshipperPage() {
    const sections = [
        DropshipperHeroSection,
        DropshipperPainPointsSection,
        DropshipperSolutionSection,
        DropshipperWhyLamonteSection,
        DropshipperMarketOpportunitySection,
        DropshipperProductShowcaseSection,
        DropshipperCommissionSection,
        DropshipperHowToJoinSection,
        DropshipperAboutUsSection,
        DropshipperUpsellSection,
        DropshipperClosingCTASection,
        // Anda bisa menambahkan section lain untuk halaman dropshipper di sini
    ];

    return (
        <div className="font-sans">
            <main className="flex flex-col items-center sm:items-start w-full">
                {sections.map((Section, idx) => (
                    <Section key={idx} />
                ))}
            </main>
        </div>
    );
}
