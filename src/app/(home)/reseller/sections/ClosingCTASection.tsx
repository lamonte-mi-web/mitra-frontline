"use client";

import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";

export default function ClosingCTASection() {
    return (
        <section className="bg-[#FF9000]/70 w-full text-white py-20 px-6">
            <motion.div
                className="max-w-4xl mx-auto text-center text-[#3B1F0B]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Siap Jadi Bagian dari Lamonte?
                </h2>
                <p className="text-lg md:text-xl mb-8">
                    Slot terbatas! Daftar sekarang & wujudkan mimpi Anda menjadi pengusaha sukses.
                </p>

                <CTAButton
                    source="closing_cta"
                    className="bg-white text-[#FF9000] hover:bg-[#FFE5B4] px-8 py-4 text-lg font-semibold rounded-full transition-all"
                    styles="brown"
                >
                    Gabung Sekarang
                </CTAButton>
            </motion.div>
        </section>
    );
}
