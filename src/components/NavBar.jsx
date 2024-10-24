"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        scrolled ? "bg-blue-700 shadow-lg" : "bg-transparent"
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
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
          />
          <span className="text-white text-xl font-bold">Lint</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
          >
            {!navbarOpen ? (
              <Bars3Icon className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
            ) : (
              <XMarkIcon className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
            )}
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-white text-lg font-medium transition-colors duration-300 hover:text-yellow-400 relative group"
            >
              {link.title}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-[#121212] bg-opacity-95 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setNavbarOpen(false)}
                    className="text-white text-3xl font-semibold"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
