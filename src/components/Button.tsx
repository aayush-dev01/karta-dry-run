import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-colors";

const variants = {
  primary: `${base} bg-karta-primary text-karta-text hover:bg-karta-primary-dark`,
  outline: `${base} border-2 border-karta-primary bg-transparent text-karta-text hover:bg-karta-primary/15`,
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
