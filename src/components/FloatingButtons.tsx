"use client";
import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { whatsappContacts } from "@/lib/whatsappContacts";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const pathname = usePathname();

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

  const hideCTA = pathname === "/form"; // hide on /form

  return (
    <div
      id="scrollup"
      className={`
        fixed bottom-4 z-50
        sm:right-4 sm:flex sm:flex-col sm:items-end sm:gap-3
        max-sm:left-0 max-sm:right-0 max-sm:flex max-sm:flex-row-reverse max-sm:justify-between max-sm:px-4
      `}
    >
      <div
        className={`transition-all duration-500 ease-in-out transform ${showScroll ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
          }`}
      >
        <button
          id="scroll-top"
          onClick={scrollToTop}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9000] text-white flex items-center justify-center shadow-lg hover:bg-[#229659] transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faAngleUp} className="text-white text-lg sm:text-xl" />
        </button>
      </div>

      {!hideCTA && (
        <>
          <div className="max-sm:self-start">
            <CTAButton />
          </div>
          <div className="max-sm:self-start">
            <CTAButton styles="whatsapp" href={`https://wa.me/${whatsappContacts.kakMona.phoneNumber}?text=${encodeURIComponent(whatsappContacts.kakMona.message)}`}><FontAwesomeIcon icon={faWhatsapp} /> Tanya Sekarang</CTAButton>
          </div>
        </>
      )}
    </div>
  );
}
