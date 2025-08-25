// /app/dashboard/layout.tsx
import { ReactNode } from "react";
import DashboardWrapper from "./components/DashboardWrapper";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const supabase = await supabaseServer();

    // Get the current session
    const { data: { session } } = await supabase.auth.getSession();

    // Redirect to login if not authenticated
    if (!session) {
        redirect("/login");
    }

    // Optionally pass user info to DashboardWrapper
    // const user = session.user;

    return (
        <DashboardWrapper>
            {children}
        </DashboardWrapper>
    );
}
