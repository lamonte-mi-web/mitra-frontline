// CustomButton.tsx
import { forwardRef, HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";

type BaseProps = {
  children?: React.ReactNode;
  styles?: "default" | "brown" | "reverse" | "whatsapp";
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

type ButtonProps = BaseProps & {
  type?: "button" | "submit" | "reset";
};

type LinkProps = BaseProps & {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
};

export type CustomButtonProps = ButtonProps | LinkProps;

const CustomButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, CustomButtonProps>(
  (props, ref) => {
    const classes = `custom-btn ${props.styles ?? "default"} ${props.className ?? ""}`;

    if ("href" in props) {
      return (
        <Link
          id={props.id}
          href={props.href}
          ref={ref as any}
          className={classes}
          target={props.target}
          rel={props.rel}
          onClick={props.onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          <span></span>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        id={props.id}
        type={props.type ?? "button"}
        ref={ref as any}
        className={classes}
        onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>}
      >
        <span></span>
        {props.children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
