"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { FaCode, FaDesktop, FaMobile, FaGlobe, FaStar } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Enterprise Single-page Website",
    description: "Modern responsive business website built with Next.js, featuring dynamic content and optimized performance.",
    image: "images/web/w1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ByteLintZ/utswebz?tab=readme-ov-file",
    previewUrl: "https://utswebz.vercel.app/",
    tech: ["Next.js", "React", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This very website! A modern portfolio showcasing my work, built with Next.js and enhanced with stunning animations.",
    image: "images/web/w2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ByteLintZ/portof_web",
    previewUrl: "/",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: 3,
    title: "Government Digital Platform",
    description: "Collaborative government website project focusing on accessibility and public service digitalization.",
    image: "images/web/w3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://sipendi.multitalenta.id/",
    tech: ["PHP", "Laravel", "MySQL"],
    featured: true,
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Comprehensive educational platform with course management, student tracking, and interactive learning modules.",
    image: "images/net.jpg",
    tag: ["All", "Desktop", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["C#", "WPF", "SQL Server"],
    featured: false,
  },
  {
    id: 5,
    title: "Smart Inventory Manager",
    description: "Desktop application for inventory tracking with barcode scanning, real-time analytics, and automated reporting.",
    image: "images/net.jpg",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["C#", "WinForms", "Entity Framework"],
    featured: false,
  },
  {
    id: 6,
    title: "FitTracker Mobile App",
    description: "Android fitness tracking app with workout plans, progress monitoring, and social features for motivation.",
    image: "images/net.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["Kotlin", "Jetpack Compose", "Room DB"],
    featured: false,
  },
  {
    id: 7,
    title: "Student Information System",
    description: "Complete desktop solution for educational institutions with grade management, attendance tracking, and reporting.",
    image: "images/net.jpg",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["C#", ".NET Framework", "MySQL"],
    featured: false,
  },
  {
    id: 8,
    title: "TravelEase Booking App",
    description: "Mobile travel companion with booking integration, itinerary planning, and offline map functionality.",
    image: "images/net.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["Kotlin", "Retrofit", "Google Maps API"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0.9 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tagIcons = {
    All: <FaCode className="mr-2" />,
    Desktop: <FaDesktop className="mr-2" />,
    Mobile: <FaMobile className="mr-2" />,
    Web: <FaGlobe className="mr-2" />,
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-900 via-black to-blue-950 py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              My Projects
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover my portfolio of innovative solutions spanning web development, 
            mobile applications, and desktop software. Each project represents a 
            unique challenge solved with modern technology and creative thinking.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Tags */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {["All", "Desktop", "Mobile", "Web"].map((tagName) => (
            <motion.button
              key={tagName}
              onClick={() => handleTagChange(tagName)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center backdrop-blur-sm border ${
                tag === tagName
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
                  : "bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:text-white"
              }`}
            >
              {tagIcons[tagName]}
              <span>{tagName}</span>
            </motion.button>
          ))}
          
          {/* Project counter */}
          <div className="ml-4 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            <span className="text-gray-300 text-sm">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && tag === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <FaStar className="text-yellow-400 text-2xl mr-3" />
              <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    tech={project.tech}
                    featured={project.featured}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-8"
        >
          {(tag !== "All" || featuredProjects.length === 0) && (
            <h3 className="text-2xl font-bold text-white mb-8">
              {tag === "All" ? "All Projects" : `${tag} Projects`}
            </h3>
          )}
          
          {tag === "All" && regularProjects.length > 0 && (
            <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(tag === "All" ? regularProjects : filteredProjects).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  tech={project.tech}
                  featured={project.featured}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category to see more projects.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
