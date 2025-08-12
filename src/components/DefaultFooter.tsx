'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faWhatsapp,
    faTiktok,
    faYoutube,
    faInternetExplorer, // I'll replace this with a globe icon from FontAwesome Pro, but since you probably don't have that, let's use a simple globe svg instead.
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
                        <a
                            href="https://youtube.com/@lamonteID"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="hover:text-red-600 transition"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a
                            href="https://lamonte.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Website"
                            className="hover:text-blue-600 transition"
                        >
                            {/* Since FontAwesome free doesn't have a globe brand icon, let's do a simple SVG globe */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                                aria-hidden="true"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm7.93 6h-2.09a15.446 15.446 0 0 0-1.33-3.5 8.03 8.03 0 0 1 3.42 3.5zm-7.93-5c1.58 0 3.05.54 4.21 1.44a16.533 16.533 0 0 1 1.71 3.06H11.2c-.06-2.05-.5-3.83-1.25-4.5A7.933 7.933 0 0 1 12 3zm-3.71 1.3a15.455 15.455 0 0 0-1.33 3.5H5.93a8.028 8.028 0 0 1 3.36-3.5zM4.07 12a7.94 7.94 0 0 1 0-2h3.18c-.09 1.35-.09 2.65 0 4H4.07zm1.38 5.2a15.443 15.443 0 0 0 1.33 3.5 8.028 8.028 0 0 1-3.36-3.5h2.03zm3.71 1.3c.75-.67 1.19-2.45 1.25-4.5H18.4a16.53 16.53 0 0 1 1.71 3.06 7.933 7.933 0 0 1-5.33 1.44zm2.94-6c.09-1.35.09-2.65 0-4h3.18a7.94 7.94 0 0 1 0 2h-3.18zm2.94-5.7a15.447 15.447 0 0 0-1.71-3.06 7.93 7.93 0 0 1 5.33 1.44 16.53 16.53 0 0 1-1.71 3.06h-2.03zm-6.54 9.24a16.55 16.55 0 0 1-1.71-3.06h9.3c-.42.99-.98 1.88-1.71 3.06H10.94zm-1.33-4c-.09-1.35-.09-2.65 0-4h2.03c-.09 1.35-.09 2.65 0 4h-2.03z" />
                            </svg>
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
