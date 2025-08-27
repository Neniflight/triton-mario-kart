"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from 'next/image';

const navLinks = [
    { label: "Events", href: '/events'},
    { label: "Team", href: '/team'},
    { label: "Join Us", href: '/join'},
    { label: "Live", href: '/live'}
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <div>
        <nav className="fixed top-0 left-0 z-51 w-full px-7 py-2.5 left-0 top-0 bg-gradient-to-r from-(--blue) via-(--purple) to-(--maroon) inline-flex justify-between items-center">
            <div className="w-full flex justify-between items-center max-w-[1440px] mx-auto">
                <Link href={"/"}>
                    <div className="self-stretch inline-flex justify-center items-center gap-[5px]">
                        <Image src="/logo.png" alt='logo' width={24} height={24}/>
                        <h3 className="text-(--white)">TRITON MARIO KART</h3>
                    </div>
                </Link>
                <div className="hidden md:flex items-center">
                    {navLinks.map((link, index) => (
                        <div key={link.href} className="flex items-center">
                            {index > 0 && (
                                <div className="h-6 w-px mx-5 bg-(--transparent-white)" /> 
                            )}
                            <Link key={link.href} href={link.href} className={"relative group"}>   
                                <h4 className="text-(--white)">{link.label}</h4>
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-(--white) transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </div>
                    ))}
                </div>

                <button className="md:hidden text-(--white)" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
            <>
                {isOpen && (
                    <div
                    className="fixed inset-0 bg-black/90 z-49"
                    onClick={() => setIsOpen(false)}
                    ></div>
                )}

                <div
                    className={`
                    fixed left-0 w-full z-50 flex flex-col items-start md:hidden
                    pt-2 py-4 bg-(--black) transition-transform duration-300 ease-in-out
                    top-12
                    ${isOpen ? "translate-y-0" : "-translate-y-full"}
                    `}
                >
                    {navLinks.map((link, index) => (
                    <Link key={link.href} className="w-full items-center" href={link.href} onClick={() => setIsOpen(false)}>
                    <React.Fragment>
                        {index > 0 && (
                        <div className="w-full h-px bg-(--transparent-white)" />
                        )}
                        <h4 className="px-7 py-3 text-(--white)">{link.label}</h4>
                    </React.Fragment>
                    </Link>
                    ))}
                </div>
            </>
        </div>
    )
}

export default Navbar;