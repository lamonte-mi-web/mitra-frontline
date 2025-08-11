"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1200); // Simulate loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 bg-white z-[999] flex items-center justify-center transition-all duration-250 ${loaded ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
        >
            <div className="bg-[#FF9000] w-10 h-10 rounded-full animate-scaleout"></div>


        </div>
    );
}
