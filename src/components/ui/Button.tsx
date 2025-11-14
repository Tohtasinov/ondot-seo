"use client";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export default function Button({ className = "", variant = "primary", size = "md", leftIcon, rightIcon, children, ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300";
  const pads = size === "sm" ? "h-9 px-3 text-sm" : size === "lg" ? "h-11 px-5 text-base" : "h-10 px-4 text-sm";
  const styles =
    variant === "primary"
      ? "bg-[var(--brand)] text-white hover:opacity-90 active:opacity-85 shadow-md"
      : variant === "outline"
      ? "border border-white/60 text-white hover:bg-white/10"
      : "text-[var(--fg)] hover:bg-black/[0.04]";

  return (
    <button className={`${base} ${pads} ${styles} ${className}`} {...props}>
      {leftIcon ? <span className="mr-2">{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className="ml-2">{rightIcon}</span> : null}
    </button>
  );
}
