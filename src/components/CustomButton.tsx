"use client";
import React, { forwardRef } from "react";
import Link from "next/link";

type BaseProps = {
  children?: React.ReactNode;
  styles?: "default" | "brown" | "reverse" | "whatsapp";
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  "aria-label"?: string;
  "data-cta"?: string;
};

type ButtonProps = BaseProps & {
  type?: "button" | "submit" | "reset";
};

type LinkProps = BaseProps & {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export type CustomButtonProps = ButtonProps | LinkProps;

/**
 * CustomButton
 * - Renders a semantic <button> when no href
 * - Renders a Next <Link> (internal) with ref forwarded to Link (which forwards to <a>)
 * - Renders a plain <a> for external links
 */
const CustomButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const classes = `custom-btn ${props.styles ?? "default"} ${props.className ?? ""}`.trim();

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
        // Next Link (no legacyBehavior). Pass ref directly to Link so Next can forward to <a>.
        return (
          <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorProps}>
            <span></span>
            {props.children}
          </Link>
        );
      }

      // External link — plain anchor
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...anchorProps}>
          <span></span>
          {props.children}
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
      >
        <span></span>
        {props.children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
