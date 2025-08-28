'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { JSX } from 'react';

type ContactInfo = {
    email: string;
    phone: string;
    address: string;
};

type SocialLink = {
    name: string;
    href: string;
    icon: JSX.Element;
    hoverClass: string;
};

type FooterProps = {
    logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    contact: ContactInfo;
    socials: SocialLink[];
    companyName: string;
};

export default function DefaultFooter({
    logo,
    contact,
    socials,
    companyName,
}: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className="text-black py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-start text-center sm:text-left">
                {/* Logo */}
                <div className='mx-auto sm:mx-0'>
                    <Image {...logo} priority />
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#ff9000]">Kontak Kami</h3>
                    <ul className="space-y-1 text-sm text-[#166534]">
                        <li>
                            Email:{' '}
                            <a href={`mailto:${contact.email}`} className="hover:text-blue">
                                {contact.email}
                            </a>
                        </li>
                        <li>
                            Telepon:{' '}
                            <a href={`tel:${contact.phone}`} className="hover:text-blue">
                                {contact.phone}
                            </a>
                        </li>
                        <li>{contact.address}</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#ff9000]">Ikuti Kami</h3>
                    <div className="flex justify-center sm:justify-start gap-5 text-2xl">
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                className={`${s.hoverClass} transition`}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-400">
                © {year} {companyName}. All rights reserved.
            </div>
        </footer>
    );
}
