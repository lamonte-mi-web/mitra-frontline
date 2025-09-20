// lib/supabaseClient.ts
import { Database } from "@/types/database.types";
import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = () => createBrowserClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
