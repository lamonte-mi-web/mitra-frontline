// /components/Header.tsx
"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabaseClient";
import Link from "next/link";


import type { User } from "@supabase/supabase-js";

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    user: User;
}

export default function Header({ sidebarOpen, setSidebarOpen, user }: HeaderProps) {
    const router = useRouter();

    async function handleLogout() {
        const supabase = supabaseClient();
        const { error } = await supabase.auth.signOut();
        if (error) return console.error("Logout error:", error.message);
        router.push("/login");
    }

    return (
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

            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/profile"
                    className="text-[#166534] font-medium relative group"
                >
                    {user.email}
                    {/* Underline on hover */}
                    <span
                        className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#166534] transition-all group-hover:w-full"
                    ></span>
                </Link>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg bg-[#FF9000] text-white hover:bg-[#FCD92B] hover:text-[#166534] transition font-medium"
                >
                    Logout
                </motion.button>
            </div>
        </motion.header>
    );
}
