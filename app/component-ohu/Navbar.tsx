"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"

type Props = {};


const Navbar: React.FC<Props> = () => {
    const [shadow, setShadow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleTECButtonClick = () => {
        if (pathname === "/dashboard") {
            router.push("/");
        } else {
            setIsMenuOpen(!isMenuOpen);
        }
    };

return (
    <nav className={`fixed h-[80px] w-full bg-[#272427] align-middle items-center flex z-20 transition-shadow duration-300 ${shadow ? "shadow-lg" : ""}`}>
        <div className="text-black font-medium w-full h-[60%] mx-8 sm:mx-20 flex justify-between">
            <div className="flex flex-col h-full items-center justify-center">
                <button onClick={handleTECButtonClick} className={`font-bold h-full bg-[#554f4a] hover:bg-[#6a6258] rounded-lg ${isMenuOpen ? "bg-[#6a6258]" : "bg-[#554f4a]"}`}>
                    <div className="text-white my-1 mx-6 flex flex-row gap-2 text-center justify-center align-middle">
                        <p>TEC</p>
                        <div className="flex items-center justify-center">
                            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
            {/* <div className="flex items-center justify-center h-full">
                <button className="rounded-lg h-full bg-[#9f5524] hover:scale-[1.03] transition-all duration-100 text-white font-semibold">
                    <p className="mx-4 my-1">Join Now!</p>
                </button>
            </div> */}
        </div>
        <div className={`absolute shadow-md bg-white rounded-md translate-x-10 translate-y-[160px] ${isMenuOpen ? "flex" : "hidden"}`}>
            <div className="flex flex-row w-auto">
                <div className="flex flex-col w-auto ">
                    <button className="text-left hover:bg-gray-200">
                        <a href="#videoplayer">
                        <div className="mx-4 border-b-2 border-black">
                            <h1 className="font-bold text-lg mt-3">Teaser</h1>
                            <p className="mb-3">Open House Unit TEC 2024</p>
                        </div>
                        </a>
                    </button>
                    <button className="text-left hover:bg-gray-200">
                        <a href="#kegiatan">
                        <div className="mx-4 border-b-2 border-black">
                            <h1 className="font-bold text-lg mt-3">What we do?</h1>
                            <p className="mb-3">TEC Past Activities</p>
                        </div>
                        </a>
                    </button>
                    <button className="text-left hover:bg-gray-200">
                        <a href="#footer">
                        <div className="mx-4">
                            <h1 className="font-bold text-lg mt-3">TEC SocMed</h1>
                            <p className="mb-3">Check our Social Media on footer</p>
                        </div>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </nav>
)
}

export default Navbar;