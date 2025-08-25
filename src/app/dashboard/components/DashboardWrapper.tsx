"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./Header";
import type { User } from "@supabase/supabase-js";

interface DashboardWrapperProps {
    children: ReactNode;
    user: User;
}

export default function DashboardWrapper({ children, user }: DashboardWrapperProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const pathname = usePathname();

    return (
        <div className="bg-[#fdf6e3] text-gray-900 flex min-h-screen">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} pathname={pathname} />
            <div className="flex-1 flex flex-col">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} user={user} />

                <motion.main
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
