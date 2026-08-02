import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:-translate-y-1 hover:shadow-xl hover:from-blue-700 hover:to-blue-800",

    secondary:
      "border border-slate-200 bg-white text-slate-800 shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-lg",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {leftIcon && (
        <span className="flex items-center">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex items-center">
          {rightIcon}
        </span>
      )}
    </Link>
  );
}
