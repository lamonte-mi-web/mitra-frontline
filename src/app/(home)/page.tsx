import Image from "next/image";
import HeroSection from "./Sections/HeroSection";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col items-center sm:items-start">
        <HeroSection />
      </main>
    </div>
  );
}
