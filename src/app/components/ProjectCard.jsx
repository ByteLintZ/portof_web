import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  // Helper function to generate a random color for the aura effect
  const getRandomColor = () => {
    const colors = ["#ff6b6b", "#42e695", "#ff6ec4", "#f093fb", "#00c6ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [auraColor, setAuraColor] = useState(getRandomColor());

  const handleMouseEnter = () => {
    setAuraColor(getRandomColor());
  };

  return (
    <div
      className="relative group transform transition-transform duration-500 hover:scale-105"
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            target="_blank"
            href={gitUrl}
            className="h-14 w-14 border-2 mr-3 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* Aura Effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 20px 10px ${auraColor}`,
        }}
      ></div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
