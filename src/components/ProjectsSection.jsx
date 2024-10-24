"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Enterprise Single-page Website",
    description: "An example of a Enterprise Website made with NextJS",
    image: "images/web/w1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ByteLintZ/utswebz?tab=readme-ov-file",
    previewUrl: "https://utswebz.vercel.app/",
  },
  {
    id: 2,
    title: "Portofolio Website",
    description:
      "This website is actually one of the projects! Made with NextJS",
    image: "images/web/w2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ByteLintZ/portof_web",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Inclusive Goverment Website",
    description: "The project i made along with other peers for a government",
    image: "images/web/w3.png",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "https://sipendi.multitalenta.id/",
  },
  {
    id: 4,
    title: "Education Platform",
    description: "Project 4 description",
    image: "images/net.jpg",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Project 5 description",
    image: "images/net.jpg",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Fitness App",
    description: "Project 6 description",
    image: "images/net.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Educational Platform",
    description: "Project 7 description",
    image: "images/net.jpg",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Travel Booking System",
    description: "Project 8 description",
    image: "images/net.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-900 via-black to-blue-950 py-16"
    >
      <h2 className="text-center text-4xl font-bold text-white pt-16 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-10">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
