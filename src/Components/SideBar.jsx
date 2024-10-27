"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser, FaCode } from "react-icons/fa6";
import { PiGraduationCapLight } from "react-icons/pi";
import { MdHomeRepairService } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import Image from "next/image";

export default function SideBar() {
    const path = usePathname();
    return (
        <div className='hidden lg:w-[415px] lg:h-screen lg:flex bg-[#444444]'>

            {/* -----------------------------------------Menu start here--------------------------------------- */}
            <div className='w-[100px] bg-[#222222]'>
                <Link href="/" className={`border-b-[.5px] border-gray-500 py-5 space-y-2 flex flex-col justify-center items-center hover:text-[#6DD0E9] ${path == '/' ? 'text-[#6DD0E9]' : 'text-white'}`}>
                    <FaRegUser className="text-3xl" />
                    <h2 className="text-sm">About Me</h2>
                </Link>

                <Link href="/services" className={`border-b-[.5px] border-gray-500 py-5 space-y-2 flex flex-col justify-center items-center hover:text-[#6DD0E9] ${path == '/services' ? 'text-[#6DD0E9]' : 'text-white'}`}>
                    <FaCode className="text-3xl" />
                    <h2 className="text-sm">Services</h2>
                </Link>

                <Link href="/resume" className={`border-b-[.5px] border-gray-500 py-5 space-y-2 flex flex-col justify-center items-center hover:text-[#6DD0E9] ${path == '/resume' ? 'text-[#6DD0E9]' : 'text-white'}`}>
                    <PiGraduationCapLight  className="text-3xl" />
                    <h2 className="text-sm">Resume</h2>
                </Link>

                <Link href="/portfolio" className={`border-b-[.5px] border-gray-500 py-5 space-y-2 flex flex-col justify-center items-center hover:text-[#6DD0E9] ${path == '/portfolio' ? 'text-[#6DD0E9]' : 'text-white'}`}>
                    <MdHomeRepairService  className="text-3xl" />
                    <h2 className="text-sm">Portfolio</h2>
                </Link>

                <Link href="/contact" className={`border-b-[.5px] border-gray-500 py-5 space-y-2 flex flex-col justify-center items-center hover:text-[#6DD0E9] ${path == '/contact' ? 'text-[#6DD0E9]' : 'text-white'}`}>
                    <CiMail  className="text-3xl" />
                    <h2 className="text-sm">Contact</h2>
                </Link>
            </div>

            {/* -----------------------------------------Menu end here--------------------------------------- */}


            <div className='w-full p-10 text-white flex flex-col justify-start items-center'>
                <div className="flex justify-center items-center">
                    <Image src="https://iili.io/2BqJhuf.png" alt="Golam Sarwar" height={150} width={150} className="rounded-[100px] bg-white"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mt-5">Golam Sarwar</h2>
                    <h4 className="text-[18px] mt-2">Full stack Developer</h4>
                </div>

            </div>
        </div>
    )
}
