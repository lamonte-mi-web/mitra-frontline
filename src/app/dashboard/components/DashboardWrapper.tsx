// /app/dashboard/components/DashboardWrapper.tsx

"use client";

// At the top
import { supabaseClient } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faChartLine,
    faShoppingCart,
    faUser,
    faCog,
    faFileAlt,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type NavItem =
    | { type: "title"; name: string }
    | { type: "item"; name: string; href: string; icon: any }
    | {
        type: "dropdown";
        name: string;
        icon: any;
        children: { name: string; href: string; icon: any }[];
    };

const navItems: NavItem[] = [
    { type: "title", name: "Main" },
    { type: "item", name: "Dashboard", href: "/dashboard", icon: faHome },
    {
        type: "dropdown",
        name: "Reports",
        icon: faFileAlt,
        children: [
            { name: "Analytics", href: "/dashboard/analytics", icon: faChartLine },
            { name: "Sales", href: "/dashboard/sales", icon: faShoppingCart },
        ],
    },
    { type: "title", name: "Settings" },
    { type: "item", name: "Profile", href: "/dashboard/profile", icon: faUser },
    { type: "item", name: "System", href: "/dashboard/settings", icon: faCog },
];

const sidebarVariants = {
    open: {
        width: 256,
        transition: { type: "spring" as const, stiffness: 120, damping: 20 }
    },
    closed: {
        width: 80,
        transition: { type: "spring" as const, stiffness: 120, damping: 20 }
    },
};

const navListVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const navItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: 0 },
};

export default function DashboardWrapper({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const router = useRouter();

    async function handleLogout() {
        const supabase = supabaseClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Logout error:", error.message);
            return;
        }

        // Redirect to login page or homepage
        router.push("/login");
    }


    return (
        <div className="bg-[#fdf6e3] text-gray-900 flex min-h-screen">
            {/* Sidebar */}
            <motion.aside
                variants={sidebarVariants}
                animate={sidebarOpen ? "open" : "closed"}
                initial={false}
                className="bg-[#166534] text-white flex flex-col overflow-hidden"
            >
                {/* Logo Section */}
                <div className="p-4 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link href="/" className="flex flex-col items-center justify-center">
                            <span
                                className={`transition-all duration-300 font-extrabold tracking-wide ${sidebarOpen ? "text-2xl" : "text-sm"
                                    } text-white`}
                            >
                                Lamonte
                            </span>
                            {sidebarOpen && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-1 text-sm font-medium tracking-wide text-white text-center"
                                >
                                    Partner Management System
                                </motion.span>
                            )}
                        </Link>
                    </motion.div>
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
                                const sidebarOpenDropdown = openDropdown === item.name;
                                return (
                                    <motion.li key={idx} variants={navItemVariants}>
                                        {/* Dropdown Toggle */}
                                        <button
                                            onClick={() =>
                                                setOpenDropdown(sidebarOpenDropdown ? null : item.name)
                                            }
                                            className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#FF9000] transition"
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

                                        {/* Dropdown Items */}
                                        <AnimatePresence>
                                            {sidebarOpenDropdown && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`mt-2 space-y-1 overflow-hidden ${sidebarOpen ? "pl-6" : "pl-2"
                                                        }`}
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

                {/* Footer */}
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="p-4 text-sm text-[#FCD92B]"
                    >
                        © Lamonte
                    </motion.div>
                )}
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-between bg-white shadow px-6 py-4"
                >
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-[#166534] hover:text-[#FF9000] transition"
                    >
                        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} className="w-5 h-5" />
                    </button>
                    <h1 className="text-xl font-semibold text-[#166534]">Dashboard</h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogout}
                        className="px-4 py-2 rounded-lg bg-[#FF9000] text-white hover:bg-[#FCD92B] hover:text-[#166534] transition font-medium"
                    >
                        Logout
                    </motion.button>
                </motion.header>

                <motion.main
                    key={pathname} // page transition on route change
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 p-6"
                >
                    {children}
                </motion.main>
            </div>
        </div>
    );
}
