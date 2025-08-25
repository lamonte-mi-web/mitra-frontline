// app/page.tsx
import { Metadata } from "next";
import HeroSection from "./Sections/HeroSection";
import TestimonySection from "./Sections/TestimonySection";
import MediaCoverageSection from "./Sections/MediaCoverageSection";
import AboutUsSection from "./Sections/AboutUsSection";
import CoreValueSection from "./Sections/CoreValueSection";
import StatisticSection from "./Sections/StatisticSection";
import MiddleCTASection from "./Sections/MiddleCTASection";
import MagicKeywordsSection from "./Sections/MagicKeywordsSection";
import ResearchSection from "./Sections/ResearchSection";
import ClassificationSection from "./Sections/ClassificationSection";
import RankingSection from "./Sections/RankingSection";
import OtherProductsSection from "./Sections/OtherProductsSection";
import TransactionProofSection from "./Sections/TransactionProofSection";
import ReviewProofSection from "./Sections/ReviewProofSection";
import DeliverySection from "./Sections/DeliverySection";
import CTASection from "./Sections/CTASection";

export const metadata: Metadata = {
  title: "Lamonte - Your Partner Management System",
  description: "Discover Lamonte's solutions, products, and insights.",
};

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
