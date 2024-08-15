import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from "../../../public/images/github-icon.svg";


const Footer = () => {
  return (
    <footer className="footer border border-top-[#33353F] border-l-transparent border-r-transparent bg-[#121212] bg-opacity-90 text-white">
        <div className="container p-12 flex justify-between">
            <p className=" text-slate-600 ">
                &copy; {new Date().getFullYear()} M. Fabian Prasetyo. All rights reserved.
            </p>
            <Image
                            src={"/images/image.png"}
                            alt="Logo"
                            width={40}
                            height={40}
            />

            <Link href="https://github.com/Anthemnize/Anthemnize">
                <Image src={GithubIcon} alt="Github Icon" width={20} height={20}/>
             </Link>
        </div>
    </footer>
  )
}

export default Footer