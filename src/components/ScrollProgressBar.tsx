"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = (scrollTop / docHeight) * 100;
            setScrollPercent(percent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: `${scrollPercent}%`,
                height: "4px",
                backgroundColor: "#ff9000",
                zIndex: 9999,
                transition: "width 0.1s ease-out",
            }}
        />
    );
}
