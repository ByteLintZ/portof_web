"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>    
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Hello, I'm{" "}</span>
                    <br></br>
                    <div className="inline-block align-middle min-h-[1em]"> 
                        <TypeAnimation
                            sequence={[
                                "Fabian",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Mobile Developer",
                                1000,
                                "Desktop Developer",
                                1000,
                                "Game Developer",
                                1000
                            ]}n
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
                        {"{{This Website Is Still Under Construction!!}} \n"}
                      
                    </p>
                   
                    <div>
                            <button className="bg-gradient-to-br from-blue-600 via-purple-700 to-green-400 text-white font-bold py-3 px-12 sm:w-fit w-full rounded-full mr-4 hover:text-sky-200">Hire me</button>
                            <button className="text-slate-300 hover:text-white py-1 px-1 sm:w-fit w-full rounded-full border border-white mt-3 bg-gradient-to-br from-blue-600 via-purple-700 to-green-400"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button>
                    </div> 
                    </motion.div>

            </div>
            <div className="col-span-5 place-self-center mt-8 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/me.png"
                        alt="Hero Image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
