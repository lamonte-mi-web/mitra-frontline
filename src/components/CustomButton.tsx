"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx"; // Import clsx untuk menggabungkan class dengan lebih mudah

type BaseProps = {
  children?: React.ReactNode;
  styles?: "default" | "brown" | "reverse" | "whatsapp";
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  "aria-label"?: string;
  "data-cta"?: string;
  // ADDED: New props for icon and animation
  icon?: React.ReactNode;
  animated?: boolean;
};

type ButtonProps = BaseProps & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type LinkProps = BaseProps & {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export type CustomButtonProps = ButtonProps | LinkProps;

const CustomButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    // MODIFIED: Menggunakan clsx untuk manajemen class yang lebih bersih
    const classes = clsx(
      "custom-btn",
      props.styles ?? "default",
      {
        "disabled": (props as ButtonProps).disabled,
        "animated-pulse": props.animated, // Class untuk animasi
      },
      props.className,
    );

    // Konten tombol dengan ikon
    const content = (
      <div className="btn-content-wrapper">
        {props.children}
        {props.icon && <span className="btn-icon">{props.icon}</span>}
      </div>
    );

    if ("href" in props && typeof props.href === "string") {
      const href = props.href;
      const isInternal = href.startsWith("/");

      const anchorProps = {
        id: props.id,
        className: classes,
        onClick: props.onClick as React.MouseEventHandler<HTMLAnchorElement>,
        target: (props as LinkProps).target,
        rel: (props as LinkProps).rel,
        "aria-label": props["aria-label"],
        "data-cta": props["data-cta"],
      };

      if (isInternal) {
        return (
          <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorProps}>
            <span className="ripple-effect"></span>
            {content}
          </Link>
        );
      }

      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...anchorProps}>
          <span className="ripple-effect"></span>
          {content}
        </a>
      );
    }

    // Button variant
    return (
      <button
        id={props.id}
        type={(props as ButtonProps).type ?? "button"}
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>}
        aria-label={props["aria-label"]}
        data-cta={props["data-cta"]}
        disabled={(props as ButtonProps).disabled}
      >
        <span className="ripple-effect"></span>
        {content}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;