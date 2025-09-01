'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { motion, Variants } from 'framer-motion';

// ... (Definisi Tipe Anda tetap di sini)
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

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DefaultFooter({
    logo,
    contact,
    socials,
    companyName,
}: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            className="text-black py-10 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-start text-center sm:text-left">
                {/* Logo */}
                <motion.div className='mx-auto sm:mx-0' variants={itemVariants}>
                    <Image {...logo} priority />
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={itemVariants}>
                    <h3 className="font-semibold text-lg mb-2 text-[#ff9000]">Kontak Kami</h3>
                    <ul className="space-y-1 text-sm text-[#166534]">
                        <li>Email:{' '}<a href={`mailto:${contact.email}`} className="hover:text-blue">{contact.email}</a></li>
                        <li>Telepon:{' '}<a href={`tel:${contact.phone}`} className="hover:text-blue">{contact.phone}</a></li>
                        <li>{contact.address}</li>
                    </ul>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={itemVariants}>
                    <h3 className="font-semibold text-lg mb-2 text-[#ff9000]">Ikuti Kami</h3>
                    <div className="flex justify-center sm:justify-start gap-5 text-2xl">
                        {socials.map((s, i) => (
                            <motion.a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                className={`${s.hoverClass} transition`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} // Animate each icon individually
                                whileHover={{ scale: 1.2, y: -3 }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="mt-8 text-center text-xs text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                © {year} {companyName}. All rights reserved.
            </motion.div>
        </motion.footer>
    );
}