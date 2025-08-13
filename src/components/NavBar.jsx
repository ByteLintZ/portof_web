"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", path: "/", icon: <FaHome className="w-5 h-5" /> },
  { title: "About", path: "#about", icon: <FaUser className="w-5 h-5" /> },
  { title: "Projects", path: "#projects", icon: <FaProjectDiagram className="w-5 h-5" /> },
  { title: "Contact", path: "#contact", icon: <FaEnvelope className="w-5 h-5" /> },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/ByteLintZ", icon: <FaGithub className="w-5 h-5" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/fabian-prasetyo-ba1097314/", icon: <FaLinkedin className="w-5 h-5" /> },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = offset + 100;

      for (const section of sections) {
        const element = document.getElementById(section === "home" ? "" : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        {/* Enhanced Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <Image
              src="/images/image.png"
              alt="Logo"
              width={45}
              height={45}
              className="cursor-pointer relative z-10 rounded-full border-2 border-white/20"
            />
          </motion.div>
          <div className="flex flex-col">
            <motion.span 
              className="text-white text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              ByteLint
            </motion.span>
            <span className="text-gray-400 text-xs font-medium">Developer</span>
          </div>
        </Link>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="text-white focus:outline-none p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            <motion.div
              animate={{ rotate: navbarOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {!navbarOpen ? (
                <Bars3Icon className="w-6 h-6" />
              ) : (
                <XMarkIcon className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.title.toLowerCase() || 
                           (link.path === "/" && activeSection === "home");
            
            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  href={link.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-blue-500/30 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10 border-transparent hover:border-white/20"
                  }`}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
                
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ x: "-50%" }}
                  />
                )}
              </motion.div>
            );
          })}
          
          {/* Social Links */}
          <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/20">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-gray-900/98 backdrop-blur-xl flex flex-col items-center justify-center border-b border-white/10"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Mobile menu close button */}
            <motion.button
              onClick={() => setNavbarOpen(false)}
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>

            {/* Mobile menu content */}
            <div className="flex flex-col items-center space-y-8">
              {/* Logo in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3 mb-8"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-50"></div>
                  <Image
                    src="/images/image.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="relative z-10 rounded-full border-2 border-white/20"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    ByteLint
                  </span>
                  <span className="text-gray-400 text-sm font-medium">Developer</span>
                </div>
              </motion.div>

              {/* Navigation links */}
              <ul className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setNavbarOpen(false)}
                      className="flex items-center space-x-4 text-white text-2xl font-semibold px-6 py-3 rounded-full hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300"
                    >
                      <span className="text-blue-400">{link.icon}</span>
                      <span>{link.title}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social links in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-6 mt-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm border border-white/10"
                    title={social.name}
                  >
                    <div className="w-6 h-6">{social.icon}</div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
