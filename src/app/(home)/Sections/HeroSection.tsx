import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[500px] bg-gray-400">
            <Image
                src="/assets/img/bg-cta.png"
                alt="Background CTA Section"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-amber-500/80 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-4xl font-bold uppercase text-white mb-3 max-w-5xl leading-tight">
                    99% Mitra Sukses Bersama Lamonte
                </h2>
                <p className="text-white font-semibold text-xl max-w-5xl mb-6">
                    Saatnya Anda bergabung dan meraih omzet impian di bisnis fashion anak,
                    dengan sistem yang sudah terbukti membawa ratusan mitra naik level.
                </p>
                <CTAButton styles="brown" />
            </div>
        </section>
    );
}
