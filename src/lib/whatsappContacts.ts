/**
 * =================================================================
 * WhatsApp Contact Library
 * =================================================================
 * Kumpulan link WhatsApp terpusat untuk berbagai keperluan CTA.
 * Cukup impor 'WHATSAPP_LINKS' dan gunakan key yang sesuai.
 *
 * Contoh Penggunaan di komponen CTAButton:
 * <CTAButton href={WHATSAPP_LINKS.GENERAL_INQUIRY.href}>
 * Tanya Kami
 * </CTAButton>
 * =================================================================
 */

// Tipe untuk memastikan setiap entri memiliki properti href
export type WhatsAppLink = {
    href: string;
};

// Objek utama yang berisi semua link WhatsApp
export const WHATSAPP_LINKS: Record<string, WhatsAppLink> = {
    // === KATEGORI UMUM & B2C ===
    /** (Caroline) Untuk pertanyaan umum dari website, IG, dll. */
    GENERAL_INQUIRY: {
        href: "https://wa.me/628111209921?text=Halo%20Lamonte%2C%20saya%20ingin%20bertanya%20tentang%20produk%20Anda.",
    },
    /** (Nova) Untuk customer yang ingin membeli produk eceran. */
    B2C_ORDER: {
        href: "https://wa.me/6281290279222?text=Halo%2C%20saya%20mau%20pesan%20baju%20anak%20eceran.",
    },

    // === KATEGORI KEMITRAAN (B2B) ===
    /** (Mona) Pertanyaan umum seputar kemitraan (Reseller, Agen, Distributor). */
    PARTNERSHIP_INQUIRY: {
        href: "https://wa.me/628111189921?text=Halo%2C%20saya%20tertarik%20untuk%20bergabung%20menjadi%20mitra%20Lamonte.%20Bisa%20minta%20info%20lebih%20lanjut%3F",
    },
    /** (Mona) Pertanyaan spesifik untuk program Sales Regional. */
    SALES_REGIONAL_INQUIRY: {
        href: "https://wa.me/628111189921?text=Halo%2C%20saya%20tertarik%20dengan%20program%20Sales%20Regional%20Lamonte.",
    },
    /** (Putri) Pertanyaan spesifik untuk produk custom/seragam. */
    CUSTOM_PRODUCT_INQUIRY: {
        href: "https://wa.me/6282111135519?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20produksi%20custom%2Fseragam%20di%20Lamonte.",
    },
    /** (Affiliate) Pendaftaran program Affiliate. */
    AFFILIATE_INQUIRY: {
        href: "https://wa.me/6281296928882?text=Halo%2C%20saya%20ingin%20mendaftar%20program%20Affiliate%20Lamonte.",
    },

    // === KATEGORI LAYANAN & PROGRAM LAIN ===
    /** (Tania) Pertanyaan seputar Lamonte Academy. */
    ACADEMY_INQUIRY: {
        href: "https://wa.me/628170099222?text=Halo%2C%20saya%20tertarik%20dengan%20program%20Lamonte%20Academy%20Bootcamp.",
    },
    /** (Lamonte Partner Center) Pertanyaan seputar coaching/mentorship. */
    COACHING_INQUIRY: {
        href: "https://wa.me/62811819921?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20program%20coaching%2Fmentorship%20untuk%20mitra.",
    },

    // === KATEGORI DUKUNGAN & AFTER SALES ===
    /** (Mika) Untuk menanyakan status pesanan/resi. */
    ORDER_STATUS_INQUIRY: {
        href: "https://wa.me/628111099192?text=Halo%2C%20saya%20ingin%20menanyakan%20status%20pesanan%20saya%20dengan%20ID%3A%20%5BTulis%20ID%20Pesanan%5D",
    },
    /** (Mila) Untuk mengajukan komplain atau konfirmasi resi. */
    COMPLAINT_INQUIRY: {
        href: "https://wa.me/628111089921?text=Halo%2C%20saya%20ingin%20menyampaikan%20keluhan%2Fkonfirmasi%20resi%20terkait%20pesanan%20saya%20dengan%20ID%3A%20%5BTulis%20ID%20Pesanan%5D",
    },
};

// Ekspor tipe untuk digunakan di komponen lain, misalnya di props CTAButton
export type WhatsAppContactKey = keyof typeof WHATSAPP_LINKS;