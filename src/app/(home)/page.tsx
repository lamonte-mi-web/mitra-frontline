// app/page.tsx
import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import TestimonySection from "./sections/TestimonySection";
import MediaCoverageSection from "./sections/MediaCoverageSection";
import AboutUsSection from "./sections/AboutUsSection";
import CoreValueSection from "./sections/CoreValueSection";
import StatisticSection from "./sections/StatisticSection";
import MiddleCTASection from "./sections/MiddleCTASection";
import MagicKeywordsSection from "./sections/MagicKeywordsSection";
import ResearchSection from "./sections/ResearchSection";
import ClassificationSection from "./sections/ClassificationSection";
import RankingSection from "./sections/RankingSection";
import OtherProductsSection from "./sections/OtherProductsSection";
import TransactionProofSection from "./sections/TransactionProofSection";
import ReviewProofSection from "./sections/ReviewProofSection";
import DeliverySection from "./sections/DeliverySection";
import CTASection from "./sections/CTASection";

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
    HeroSection,
    TestimonySection,
    MediaCoverageSection,
    AboutUsSection,
    CoreValueSection,
    StatisticSection,
    MiddleCTASection,
    MagicKeywordsSection,
    ResearchSection,
    ClassificationSection,
    RankingSection,
    OtherProductsSection,
    TransactionProofSection,
    ReviewProofSection,
    DeliverySection,
    CTASection,
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
