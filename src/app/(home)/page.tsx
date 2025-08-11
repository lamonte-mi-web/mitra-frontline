import Image from "next/image";
import HeroSection from "./Sections/HeroSection";
import { Metadata } from "next";
import TestimonySection from "./Sections/TestimonySection";
import StatisticSection from "./Sections/StatisticSection";
import MagicKeywordsSection from "./Sections/MagicKeywordsSection";
import ResearchSection from "./Sections/ResearchSection";
import ClassificationSection from "./Sections/ClassificationSection";

export const metadata: Metadata = {

};

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col items-center sm:items-start">
        <HeroSection />
        <TestimonySection />
        <StatisticSection />
        <MagicKeywordsSection />
        <ResearchSection />
        <ClassificationSection />
      </main>
    </div>
  );
}
