// app/(home)/page.tsx
import { Metadata } from "next";
import HomeHeroSection from "../../components/sections/home/HomeHeroSection";
import HomeTestimonySection from "../../components/sections/home/HomeTestimonySection";
import HomeMediaCoverageSection from "../../components/sections/home/HomeMediaCoverageSection";
import HomeAboutUsSection from "../../components/sections/home/HomeAboutUsSection";
import HomeCoreValueSection from "../../components/sections/home/HomeCoreValueSection";
import HomeStatisticSection from "../../components/sections/home/HomeStatisticSection";
import HomeMiddleCTASection from "../../components/sections/home/HomeMiddleCTASection";
import HomeMagicKeywordsSection from "../../components/sections/home/HomeMagicKeywordsSection";
import HomeResearchSection from "../../components/sections/home/HomeResearchSection";
import HomeClassificationSection from "../../components/sections/home/HomeClassificationSection";
import HomeRankingSection from "../../components/sections/home/HomeRankingSection";
import HomeOtherProductsSection from "../../components/sections/home/HomeOtherProductsSection";
import HomeTransactionProofSection from "../../components/sections/home/HomeTransactionProofSection";
import HomeReviewProofSection from "../../components/sections/home/HomeReviewProofSection";
import HomeDeliverySection from "../../components/sections/home/HomeDeliverySection";
import HomeCTASection from "../../components/sections/home/HomeCTASection";

export const metadata: Metadata = {
  title: "Mitra Lamonte - Kemitraan Bisnis Baju Anak No. 1 di Indonesia",
  description:
    "Lamonte hadir sebagai mitra terpercaya dalam bisnis baju anak & bayi sejak 2011. Bergabunglah bersama ribuan reseller, agen, dan dropshipper yang telah meraih keuntungan besar. Produk trendi, harga kompetitif, dan sistem kemitraan terpercaya untuk kesuksesan bisnis Anda.",
  keywords: [
    "bisnis baju anak",
    "reseller baju anak",
    "dropshipper baju anak",
    "agen baju anak",
    "supplier baju anak terpercaya",
    "kemitraan baju bayi",
    "peluang usaha baju anak",
    "Lamonte Indonesia",
    "jualan baju anak online",
    "kemitraan terpercaya",
  ],
  
};

// Page
export default function Home() {
  const sections = [
    HomeHeroSection,
    HomeTestimonySection,
    HomeMediaCoverageSection,
    HomeAboutUsSection,
    HomeCoreValueSection,
    HomeStatisticSection,
    HomeMiddleCTASection,
    HomeMagicKeywordsSection,
    HomeResearchSection,
    HomeClassificationSection,
    HomeRankingSection,
    HomeOtherProductsSection,
    HomeTransactionProofSection,
    HomeReviewProofSection,
    HomeDeliverySection,
    HomeCTASection,
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
