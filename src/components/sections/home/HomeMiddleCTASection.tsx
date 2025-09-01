// MiddleCTASection.tsx
"use client"
import CTAButton from "@/components/CTAButton";
import { motion, Variants } from "framer-motion";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomeMiddleCTASection() {
  return (
    <section className="w-full bg-[#FFF6E8] py-12">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold text-[#FF9000] mb-4"
          variants={itemVariants}
        >
          Siap Mengambil Langkah Pertama?
        </motion.h2>
        <motion.p
          className="text-lg text-[#166534] mb-6"
          variants={itemVariants}
        >
          Banyak Mitra kami memulai dari satu klik ini, dan kini mereka sudah menikmati hasilnya.
        </motion.p>
        <motion.div variants={itemVariants}>
          <CTAButton styles="default" />
        </motion.div>
      </motion.div>
    </section>
  );
}