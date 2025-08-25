// /lib/navItems.ts
import { NavItem } from "@/types/dashboard";
import {
    faHome, faChartLine, faShoppingCart, faUser, faCog, faFileAlt, faUsers,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

export const navItems: NavItem[] = [
    { type: "title", name: "Main" },
    { type: "item", name: "Dashboard", href: "/dashboard", icon: faHome },

    { type: "title", name: "Mitra Management" },
    {
        type: "dropdown",
        name: "Mitra",
        icon: faUsers,
        children: [
            { name: "All Mitra", href: "/dashboard/mitra", icon: faUser },
            { name: "Personal Info", href: "/dashboard/mitra/personal", icon: faUser },
            { name: "Company Info", href: "/dashboard/mitra/company", icon: faUser },
            { name: "Payment Info", href: "/dashboard/mitra/payment", icon: faUser },
            { name: "Extra Notes", href: "/dashboard/mitra/extra", icon: faUser },
        ],
    },

    { type: "title", name: "Reports / Analytics" },
    {
        type: "dropdown",
        name: "Reports",
        icon: faFileAlt,
        children: [
            { name: "Sales Reports", href: "/dashboard/reports/sales", icon: faShoppingCart },
            { name: "Lead Tracking", href: "/dashboard/reports/leads", icon: faChartLine },
        ],
    },

    { type: "title", name: "CS Staff Overview" },
    { type: "item", name: "CS Staff", href: "/dashboard/cs-staff", icon: faPhone },

    { type: "title", name: "Settings" },
    { type: "item", name: "Profile", href: "/dashboard/profile", icon: faUser },
    { type: "item", name: "Admins", href: "/dashboard/admins", icon: faUsers },
    { type: "item", name: "System", href: "/dashboard/settings", icon: faCog },
];
