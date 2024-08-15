"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C# - Advanced</li>
        <li>Kotlin - Intermediate</li>
        <li>Android Development - Intermediate</li>
        <li>Desktop Development - Advanced</li>
        <li>Unity - Beginner</li>
        <li>SQL - Intermediate</li>
        <li>Git</li>
        <li>React - Beginner</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "edu",
    content: (
      <ul className="list-disc pl-2">
        <li>Vocational School of 21 Jakarta</li>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certif",
    content: (
      <ul className="list-disc pl-2">
        <li>Winner of Student Competency Competition 2024 (LKS) </li>
        <li>Participant of Science Paper Competition 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/net.jpg" alt="Net" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg ">
            I am a dedicated C#.NET Developer with a burgeoning interest and
            growing expertise in Android development, specifically using Kotlin.
            My journey into the world of Android development is fairly new, but
            I am committed to mastering this area and integrating it with my
            strong background in C#.NET. My development skills are underpinned
            by a rigorous attention to detail and a critical approach to
            problem-solving, ensuring that my code is not only functional but
            also optimized and maintainable.
          </p>
          <div className="flex flex-row justify-start mt-8 relative">
            <motion.div
              className="absolute bottom-0 left-0 bg-blue-600"
              style={{
                width: "calc(100% / 3)",
              }}
              initial={{ x: 0 }}
              animate={{
                x: tab === "skills" ? "0%" : tab === "edu" ? "100%" : "200%",
                transition: { ease: "easeInOut", duration: 0.5 },
              }}
            />
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("edu")}
              active={tab === "edu"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certif")}
              active={tab === "certif"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
