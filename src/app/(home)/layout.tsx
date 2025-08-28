import DefaultHeader from "@/components/DefaultHeader";
import DefaultFooter from "@/components/DefaultFooter";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingButtons from "@/components/FloatingButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Metadata } from "next";
// import MouseTether from "@/components/MouseTether";

export const metadata: Metadata = {
    title: {
        default: "Mitra Lamonte - Kemitraan Bisnis Baju Anak No. 1 di Indonesia",
        template: "%s | Mitra Lamonte", // every page can prepend title
    },
    description:
        "Lamonte adalah mitra terpercaya dalam bisnis baju anak & bayi sejak 2011. Bergabunglah bersama ribuan reseller, agen, dan dropshipper di seluruh Indonesia.",
    openGraph: {
        title: "Mitra Lamonte - Kemitraan Bisnis Baju Anak No. 1 di Indonesia",
        description:
            "Bergabunglah dengan ribuan reseller, agen, dan dropshipper Lamonte. Produk trendi, harga kompetitif, dan sistem kemitraan terpercaya.",
        url: "https://mitra.lamonte.co.id",
        siteName: "Mitra Lamonte",
        images: [
            {
                url: "/assets/img/logo-lamonte.png", // ✅ global default OG image
                width: 1200,
                height: 630,
                alt: "Mitra Lamonte - Kemitraan Bisnis Baju Anak",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mitra Lamonte - Kemitraan Bisnis Baju Anak No. 1 di Indonesia",
        description:
            "Peluang bisnis baju anak yang menguntungkan. Bergabung bersama ribuan reseller Lamonte sekarang!",
        images: ["/assets/img/logo-lamonte.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    authors: [{ name: "Cyrochrome", url: "https://mitra.lamonte.co.id" }],
    category: "Business",
    creator: "Lamonte",
    publisher: "Lamonte",
    alternates: {
        canonical: "https://mitra.lamonte.co.id",
        // languages: {
        //   "id-ID": "https://mitra.lamonte.co.id",
        //   "en-US": "https://mitra.lamonte.co.id/en",
        // },
    },
};


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const footerData = {
        logo: { src: '/assets/img/logo-lamonte.png', alt: 'Lamonte Logo', width: 150, height: 60 },
        contact: {
            email: 'business@lamonte.id',
            phone: '+628111209921',
            address: 'Jalan Hayam Wuruk no. 111 ZC, Jakarta Barat, DKI Jakarta',
        },
        socials: [
            { name: 'Instagram', href: 'https://instagram.com/lamonte.id', icon: <FontAwesomeIcon icon={faInstagram} />, hoverClass: 'hover:text-pink-500' },
            { name: 'WhatsApp', href: 'https://wa.me/628111209921', icon: <FontAwesomeIcon icon={faWhatsapp} />, hoverClass: 'hover:text-green-400' },
            { name: 'TikTok', href: 'https://tiktok.com/@lamonteid', icon: <FontAwesomeIcon icon={faTiktok} />, hoverClass: 'hover:text-white' },
            { name: 'YouTube', href: 'https://youtube.com/@lamonteID', icon: <FontAwesomeIcon icon={faYoutube} />, hoverClass: 'hover:text-red-600' },
        ],
        companyName: 'Lamonte Mode Internasional',
    };

    return (
        <>
            {/* <MouseTether /> */}
            <DefaultHeader />
            <ScrollProgressBar />
            {children}
            <DefaultFooter {...footerData} />
            <FloatingButtons />
        </>
    );
}
