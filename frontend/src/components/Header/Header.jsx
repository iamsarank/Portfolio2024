import React, { useEffect, useRef } from "react";
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import logo from '../../assets/images/logo.png'

const NavLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About Us",
    },
    {
        path: "/experience",
        display: "Experience",
    },
    {
        path: "/Projects",
        display: "Project",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 ||
                document.getElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        });
    }

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener("scroll", handleStickyHeader);
    })

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu")

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="logo" className="w-[35px]" />
                    </div>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {NavLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={(navClass)=> navClass.isActive
                                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}>
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>                        
                    </div>
                    <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                </div>
            </div>
        </header>
    )
};

export default Header;
