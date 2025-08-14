'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DefaultHeader() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('primary-header');
      if (!header) return;

      if (window.scrollY < 50) {
        header.classList.add('bg-white/60', 'backdrop-blur-md');
        header.classList.remove('bg-white', 'shadow-md');
      } else {
        header.classList.remove('bg-white/60', 'backdrop-blur-md');
        header.classList.add('bg-white', 'shadow-md');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="primary-header"
      className="fixed top-0 left-0 w-full z-[1000] backdrop-blur-md bg-white/60 border-b border-white/20 transition-all duration-300"
    >
      <nav className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center space-x-4 min-w-[25%]">
          {/* Optional: Add menu items or icons here */}
        </div>

        {/* CENTER */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/assets/img/logo-lamonte.png"
              alt="Lamonte Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-end space-x-4 min-w-[25%]">
          {/* Optional: Add CTA buttons here */}
        </div>
      </nav>
    </header>
  );
}
