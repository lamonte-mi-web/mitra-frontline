import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import DefaultHeader from "@/components/DefaultHeader";
import DefaultFooter from "@/components/DefaultFooter";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Preloader from "@/components/Preloader";

import { GoogleTagManager } from '@next/third-parties/google';


import '@/lib/fontAwesome'; // adjust path accordingly
import { FixExtensionArtifacts } from "@/lib/FixExtensionArtifacts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kemitraan Bisnis Baju Anak No. 1 Di Indonesia - Mitra Lamonte",
  description: "Kemitraan baju anak no. 1 di Indonesia. Bergabunglah sekarang dan dapatkan keuntungan maksimal dengan peluang bisnis yang menguntungkan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <FixExtensionArtifacts />

      <body>
        <GoogleTagManager gtmId="GTM-TPCF34N6" />
        <DefaultHeader />
        <ScrollProgressBar />
        <Preloader />
        {children}
        <DefaultFooter />
      </body>

    </html>
  );
}
