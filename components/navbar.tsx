"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  variant?: "default" | "transparent";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const pathname = usePathname();

  const getNavbarBackground = () => {
    if (variant === "transparent") {
      return "bg-transparent";
    }
    return "bg-gradient-to-r from-blue via-purple to-maroon";
  };

  const isActivePage = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex w-full px-7 py-2.5 justify-between items-center ${getNavbarBackground()}`}
      >
        <Link
          href="/"
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-7 h-10 flex items-center justify-center">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/015c00b62d682caaf81ec8973e4356660b4ca435?width=57"
              alt="Logo"
              width={28}
              height={38}
              className="object-contain"
            />
          </div>
          <span className="text-white font-barlow font-bold text-[32px] leading-normal">
            TRITON MARIO KART
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/events" className="navbar-button">
            <span
              className={`navbar-button-text ${isActivePage("/events") ? "active" : ""}`}
            >
              Events
            </span>
            <div
              className={`navbar-button-underline ${isActivePage("/events") ? "active" : ""}`}
            ></div>
          </Link>
          <div className="navbar-separator"></div>

          <Link href="/team" className="navbar-button">
            <span
              className={`navbar-button-text ${isActivePage("/team") ? "active" : ""}`}
            >
              Team
            </span>
            <div
              className={`navbar-button-underline ${isActivePage("/team") ? "active" : ""}`}
            ></div>
          </Link>
          <div className="navbar-separator"></div>

          <Link href="/" className="navbar-button">
            <span
              className={`navbar-button-text ${isActivePage("/") && pathname === "/" ? "active" : ""}`}
            >
              Join Us
            </span>
            <div
              className={`navbar-button-underline ${isActivePage("/") && pathname === "/" ? "active" : ""}`}
            ></div>
          </Link>
          <div className="navbar-separator"></div>

          <Link href="/live" className="navbar-button">
            <span
              className={`navbar-button-text ${isActivePage("/live") ? "active" : ""}`}
            >
              Watch Live
            </span>
            <div
              className={`navbar-button-underline ${isActivePage("/live") ? "active" : ""}`}
            ></div>
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden flex w-full max-w-[402px] mx-auto px-7 py-3 pt-12 justify-between items-center ${getNavbarBackground()}`}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-6 h-8">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cac7da02ab2d50d608b3800220ec38cd9a511ff?width=45"
              alt="Logo"
              width={24}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-white font-barlow font-bold text-xl">
            TRITON MARIO KART
          </span>
        </Link>

        <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 border border-white/50 rounded">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </nav>
    </>
  );
}
