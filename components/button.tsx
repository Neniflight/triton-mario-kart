import React, { ReactElement } from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  leftIcon?: ReactElement<{ className?: string }>;
  rightIcon?: ReactElement<{ className?: string }>;
  variant?: "default" | "maroon" | "blue";
  href: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  href,
  variant = "default",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-white/65 font-barlow font-bold cursor-pointer duration-200";

  const variantClasses = {
    default: "bg-transparent text-(--white) hover:bg-(--white) hover:text-(--black)",
    maroon: "bg-(--maroon)-600 text-white hover:bg-white hover:text-(--maroon)",
    blue: "bg-(--blue)-600 text-white hover:bg-white hover:text-(--blue)"
  };

  return (
    <Link href={href}>
      <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        {leftIcon && (
          <span className="w-5 h-5 flex items-center justify-center text-inherit">
            {React.cloneElement(leftIcon, {
              className: "w-full h-full stroke-current",
            })}
          </span>
        )}
        <span>{children}</span>
        {rightIcon && (
          <span className="w-5 h-5 flex items-center justify-center text-inherit">
            {React.cloneElement(rightIcon, {
              className: "w-full h-full stroke-current",
            })}
          </span>
        )}
      </button>
    </Link>
  );
}
