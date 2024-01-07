"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay";
import styles from "./glowButton.module.css"

const navLinks=[
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Skills",
        path: "#skills",
    },
    {
        title: "Projects",
        path: "#projects",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#191A19] bg-opacity-100 ">
        <div className="flex flex-wrap items-center justify-between mx-auto pt-8 pb-8 pr-12 pl-12">
            <Link href={"/"} className="text-2xl md:text-4xl text-white font-semibold">
            PORTOFOLIO
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:flex md:items-center md:space-x-8 md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 sd:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) =>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))
                    }
                </ul>
                <button className={`${styles.btn}`}>Contact Me</button>
            </div>
        </div>
        {navbarOpen ? 
        <>
        <div className="flex flex-col my-5 items-center">
            <MenuOverlay links={navLinks} />
            <button className={`${styles.btnMobile} p-4 m-2 rounded-xl font-bold w-[80%]`}>Contact Me</button>
        </div>
        </> : null
        }

        </nav>
    );
};

export default Navbar;
