'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faWhatsapp,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';

export default function DefaultFooter() {
    const [year, setYear] = useState<number>(new Date().getFullYear());

    return (
        <footer className="bg-gray-100 text-black py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-start text-center sm:text-left">
                {/* Logo */}
                <div>
                    <Image
                        src="/assets/img/logo-lamonte.png"
                        alt="Lamonte Logo"
                        width={150}
                        height={60}
                        priority
                    />
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Kontak Kami</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Email: <a href="mailto:info@lamonte.id" className="hover:text-blue">info@lamonte.id</a></li>
                        <li>Telepon: <a href="tel:+628111209921" className="hover:text-blue">+62 811-1209-921</a></li>
                        <li>Alamat: Jalan Hayam Wuruk no. 111 ZC, Kel Maphar, Kec. Taman Sari, Kota Adm Jakarta Barat, Prov. DKI Jakarta</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Ikuti Kami</h3>
                    <div className="flex justify-center sm:justify-start gap-5 text-2xl">
                        <a
                            href="https://instagram.com/lamonte.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-pink-500 transition"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://wa.me/628111209921"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="hover:text-green-400 transition"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a
                            href="https://tiktok.com/@lamonteid"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-400">
                © {year} Lamonte Mode Internasional. All rights reserved.
            </div>
        </footer>
    );
}
