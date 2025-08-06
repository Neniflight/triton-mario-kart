import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "maroon";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  variant = "default",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-white/65 font-barlow font-bold text-base";

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {leftIcon && <span className="w-5 h-5">{leftIcon}</span>}
      <span className="text-white">{children}</span>
      {rightIcon && <span className="w-5 h-5">{rightIcon}</span>}
    </button>
  );
}
