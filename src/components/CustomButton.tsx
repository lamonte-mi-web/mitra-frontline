'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

type BaseProps = {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

type ButtonProps = BaseProps & {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

type LinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type CustomButtonProps = ButtonProps | LinkProps;

export default function CustomButton(props: CustomButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = btn.getBoundingClientRect();
      const relX = mouseEvent.clientX - rect.left;
      const relY = mouseEvent.clientY - rect.top;

      const span = btn.querySelector('span') as HTMLElement | null;
      if (span) {
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
      }
    };

    btn.addEventListener('mouseenter', handleMouseMove);
    btn.addEventListener('mouseout', handleMouseMove);

    return () => {
      btn.removeEventListener('mouseenter', handleMouseMove);
      btn.removeEventListener('mouseout', handleMouseMove);
    };
  }, []);

  const classes = `custom-btn${props.reverse ? ' reverse' : ''} ${props.className ?? ''}`;

  // 👉 if it's a link
  if ('href' in props) {
    return (
      <Link
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
      >
        <span></span>
        {props.children}
      </Link>
    );
  }

  // 👉 else it's a button
  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={classes}
    >
      <span></span>
      {props.children}
    </button>
  );
}
