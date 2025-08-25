"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


import { sidebarVariants, navListVariants, navItemVariants } from "@/lib/animations";
import type { NavItem } from "@/types/dashboard";
import { navItems } from "@/lib/NavItems";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    pathname: string;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen, pathname }: SidebarProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <motion.aside
            variants={sidebarVariants}
            animate={sidebarOpen ? "open" : "closed"}
            initial={false}
            className="bg-[#166534] text-white flex flex-col overflow-hidden"
        >
            {/* Logo */}
            <div className="p-4 flex flex-col items-center">
                <Link href="/" className="flex flex-col items-center justify-center">
                    <span
                        className={`transition-all duration-300 font-extrabold tracking-wide ${sidebarOpen ? "text-2xl" : "text-sm"
                            } text-white`}
                    >
                        Lamonte
                    </span>
                    {sidebarOpen && (
                        <span className="mt-1 text-sm font-medium tracking-wide text-white text-center">
                            Partner Management System
                        </span>
                    )}
                </Link>
            </div>

            {/* Navigation */}
            <motion.nav
                className="flex-1 px-2"
                variants={navListVariants}
                initial={false}
                animate={sidebarOpen ? "open" : "closed"}
            >
                <ul className="space-y-2">
                    {navItems.map((item, idx) => {
                        if (item.type === "title") {
                            return sidebarOpen ? (
                                <motion.li
                                    key={idx}
                                    variants={navItemVariants}
                                    className="px-2 pt-4 text-xs uppercase text-[#FCD92B] font-semibold tracking-wider"
                                >
                                    {item.name}
                                </motion.li>
                            ) : null;
                        }

                        if (item.type === "item") {
                            const isActive = pathname === item.href;
                            return (
                                <motion.li key={idx} variants={navItemVariants}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-2 py-2 px-3 rounded-lg transition ${isActive
                                            ? "bg-[#FF9000] text-white font-semibold"
                                            : "hover:bg-[#FF9000] hover:text-white"
                                            }`}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                                        {sidebarOpen && <span>{item.name}</span>}
                                    </Link>
                                </motion.li>
                            );
                        }

                        if (item.type === "dropdown") {
                            // Check if any child matches the current pathname
                            const anyChildActive = item.children.some(child => child.href === pathname);
                            const sidebarOpenDropdown = openDropdown === item.name || anyChildActive; // auto-open if active

                            return (
                                <motion.li key={idx} variants={navItemVariants}>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === item.name ? null : item.name)
                                        }
                                        className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition ${anyChildActive ? "bg-[#FF9000] text-white font-semibold" : "hover:bg-[#FF9000] hover:text-white"
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                                            {sidebarOpen && <span>{item.name}</span>}
                                        </span>
                                        {sidebarOpen && (
                                            <motion.span
                                                animate={{ rotate: sidebarOpenDropdown ? 90 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                ▶
                                            </motion.span>
                                        )}
                                    </button>

                                    <AnimatePresence>
                                        {sidebarOpenDropdown && (
                                            <motion.ul
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`mt-2 space-y-1 overflow-hidden ${sidebarOpen ? "pl-6" : "pl-2"}`}
                                            >
                                                {item.children.map((child) => {
                                                    const isActive = pathname === child.href;
                                                    return (
                                                        <motion.li
                                                            key={child.href}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <Link
                                                                href={child.href}
                                                                className={`flex items-center gap-2 py-1 px-3 rounded-md transition ${isActive
                                                                        ? "bg-[#FF9000] text-white font-semibold"
                                                                        : "hover:bg-[#FF9000] hover:text-white"
                                                                    }`}
                                                            >
                                                                <FontAwesomeIcon icon={child.icon} className="w-4 h-4" />
                                                                {sidebarOpen && child.name}
                                                            </Link>
                                                        </motion.li>
                                                    );
                                                })}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </motion.li>
                            );
                        }

                    })}
                </ul>
            </motion.nav>

            {sidebarOpen && <div className="p-4 text-sm text-[#FCD92B]">© Lamonte</div>}
        </motion.aside>
    );
}
