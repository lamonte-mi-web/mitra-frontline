// /lib/navItems.ts
import { NavItem } from "@/types/dashboard";
import { faHome, faChartLine, faShoppingCart, faUser, faCog, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const navItems: NavItem[] = [
    { type: "title", name: "Main" },
    { type: "item", name: "Dashboard", href: "/dashboard", icon: faHome },
    {
        type: "dropdown",
        name: "Reports",
        icon: faFileAlt,
        children: [
            { name: "Analytics", href: "/dashboard/analytics", icon: faChartLine },
            { name: "Sales", href: "/dashboard/sales", icon: faShoppingCart },
        ],
    },
    { type: "title", name: "Settings" },
    { type: "item", name: "Profile", href: "/dashboard/profile", icon: faUser },
    { type: "item", name: "System", href: "/dashboard/settings", icon: faCog },
];
