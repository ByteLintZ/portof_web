"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-36 bg-gradient-to-b from-gray-900 to-black ">
      <div className="grid grid-cols-1 sm:grid-cols-12 pl-16 items-center">
        {/* About Me Section */}
        <div className="col-span-5 place-self-center text-center sm:text-left mb-8 sm:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white mb-6 text-5xl lg:text-7xl font-extrabold drop-shadow-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Hello, I'm{" "}
              </span>
              <br />
              <div className="inline-block align-middle mr-11 text-5xl">
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

            <p className="text-gray-400 text-base sm:text-lg mb-6 lg:text-2xl lg:leading-relaxed">
              Dedicated to crafting optimized and scalable applications.
              <br />
              Ready to solve complex problems and create impactful solutions.
            </p>
          </motion.div>
        </div>

        {/* Diamond-Shaped Avatar with Pulse Effect */}
        <div className="col-span-2 place-self-center mt-8 lg:mt-0 relative pulse-container">
          <div className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] shadow-lg overflow-hidden">
            <div className="clip-diamond absolute inset-0">
              <Image
                src="/images/me.png"
                alt="Hero Image"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="pulse-effect"></div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="col-span-5 place-self-center text-center sm:text-left">
          <div>
            <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 px-12 rounded-full mr-4 hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out">
              Hire me
            </button>
            <button className="text-white border border-white py-2 px-12 rounded-full hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out">
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
