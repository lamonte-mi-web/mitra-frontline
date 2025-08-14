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

  return <CustomButton ref={btnRef} {...props}>{props.children ?? "Gabung Sekarang"}</CustomButton>;
}
