"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLaptopCode, FaGraduationCap, FaCertificate, FaCode, FaMobile, FaDesktop, FaDatabase, FaGamepad } from "react-icons/fa";
import { SiKotlin, SiCsharp, SiUnity, SiReact, SiGit } from "react-icons/si";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleTabChange = (id) => {
    setTab(id);
  };

  const openModal = (certificateId) => {
    let imageUrl = "";
    switch (certificateId) {
      case "certificate1":
        imageUrl = "/images/certif/certificate1.png";
        break;
      case "certificate2":
        imageUrl = "/images/certif/certificate2.png";
        break;
      case "certificate3":
        imageUrl = "/images/certif/certificate3.png";
        break;
      case "nan":
        imageUrl = "/images/nan.png";
        break;
      default:
        break;
    }
    setModalImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      icon: <FaCode className="inline-block mr-2" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiCsharp className="text-purple-400 text-xl mr-2" />
                <span>C#</span>
              </div>
              <span className="text-sm bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-5/6"></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiKotlin className="text-orange-400 text-xl mr-2" />
                <span>Kotlin</span>
              </div>
              <span className="text-sm bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-5/6"></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaMobile className="text-green-400 text-xl mr-2" />
                <span>Android Dev</span>
              </div>
              <span className="text-sm bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-5/6"></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaDesktop className="text-blue-400 text-xl mr-2" />
                <span>Desktop Dev</span>
              </div>
              <span className="text-sm bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-5/6"></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiUnity className="text-gray-400 text-xl mr-2" />
                <span>Unity</span>
              </div>
              <span className="text-sm bg-red-500/20 text-red-300 px-2 py-1 rounded-full">Beginner</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-red-400 to-pink-500 h-2 rounded-full w-1/4"></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaDatabase className="text-yellow-400 text-xl mr-2" />
                <span>SQL</span>
              </div>
              <span className="text-sm bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-5/6"></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiGit className="text-orange-500 text-xl mr-2" />
                <span>Git</span>
              </div>
              <span className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Experienced</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-4/5"></div>
            </div>
          </motion.div>

          <motion.div 
            className="skill-item bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SiReact className="text-cyan-400 text-xl mr-2" />
                <span>React</span>
              </div>
              <span className="text-sm bg-red-500/20 text-red-300 px-2 py-1 rounded-full">Beginner</span>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-red-400 to-pink-500 h-2 rounded-full w-1/4"></div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "edu",
      color: "bg-gradient-to-br from-green-600 to-emerald-800",
      icon: <FaGraduationCap className="inline-block mr-2" />,
      content: (
        <div className="space-y-4">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-green-400 text-xl" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white">Vocational School</h3>
                <Link
                  target="_blank"
                  href="https://www.smkn21jakarta.sch.id/"
                  className="text-green-400 hover:text-green-300 hover:underline transition-colors duration-200"
                >
                  SMK Negeri 21 Jakarta
                </Link>
                <p className="text-gray-400 text-sm mt-1">Software Engineering Program</p>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
   {
  title: "Certifications",
  id: "certif",
  color: "bg-gradient-to-br from-purple-600 to-pink-800",
  icon: <FaCertificate className="inline-block mr-2" />,
  content: (
    <div className="space-y-4">
      
      <motion.div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02, x: 10 }}
        onClick={() => openModal("nan")}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <FaCertificate className="text-yellow-400 text-xl" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">
              🏆 Student Competency Competition (LKS) 2025
            </h3>
            <p className="text-gray-400 text-sm">
              1st Winner — IT Software Solutions for Business Development
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02, x: 10 }}
        onClick={() => openModal("certificate1")}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <FaCertificate className="text-yellow-400 text-xl" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">
              🏆 Student Competency Competition (LKS) 2024
            </h3>
            <p className="text-gray-400 text-sm">
              2nd Winner — IT Software Solutions for Business Development
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02, x: 10 }}
        onClick={() => openModal("nan")}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <FaCertificate className="text-yellow-400 text-xl" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">
              🏆 Indonesian Game Week 2025 (Game Jam Competition)
            </h3>
            <p className="text-gray-400 text-sm">
              2nd Winner — Game Development
            </p>
          </div>
        </div>
      </motion.div>

