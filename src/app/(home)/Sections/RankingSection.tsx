"use client";

import { OrangeDivider } from "@/components/OrangeDivider";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

type Performer = {
    mitraId: string;
    place: number;
    name: string;
    income: number;
    color: "gray" | "yellow" | "amber";
};

const podiumColors: Record<Performer["color"], string[]> = {
    gray: ["bg-gray-300", "bg-gray-200", "bg-gray-700"],
    yellow: ["bg-yellow-400", "bg-yellow-300", "bg-yellow-600"],
    amber: ["bg-amber-400", "bg-amber-300", "bg-amber-600"],
};

type Category = "distributor" | "agen" | "reseller";

const topPerformers: Record<Category, Performer[]> = {
    distributor: [
        { mitraId: "", place: 2, name: "PT. Jaya Abadi", income: 700640000, color: "gray" },
        { mitraId: "", place: 1, name: "CV. Makmur Sentosa", income: 642400000, color: "yellow" },
        { mitraId: "", place: 3, name: "UD. Lancar Jaya", income: 638700000, color: "amber" },
    ],
    agen: [
        { mitraId: "", place: 2, name: "Agen Sejahtera", income: 152530000, color: "gray" },
        { mitraId: "", place: 1, name: "Agen Utama", income: 145750000, color: "yellow" },
        { mitraId: "", place: 3, name: "Agen Barokah", income: 142700000, color: "amber" },
    ],
    reseller: [
        { mitraId: "", place: 2, name: "Budi Santoso", income: 72850000, color: "gray" },
        { mitraId: "", place: 1, name: "Ani Wijaya", income: 68880000, color: "yellow" },
        { mitraId: "", place: 3, name: "Cahyo Pratama", income: 62490000, color: "amber" },
    ],
};

const formatIncomeID = (income: number) =>
    income.toLocaleString("id-ID", { minimumFractionDigits: 0 });

export default function RankingSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("distributor");
    const [isHovered, setIsHovered] = useState(false);

    // New state to track desktop/mobile after mount
    const [isDesktop, setIsDesktop] = useState(false);

    // Detect desktop width on mount & on resize
    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 768);
        }
        handleResize(); // set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto play category tabs every 4s
    useEffect(() => {
        if (isHovered) return; // pause autoplay on hover

        const categories: Category[] = ["distributor", "agen", "reseller"];
        let index = categories.indexOf(activeCategory);

        const interval = setInterval(() => {
            index = (index + 1) % categories.length;
            setActiveCategory(categories[index]);
        }, 4000);

        return () => clearInterval(interval);
    }, [activeCategory, isHovered]);

    // Use isDesktop to determine order
    const orderedPerformers = isDesktop
        ? [2, 1, 3]
            .map((place) => topPerformers[activeCategory].find((p) => p.place === place))
            .filter(Boolean) as Performer[]
        : topPerformers[activeCategory].slice().sort((a, b) => a.place - b.place);

    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-4xl font-bold uppercase text-gray-800 mb-3 text-center">
                    Update terkini top kemitraan lamonte
                </h2>
            </div>
            <div className="container mx-auto px-4">
                {/* Category Tabs */}
                <div className="flex justify-center mb-8 gap-4">
                    {(Object.keys(topPerformers) as Category[]).map((category) => (
                        <button
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`category-tab ${activeCategory === category
                                    ? "text-[#FF9000] border-b-2 border-[#FF9000]"
                                    : "text-gray-700"
                                } bg-white px-6 py-3 rounded-lg shadow-md font-medium`}
                        >
                            {category === "distributor" && <i className="fas fa-truck mr-2"></i>}
                            {category === "agen" && <i className="fas fa-store mr-2"></i>}
                            {category === "reseller" && <i className="fas fa-user-tie mr-2"></i>}
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Podium */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-end h-auto md:h-96 gap-6 md:gap-8">
                    {orderedPerformers.map((p) => {
                        if (!p) return null;
                        return (
                            <div
                                key={p.place}
                                className="podium-step group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 w-full md:w-1/4 max-w-xs"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div
                                    className={`${podiumColors[p.color][
                                        p.place === 1 ? 0 : p.place === 3 ? 2 : 1
                                    ]} w-full rounded-t-lg`}
                                    style={{
                                        height: p.place === 1 ? "240px" : p.place === 2 ? "180px" : "140px",
                                    }}
                                >
                                    <div className="flex justify-center items-center h-full">
                                        <div
                                            className={`bg-white rounded-full ${p.place === 1 ? "w-20 h-20" : "w-16 h-16"
                                                } flex items-center justify-center shadow-lg relative`}
                                        >
                                            {p.place === 1 && (
                                                <div className="absolute -top-5 -right-1 transform transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(255,144,0,0.8)]">
                                                    <FontAwesomeIcon
                                                        icon={faCrown}
                                                        className="text-[#FF9000] text-3xl rotate-25"
                                                    />
                                                </div>
                                            )}

                                            <span
                                                className={`${p.place === 1 ? "text-3xl" : "text-2xl"
                                                    } font-bold text-gray-700`}
                                            >
                                                {p.place}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${p.place === 1
                                            ? podiumColors[p.color][1]
                                            : p.place === 3
                                                ? podiumColors[p.color][2]
                                                : podiumColors[p.color][0]
                                        } w-full py-4 rounded-b-lg text-center`}
                                >
                                    <h3 className={`font-bold ${p.place === 3 ? "text-white" : "text-gray-800"}`}>
                                        {p.name}
                                    </h3>
                                    <p className={`text-sm ${p.place === 3 ? "text-white" : "text-gray-600"}`}>
                                        Rp{formatIncomeID(p.income)},00
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Carousel Navigation */}
                <div className="flex justify-center mt-8 gap-2">
                    {(Object.keys(topPerformers) as Category[]).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`carousel-nav w-3 h-3 rounded-full ${activeCategory === category ? "bg-[#FF9000]" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
