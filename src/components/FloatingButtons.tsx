"use client";
import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import CTAButton from "./CTAButton";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="scrollup"
      className="fixed bottom-8 right-8sm:bottom-8 sm:right-8bottom-4 right-4 /* mobile */ flex flex-col items-end gap-3 z-50"
    >

      <div
        className={`transition-all duration-500 ease-in-out transform ${showScroll
          ? "translate-y-0 opacity-100" // move up when visible
          : "translate-y-10 opacity-0 pointer-events-none" // hide + block clicks
          }`}
      >
        <button
          id="scroll-top"
          onClick={scrollToTop}
          className="w-12 h-12 sm:w-12 sm:h-12 w-10 h-10 /* mobile */ rounded-full bg-[#FF9000] text-white flex items-center justify-center shadow-lg hover:bg-[#229659] transition-colors duration-300
  "
        >
          <FontAwesomeIcon icon={faAngleUp} className="text-white text-lg sm:text-xl" />
        </button>

      </div>

      <CTAButton />
    </div>
  );
}
