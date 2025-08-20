'use client';
import { useRef, useEffect } from "react";
import CustomButton, { CustomButtonProps } from "./CustomButton";
import { useCTAContext } from "@/context/CTAContext";


export default function CTAButton(props: Partial<CustomButtonProps>) {
    const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const { register } = useCTAContext();

    useEffect(() => {
        register(btnRef);
    }, [btnRef]);

    return <CustomButton id="cta-button" ref={btnRef} href="https://wa.me/+628111089921?text=Halo%20Mila%2C%20saya%20sudah%20lihat%20penawarannya%20dan%20ingin%20langsung%20daftar.%20Bisa%20dibantu%20sekarang%3F" {...props}>{props.children ?? "Gabung Sekarang"}</CustomButton>;
}
