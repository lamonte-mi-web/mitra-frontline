// MiddleCTASection.tsx
import CTAButton from "@/components/CTAButton";

export default function MiddleCTASection() {
  return (
    <section className="w-full bg-[#FFF6E8] py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#FF9000] mb-4">
          Siap Mengambil Langkah Pertama?
        </h2>
        <p className="text-lg text-[#166534] mb-6">
          Banyak Mitra kami memulai dari satu klik ini, dan kini mereka sudah menikmati hasilnya.
        </p>
        <CTAButton styles="default" />
      </div>
    </section>
  );
}
