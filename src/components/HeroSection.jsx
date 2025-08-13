"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 bg-gradient-to-br from-gray-900 via-blue-900/20 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse animation-delay-3000"></div>
      </div>
      
      <div className="grid grid-cols-1  sm:grid-cols-12 items-center gap-y-8 md:gap-y-0 px-4 md:px-8 lg:px-16 relative z-10">
        {/* About Me Section */}
        <div className="col-span-1 mr-32 sm:col-span-6 md:col-span-5 text-center sm:text-left mb-8 sm:mb-0">
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

        {/* Diamond-Shaped Avatar with Intense Pulse Effect */}
        <div className="col-span-1 sm:col-span-6 md:col-span-2 flex justify-center sm:justify-end lg:justify-center">
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] diamond-container">
            <div className="clip-diamond absolute inset-0 z-10 shadow-2xl">
              <Image
                src="/images/me.jpg"
                alt="Hero Image"
                layout="fill"
                className="object-cover"
              />
            </div>
            {/* Intensified multiple diamond pulse rings */}
            <div className="diamond-pulse diamond-pulse-1"></div>
            <div className="diamond-pulse diamond-pulse-2"></div>
            <div className="diamond-pulse diamond-pulse-3"></div>
            <div className="diamond-pulse diamond-pulse-4"></div>
            <div className="diamond-pulse diamond-pulse-5"></div>
            {/* Enhanced glow effects */}
            <div className="diamond-glow"></div>
            <div className="diamond-inner-glow"></div>
            <div className="diamond-outer-glow"></div>
            {/* Floating particles */}
            <div className="floating-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
              <div className="particle particle-6"></div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="col-span-1 pl-24 sm:col-span-12 md:col-span-5 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
            <motion.button 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 text-white font-bold py-3 sm:py-4 px-10 sm:px-14 rounded-full hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Hire me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            <motion.button 
              className="text-white border-2 border-white py-3 sm:py-4 px-10 sm:px-14 rounded-full hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 group-hover:text-gray-900">Download CV</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </motion.button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .diamond-container {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
        }

        .diamond-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          border: 2px solid;
          animation: diamondPulse 2s infinite ease-in-out;
        }

        .diamond-pulse-1 {
          width: 110%;
          height: 110%;
          border-color: rgba(59, 130, 246, 0.8);
          animation-delay: 0s;
          border-width: 3px;
        }

        .diamond-pulse-2 {
          width: 120%;
          height: 120%;
          border-color: rgba(34, 197, 94, 0.6);
          animation-delay: 0.4s;
          border-width: 2px;
        }

        .diamond-pulse-3 {
          width: 130%;
          height: 130%;
          border-color: rgba(147, 51, 234, 0.5);
          animation-delay: 0.8s;
          border-width: 3px;
        }

        .diamond-pulse-4 {
          width: 140%;
          height: 140%;
          border-color: rgba(34, 211, 238, 0.4);
          animation-delay: 1.2s;
          border-width: 8px;
        }

        .diamond-pulse-5 {
          width: 150%;
          height: 150%;
          border-color: rgba(251, 146, 60, 0.3);
          animation-delay: 1.6s;
          border-width: 1px;
        }

        .diamond-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          background: radial-gradient(circle, 
            rgba(59, 130, 246, 0.2),
            rgba(34, 197, 94, 0.15),
            rgba(147, 51, 234, 0.1)
          );
          animation: diamondGlow 3s infinite alternate ease-in-out;
        }

        .diamond-inner-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 105%;
          height: 105%;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          background: linear-gradient(45deg, 
            rgba(59, 130, 246, 0.3),
            rgba(34, 197, 94, 0.2),
            rgba(147, 51, 234, 0.2)
          );
          animation: innerGlow 2s infinite alternate ease-in-out;
          filter: blur(3px);
        }

        .diamond-outer-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 160%;
          height: 160%;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          background: radial-gradient(circle, 
            transparent 40%,
            rgba(59, 130, 246, 0.1) 60%,
            rgba(147, 51, 234, 0.05) 80%,
            transparent 100%
          );
          animation: outerGlow 4s infinite ease-in-out;
          filter: blur(8px);
        }

        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }

        .particle-1 {
          top: 20%;
          left: 80%;
          animation-delay: 0s;
          animation-duration: 5s;
        }

        .particle-2 {
          top: 70%;
          left: 15%;
          animation-delay: 1s;
          animation-duration: 6s;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.8), transparent);
        }

        .particle-3 {
          top: 30%;
          left: 20%;
          animation-delay: 2s;
          animation-duration: 7s;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent);
        }

        .particle-4 {
          top: 80%;
          left: 75%;
          animation-delay: 3s;
          animation-duration: 5.5s;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent);
        }

        .particle-5 {
          top: 45%;
          left: 90%;
          animation-delay: 4s;
          animation-duration: 6.5s;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.8), transparent);
        }

        .particle-6 {
          top: 15%;
          left: 30%;
          animation-delay: 5s;
          animation-duration: 8s;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent);
        }

        @keyframes diamondPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        @keyframes diamondGlow {
          0% {
            opacity: 0.3;
            filter: blur(8px);
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0.6;
            filter: blur(15px);
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes innerGlow {
          0% {
            opacity: 0.4;
            filter: blur(2px);
          }
          100% {
            opacity: 0.7;
            filter: blur(5px);
          }
        }

        @keyframes outerGlow {
          0% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1.1) rotate(180deg);
          }
          100% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1) rotate(360deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          33% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
          66% {
            transform: translateY(5px) translateX(-15px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
        }

        /* Enhanced hover effects */
        .diamond-container:hover .diamond-pulse {
          animation-duration: 1s;
        }

        .diamond-container:hover .diamond-glow {
          opacity: 0.8;
          filter: blur(20px);
        }

        .diamond-container:hover .diamond-inner-glow {
          opacity: 1;
          filter: blur(8px);
        }

        .diamond-container:hover .diamond-outer-glow {
          opacity: 0.5;
          animation-duration: 2s;
        }

        .diamond-container:hover .particle {
          animation-duration: 3s;
        }

        .diamond-container:hover {
          filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.6));
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .particle {
            width: 3px;
            height: 3px;
          }
          
          .diamond-pulse {
            border-width: 1px;
          }
          
          .diamond-pulse-1 {
            border-width: 2px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
