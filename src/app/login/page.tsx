// app/login/page.tsx

import { redirect } from "next/navigation";

import LoginForm from "./LoginForm";
import { supabaseServer } from "@/lib/supabaseServer";

export default async function LoginPage() {
    const supabase = await supabaseServer();
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
        // already logged in, redirect to dashboard
        redirect("/dashboard");
    }

    return <LoginForm />; // client-side form
}
