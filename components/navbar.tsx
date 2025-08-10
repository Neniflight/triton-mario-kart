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
        <nav className="w-full px-7 py-2.5 left-0 top-0 bg-gradient-to-r from-(--blue) via-(--purple) to-(--maroon) inline-flex justify-between items-center">
            <div className="w-full flex justify-between items-center">
                <div className="self-stretch inline-flex justify-center items-center gap-[5px]">
                    <Image src="/logo.png" alt='logo' width={24} height={24}/>
                    <h3 className="text-(--white)">TRITON MARIO KART</h3>
                </div>
                <div className="hidden md:flex items-center">
                    {navLinks.map((link, index) => (
                        <div key={link.href} className="flex items-center">
                            {index > 0 && (
                                <div className="h-6 w-px mx-5 bg-(--transparent-white)" /> 
                            )}
                            <Link key={link.href} href={link.href}>   
                                <h4 className="text-(--white)">{link.label}</h4>
                            </Link>
                        </div>
                    ))}
                </div>

                <button className="md:hidden text-(--white)" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            </nav>
            {isOpen && (
                <div className="w-full flex flex-col items-start md:hidden gap-3 pt-2 py-4 bg-(--black)">
                    {navLinks.map((link,index) => (
                        <React.Fragment key={link.href}>
                        {index > 0 && (
                            <div
                            className="w-full h-px bg-(--transparent-white)"
                            />
                        )}
                        <Link href={link.href} onClick={() => setIsOpen(false)}>
                            <h4 className="px-7 text-(--white)">{link.label}</h4>
                        </Link>
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar;