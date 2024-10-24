import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-[#1F2937] to-[#111827] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} M. Fabian Prasetyo. All rights
            reserved.
          </p>
        </div>

        {/* Center Section - Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <Link
            href="https://github.com/ByteLintZ/ByteLintZ"
            className="hover:scale-110 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://www.instagram.com/biann25z"
            className="hover:scale-110 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yourusername"
            className="hover:scale-110 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-8 border-t border-gray-700 text-center py-4">
        <p className="text-gray-500 text-sm">
          Designed and developed with 💙 by M. Fabian Prasetyo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
