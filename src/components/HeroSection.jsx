"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 bg-gradient-to-b from-gray-900 to-black">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-y-8 md:gap-y-0 px-4 md:px-8 lg:px-16">
        {/* About Me Section */}
        <div className="col-span-1 sm:col-span-6 md:col-span-5 text-center sm:text-left mb-8 sm:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold drop-shadow-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Hello, I'm{" "}
              </span>
              <br />
              <div className="inline-block align-middle text-4xl sm:text-5xl lg:text-6xl">
                <TypeAnimation
                  sequence={[
                    "Fabian",
                    1000,
                    "Software Developer",
                    1000,
                    "Desktop Developer",
                    1000,
                    "Android Developer",
                    1000,
                    "Web Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
                />
              </div>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-2xl mb-6 lg:leading-relaxed">
              Dedicated to crafting optimized and scalable applications.
              <br />
              Ready to solve complex problems and create impactful solutions.
            </p>
          </motion.div>
        </div>

        {/* Diamond-Shaped Avatar with Pulse Effect */}
        <div className="col-span-1 sm:col-span-6 md:col-span-2 flex justify-center sm:justify-end lg:justify-center">
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] shadow-lg overflow-hidden pulse-container">
            <div className="clip-diamond absolute inset-0">
              <Image
                src="/images/me.jpg"
                alt="Hero Image"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="pulse-effect"></div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="col-span-1 sm:col-span-12 md:col-span-5 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-2 sm:py-3 px-8 sm:px-12 rounded-full hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out">
              Hire me
            </button>
            <button className="text-white border border-white py-2 sm:py-2 px-8 sm:px-12 rounded-full hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .pulse-container {
          position: relative;
        }

        .pulse-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid cyan;
          border-radius: 50%;
          opacity: 0.5;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
