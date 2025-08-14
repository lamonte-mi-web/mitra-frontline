import CTAButton from "@/components/CTAButton";
import CustomButton from "@/components/CustomButton";
import { OrangeDivider } from "@/components/OrangeDivider";
import Image from "next/image";

export default function CTASection() {
    return (
        <section className="w-full bg-[#33A940] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
                    <div>

                        <h2 className="text-5xl font-bold text-white mb-6">
                            Saatnya Bergabung dan Raih Kesuksesan Bersama Lamonte
                        </h2>
                        <p className="text-white text-xl mb-3">
                            Tidak perlu menunggu momen sempurna. Mitra sukses kami memulainya dengan satu langkah kecil — dan kini mereka memetik hasil besar.
                        </p>
                        <p className="text-white text-lg mb-6">
                            Bergabunglah hari ini, dan jadilah bagian dari kesuksesan Lamonte.
                        </p>

                        <CTAButton styles="brown" />
                    </div>
                    <div className="relative w-full h-64 md:h-full mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/assets/img/supportimg-cta.png"
                            alt="Image for supporting the CTA"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={80}
                        />
                    </div>
                </div>
            </div>
        </section >

    );
}
