'use client';
import { useEffect, useState } from "react";
import { useCTAContext } from "@/context/CTAContext";

export default function MouseTether() {
    const { buttons } = useCTAContext();
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [nearest, setNearest] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (buttons.length === 0) return;

        let closestBtn = null;
        let minDist = Infinity;

        buttons.forEach(({ ref }) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dist = Math.hypot(mouse.x - cx, mouse.y - cy);
            if (dist < minDist) {
                minDist = dist;
                closestBtn = { x: cx, y: cy };
            }
        });

        setNearest(closestBtn);
    }, [mouse, buttons]);

    if (!nearest) return null;

    // Control point for quadratic Bezier: midway + slight offset for curve
    const cx = (mouse.x + nearest.x) / 2;
    const cy = (mouse.y + nearest.y) / 2 - 50; // raise curve slightly

    // Arrowhead points
    const arrowSize = 10;
    const angle = Math.atan2(nearest.y - cy, nearest.x - cx);
    const arrowX = nearest.x - arrowSize * Math.cos(angle - Math.PI / 6);
    const arrowY = nearest.y - arrowSize * Math.sin(angle - Math.PI / 6);
    const arrowX2 = nearest.x - arrowSize * Math.cos(angle + Math.PI / 6);
    const arrowY2 = nearest.y - arrowSize * Math.sin(angle + Math.PI / 6);

    return (
        <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]">
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Curved line with glow */}
            <path
                d={`M${mouse.x},${mouse.y} Q${cx},${cy} ${nearest.x},${nearest.y}`}
                stroke="#abababff"
                strokeWidth={3}
                fill="transparent"
                strokeDasharray="4 4"
                filter="url(#glow)"
            />

            {/* Arrowhead with glow */}
            <polygon
                points={`${nearest.x},${nearest.y} ${arrowX},${arrowY} ${arrowX2},${arrowY2}`}
                fill="#abababff"
                filter="url(#glow)"
            />
        </svg>
    );
}
