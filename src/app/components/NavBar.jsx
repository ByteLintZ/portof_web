"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-20 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-blue-500" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer transition-transform duration-200 hover:scale-105"
          />
          <span className="text-white text-xl font-bold">Lint</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white focus:outline-none"
          >
            {!navbarOpen ? (
              <Bars3Icon className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            ) : (
              <XMarkIcon className="w-8 h-8 transition-transform duration-200 hover:scale-110" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.path}
              title={link.title}
              className="text-white text-lg font-medium transition-colors duration-200 hover:text-yellow-400 hover:underline"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#121212] bg-opacity-95 flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => setNavbarOpen(false)}
                  className="text-white text-2xl font-semibold transition-transform duration-300 hover:scale-105"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
