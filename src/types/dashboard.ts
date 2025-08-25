// /types/dashboard.ts
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type NavItem =
    | { type: "title"; name: string }
    | { type: "item"; name: string; href: string; icon: IconProp }
    | {
        type: "dropdown";
        name: string;
        icon: IconProp;
        children: { name: string; href: string; icon: IconProp }[];
    };
