// app/login/LoginForm.tsx

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabaseClient";
import Image from "next/image";

type LoginFormValues = { email: string; password: string };

export default function LoginForm() {
    const router = useRouter();
    const supabase = supabaseClient();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

    const onSubmit = async (data: LoginFormValues) => {
            setLoading(true);
            setErrorMessage("");
    
            const { data: sessionData, error } = await supabaseClient().auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });
    
            setLoading(false);
    
            if (error) {
                setErrorMessage(error.message);
                return;
            }
    
            // Redirect to dashboard if login succeeds
            router.push("/dashboard");
        };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fdf6e3] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Logo */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/assets/img/logo-lamonte.png"
                        alt="Lamonte Logo"
                        width={150}
                        height={40}
                        className="h-12 w-auto"
                        priority
                    />
                    <p className="mt-2 text-sm font-medium text-[#166534]">
                        Partner Management System
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="admin@lamonte.co.id"
                            {...register("email", { required: "Email is required" })}
                            className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-[#166534]"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                {...register("password", { required: "Password is required" })}
                                className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-[#166534]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-500 text-sm"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-xs mt-1 text-center">{errorMessage}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 px-4 bg-[#166534] text-white font-semibold rounded-lg hover:bg-[#14532d] transition disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-xs text-center text-gray-500">
                    © {new Date().getFullYear()} Lamonte. All rights reserved.
                </p>
            </div>
        </div>
    );
}
