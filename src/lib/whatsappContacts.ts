export const CONTACTS = {
    kakMona: {
        phoneNumber: '628111189921',
        message: 'Halo Kak Mona, saya sudah lihat penawarannya dan ingin langsung daftar. Bisa dibantu sekarang?',
    },
    // Add other contacts here if needed in the future
};

export const WHATSAPP_LINKS = {
    PARTNERSHIP_INQUIRY: {
        href: `https://wa.me/${CONTACTS.kakMona.phoneNumber}?text=${encodeURIComponent(CONTACTS.kakMona.message)}`,
    },
    // Add other WhatsApp links here if needed in the future
};