<motion.div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02, x: 10 }}
        onClick={() => openModal("nan")}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <FaCertificate className="text-yellow-400 text-xl" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">
              Goverment Website Project Award
            </h3>
            <p className="text-gray-400 text-sm">
              Web Development - Local Government Agency
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02, x: 10 }}
        onClick={() => openModal("certificate2")}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <FaCertificate className="text-blue-400 text-xl" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white hover:text-blue-300 transition-colors">
              🗣️ Youth Pledge Museum Debate Competition 2024
            </h3>
            <p className="text-gray-400 text-sm">
              Participant - National Debate & History
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02, x: 10 }}
        onClick={() => openModal("certificate3")}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <FaCertificate className="text-purple-400 text-xl" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white hover:text-purple-300 transition-colors">
              📄 Science Paper Competition 2023
            </h3>
            <p className="text-gray-400 text-sm">
              Participant - Research & Scientific Writing
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  ),
}

  ];

  return (
    <section
      className="text-white bg-gradient-to-br from-gray-900 via-blue-900/10 to-black py-16 relative overflow-hidden"
      id="about"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto md:grid md:grid-cols-2 gap-12 items-center px-6 text-white relative z-10">
        {/* Left Column: Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-0"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <Image
                src="/images/iconA.png"
                alt="Professional Photo"
                width={400}
                height={400}
                className="rounded-full shadow-2xl relative z-10 border-4 border-white/10 group-hover:scale-105 transition-transform duration-300"
              />
              {/* Floating tech icons around image */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                  className="absolute top-4 right-4 text-blue-400 text-2xl"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiCsharp />
                </motion.div>
                <motion.div 
                  className="absolute bottom-8 left-8 text-orange-400 text-2xl"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiKotlin />
                </motion.div>
                <motion.div 
                  className="absolute top-16 left-4 text-cyan-400 text-2xl"
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiReact />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 right-8 text-yellow-400 text-2xl"
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaDatabase />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text and Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl font-extrabold text-white mb-6">About Me</h2>
          <span className="text-lg leading-relaxed mb-8">
            I help businesses solve real operational problems with mobile-first software. My core focus is Android: building Kotlin apps with modern architecture (MVVM/Unidirectional, Jetpack Compose, Coroutines, Hilt) that support field operations, automation, and data-driven workflows. I complement mobile solutions with C# desktop apps for internal tooling and admin interfaces, and lightweight web services (React front-ends or ASP.NET/Laravel backends) when integrations are required.
            <br />
            <br />
            I’m the winner of the LKS IT Software competition 2025 and have delivered production projects such as a website for Local Government Agency and Android apps for small businesses. I prioritize measurable impact: reducing manual work, cutting process time, and improving accuracy so your team can do more with less.
            <br />
            <br />
            If you need a developer who speaks both code and business, someone who translates user pain into working features and helps prioritize what actually moves the needle - let’s talk.
          </span>

          {/* Enhanced Tab Navigation */}
          <div className="flex border-b-2 border-gray-700/50 mb-8 relative bg-white/5 rounded-t-lg backdrop-blur-sm">
            {TAB_DATA.map((tabItem) => (
              <motion.button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-4 flex items-center space-x-2 hover:bg-white/10 transition-all duration-300 font-medium rounded-t-lg relative ${
                  tab === tabItem.id 
                    ? "bg-white/15 border-b-4 border-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tabItem.icon}
                <span>{tabItem.title}</span>
                {tab === tabItem.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Enhanced Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-lg shadow-2xl backdrop-blur-sm border border-white/10 ${
                TAB_DATA.find((t) => t.id === tab).color
              }`}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  shouldCloseOnOverlayClick={true}
  contentLabel="Certificate Modal"
  className="fixed inset-0 flex items-center justify-center p-6"
  overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm"
  style={{
    overlay: { zIndex: 9999 },
    content: { zIndex: 10000 },
  }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: 50 }}
    className="relative w-full max-w-5xl mx-auto px-10 py-12 bg-gray-900 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-xl"
    style={{ zIndex: 10001 }}
  >
    {/* Close Button */}
    <motion.button
      onClick={closeModal}
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full text-3xl font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
    >
      &times;
    </motion.button>

    {/* Certificate Image */}
    <div className="flex justify-center">
      <div className="relative">
        <Image
          src={modalImage}
          alt="Certificate"
          width={700}
          height={500}
          className="rounded-xl border border-white/20 shadow-2xl"
        />
        {/* Gradient Glow Effect */}
        <div className="absolute -inset-1 rounded-xl blur opacity-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      </div>
    </div>
  </motion.div>
</Modal>

    </section>
  );
};

export default AboutSection;
