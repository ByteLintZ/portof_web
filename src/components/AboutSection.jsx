"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLaptopCode, FaGraduationCap, FaCertificate } from "react-icons/fa";
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
      color: "bg-blue-500",
      content: (
        <ul className="list-none space-y-2">
          <li>
            <FaLaptopCode className="inline-block mr-2" /> C# - Advanced
          </li>
          <li>
            <FaLaptopCode className="inline-block mr-2" /> Kotlin - Intermediate
          </li>
          <li>
            <FaLaptopCode className="inline-block mr-2" /> Android Development -
            Intermediate
          </li>
          <li>
            <FaLaptopCode className="inline-block mr-2" /> Desktop Development -
            Advanced
          </li>
          <li>
            <FaLaptopCode className="inline-block mr-2" /> Unity - Beginner
          </li>
          <li>
            <FaLaptopCode className="inline-block mr-2" /> SQL - Advanced
          </li>
          <li>
            <FaLaptopCode className="inline-block mr-2" /> Git - Experienced
          </li>
          <li>
            <FaLaptopCode className="inline-block mr-2" /> React - Beginner
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "edu",
      color: "bg-green-500",
      content: (
        <ul className="list-none space-y-2">
          <li>
            <FaGraduationCap className="inline-block mr-2" />
            <Link
              target="_blank"
              href="https://www.smkn21jakarta.sch.id/"
              className="text-white hover:underline"
            >
              Vocational School of 21 Jakarta
            </Link>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certif",
      color: "bg-red-500",
      content: (
        <ul className="list-none space-y-2">
          <li>
            <FaCertificate className="inline-block mr-2" />
            <button
              onClick={() => openModal("certificate1")}
              className="text-white hover:underline"
            >
              Winner of Student Competency Competition 2024 (LKS)
            </button>
          </li>
          <li>
            <FaCertificate className="inline-block mr-2" />
            <button
              onClick={() => openModal("certificate2")}
              className="text-white hover:underline"
            >
              Participant of Youth Pledge Museum Debate Competition 2024
            </button>
          </li>
          <li>
            <FaCertificate className="inline-block mr-2" />
            <button
              onClick={() => openModal("certificate3")}
              className="text-white hover:underline"
            >
              Participant of Science Paper Competition 2023
            </button>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section
      className="text-white bg-gradient-to-b from-black to-gray-900 py-16"
      id="about"
    >
      <div className="container mx-auto md:grid md:grid-cols-2 gap-12 items-center px-6 text-white">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-0"
        >
          <Image
            src="/images/net.jpg"
            alt="Net"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
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
            I’m a Junior Software Developer with experience in desktop, Android,
            and web development. As a student, I’ve completed multiple
            real-world projects, focusing on C# desktop applications, Android
            apps using Kotlin, and web development with ASP.NET and Laravel.
            <br />
            <br />
            In desktop development, I use C# to build efficient and
            user-friendly applications. On the web, I specialize in React for
            front-end work and ASP.NET and Laravel for back-end systems. For
            Android, I develop apps in Kotlin, following modern architecture
            patterns.
            <br />
            <br />
            Notably, I won the LKS IT Software competition and worked on a
            website for a local government agency, solidifying my technical
            skills. I’m now focused on sharpening my communication skills while
            continuing to deepen my technical expertise to become a well-rounded
            T-shaped professional.
          </span>

          {/* Tab Navigation */}
          <div className="flex border-b-2 border-gray-700 mb-8 relative">
            {TAB_DATA.map((tabItem) => (
              <motion.button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 hover:bg-gray-700 transition-transform transform ${
                  tab === tabItem.id ? "border-b-4 border-blue-500" : ""
                }`}
              >
                {tabItem.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg shadow-lg ${
                TAB_DATA.find((t) => t.id === tab).color
              }`}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Certificate Modal"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="bg-white p-8 rounded-xl shadow-2xl relative max-w-3xl mx-auto"
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>
          <div className="flex justify-center">
            <Image
              src={modalImage}
              alt="Certificate"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Modal>
    </section>
  );
};

export default AboutSection;
