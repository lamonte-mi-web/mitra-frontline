import Image from "next/image";
import HeroSection from "./Sections/HeroSection";
import { Metadata } from "next";
import TestimonySection from "./Sections/TestimonySection";
import StatisticSection from "./Sections/StatisticSection";
import MagicKeywordsSection from "./Sections/MagicKeywordsSection";
import ResearchSection from "./Sections/ResearchSection";
import ClassificationSection from "./Sections/ClassificationSection";
import RankingSection from "./Sections/RankingSection";
import OtherProductsSection from "./Sections/OtherProductsSection";
import MediaCoverageSection from "./Sections/MediaCoverageSection";
import CTASection from "./Sections/CTASection";
import TransactionProofSection from "./Sections/TransactionProofSection";
import ReviewProofSection from "./Sections/ReviewProofSection";
import DeliverySection from "./Sections/DeliverySection";

export const metadata: Metadata = {

};

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col items-center sm:items-start">
        <HeroSection />
        <TestimonySection />
        <StatisticSection />
        <MediaCoverageSection />
        <MagicKeywordsSection />
        <ResearchSection />
        <ClassificationSection />
        <RankingSection />
        <OtherProductsSection />
        <TransactionProofSection />
        <ReviewProofSection />
        <DeliverySection />
        <CTASection />
      </main>
    </div>
  );
}
