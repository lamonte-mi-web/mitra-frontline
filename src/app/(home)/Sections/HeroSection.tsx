import CustomButton from "@/components/CustomButton";
import { OrangeDivider } from "@/components/OrangeDivider";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[700px]">
            <Image
                src="/assets/img/bg-cta.png"
                alt="Background CTA Section"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/30 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-[3rem] font-bold uppercase text-white mb-3 max-w-4xl">
                    Bergabunglah dengan 99% Mitra Kami yang Telah Mencapai Kesuksesan
                </h2>
                <OrangeDivider className="mb-3" />
                <p className="text-white text-[1.2rem] max-w-5xl mb-6">
                    Mulai perjalanan Anda bersama Lamonte—dengan dukungan penuh, produk laris, dan peluang bisnis nyata. Kini giliran Anda meraih hasil maksimal tanpa ribet.
                </p>
                <CustomButton href="https://wa.me/628111829921?text=Halo%20Kak%20Erni%2C%20saya%20tertarik%20menjadi%20Mitra%20Lamonte.%20Bisa%20dibantu%20penjelasannya%3F">
                    Hubungi Kami
                </CustomButton>
            </div>
        </section>
    );
}
