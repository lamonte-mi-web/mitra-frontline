// CustomButton.tsx
import { forwardRef, useRef } from "react";
import Link from "next/link";

type BaseProps = {
  children: React.ReactNode;
  styles?: "default" | "brown" | "reverse";
  className?: string;
};

type ButtonProps = BaseProps & {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type LinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type CustomButtonProps = ButtonProps | LinkProps;

const CustomButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, CustomButtonProps>(
  (props, ref) => {
    const classes = `custom-btn ${props.styles ?? "default"} ${props.className ?? ""}`;

    if ("href" in props) {
      return (
        <Link href={props.href} ref={ref as any} className={classes}>
          <span></span>
          {props.children}
        </Link>
      );
    }

    return (
      <button type={props.type ?? "button"} ref={ref as any} className={classes}>
        <span></span>
        {props.children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
