import CTAButton from "@/components/CTAButton";
import CustomButton from "@/components/CustomButton";
import { OrangeDivider } from "@/components/OrangeDivider";
import Image from "next/image";

export default function CTASection() {
    return (
        <section className="relative w-full h-[700px] bg-gray-400">
            <Image
                src="/assets/img/bg-cta.png"
                alt="Background CTA Section"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/70 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-[3rem] font-bold uppercase text-white mb-3 max-w-4xl">
                    Jadi Bagian dari 99% Mitra Kami yang Sukses Meroket Bersama Lamonte
                </h2>
                <OrangeDivider className="mb-3" />
                <p className="text-white text-[1.2rem] max-w-5xl mb-6">
                    Jangan biarkan kesempatan emas ini berlalu begitu saja. Bergabunglah dengan Lamonte sekarang, nikmati dukungan penuh, produk laris, dan peluang bisnis nyata yang siap mengubah hidup Anda. <strong>Tunggu apa lagi? Kesuksesan Anda dimulai hari ini!</strong>
                </p>

                <CTAButton />

            </div>
        </section>

    );
}
