"use client";
import { useRef, useEffect } from "react";
import CustomButton from "./CustomButton";
import { useCTAContext } from "@/context/CTAContext";
import { sendGTMEvent } from "@next/third-parties/google";
import clsx from "clsx";

type CTAButtonProps = Omit<React.ComponentProps<typeof CustomButton>, "href"> & {
    href?: string;
};

export default function CTAButton({ children = "Gabung Sekarang", ...props }: CTAButtonProps) {
    const btnRef = useRef<HTMLAnchorElement>(null);
    const { register } = useCTAContext();

    useEffect(() => {
        if (btnRef.current) {
            register(btnRef);
        }
    }, [register]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Fire GTM event
        sendGTMEvent({
            event: "cta_click",
            label: children?.toString(),
            href:
                props.href ??
                "https://wa.me/+628111089921?text=Halo%20Mila%2C%20saya%20sudah%20lihat%20penawarannya%20dan%20ingin%20langsung%20daftar.%20Bisa%20dibantu%20sekarang%3F",
        });

        // If parent passed custom onClick, still call it
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <CustomButton
            ref={btnRef}
            target="_blank"
            href={
                props.href ??
                "https://wa.me/+628111089921?text=Halo%20Mila%2C%20saya%20sudah%20lihat%20penawarannya%20dan%20ingin%20langsung%20daftar.%20Bisa%20dibantu%20sekarang%3F"
            }
            className={clsx("cta-button", props.className)}
            onClick={handleClick}
            {...props}
        >
            {children}
        </CustomButton>
    );
}
