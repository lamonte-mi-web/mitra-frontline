// /app/dashboard/layout.tsx
import { ReactNode } from "react";
import DashboardWrapper from "./components/DashboardWrapper";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const supabase = await supabaseServer();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) redirect("/login");

    const user = session.user;

    return <DashboardWrapper user={user}>{children}</DashboardWrapper>;
}
