"use client";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import CustomButton from "./CustomButton";
import { useCTAContext } from "@/context/CTAContext";
import { sendGTMEvent } from "@next/third-parties/google";
import clsx from "clsx";

type CTAButtonProps = Omit<React.ComponentProps<typeof CustomButton>, "href"> & {
    href?: string;
    ariaLabel?: string;
    source?: string;
    // ADDED: Props untuk diteruskan ke CustomButton
    animated?: boolean;
    icon?: React.ReactNode;
};

const DEFAULT_FORM = "/form";
const DEFAULT_WHATSAPP = "https://wa.me/+628111089921?text=Halo%20Mila%2C%20saya%20sudah%20lihat%20penawarannya%20dan%20ingin%20langsung%20daftar.%20Bisa%20dibantu%20sekarang%3F";

export default function CTAButton({
    children = "Gabung Sekarang",
    href = DEFAULT_FORM,
    ariaLabel,
    className,
    source,
    animated, // Destructure prop baru
    icon,     // Destructure prop baru
    ...props
}: CTAButtonProps) {
    const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
    const { register } = useCTAContext();
    const pathname = usePathname();

    useEffect(() => {
        if (btnRef.current && typeof register === "function") {
            register(btnRef);
        }
    }, [register]);



    const isExternal = /^(https?:)?\/\//i.test(href);
    const defaultSource = source ?? pathname ?? "global";
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        try {
            sendGTMEvent({
                event: "cta_click",
                label: typeof children === "string" ? children : "cta_button",
                href,
                source: defaultSource,
                ts: Date.now(),
            });
        } catch {
            // analytics must not block UX
        }

        if (props.onClick) {
            props.onClick(e as any);
        }
    };

    const dataCta = typeof children === "string" ? children.replace(/\s+/g, "_").toLowerCase() : "cta_button";

    const linkProps = isExternal
        ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
        : { target: undefined, rel: undefined };

    return (
        <CustomButton
            ref={btnRef as any}
            href={href}
            onClick={handleClick}
            aria-label={ariaLabel ?? (typeof children === "string" ? children : "Gabung Sekarang")}
            data-cta={dataCta}
            // @ts-ignore
            data-source={defaultSource}
            className={clsx("cta-button", className)}
            // ADDED: Teruskan prop baru
            animated={animated}
            icon={icon}
            {...linkProps}
            {...(props as any)}
        >
            {children}
        </CustomButton>
    );
}