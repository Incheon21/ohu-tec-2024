'use client'
import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai"

function RegistrationInfo() {
    function Stars() {
        return (
            <>
                <div className="absolute left-5 rotate-6">
                    <AiFillStar></AiFillStar>
                </div>
                <div className="absolute -translate-y-28 left-20 rotate-6">
                    <AiFillStar></AiFillStar>
                </div>
                <div className="absolute right-7 translate-y-36 rotate-6">
                    <AiFillStar></AiFillStar>
                </div>
                <div className="absolute rotate-45 right-72 translate-y-44">
                    <AiFillStar></AiFillStar>
                </div>
                <div className="absolute right-80 -translate-y-44 rotate-12">
                    <AiFillStar></AiFillStar>
                </div>
            </>
        )
    }
    return (
        <div

            id="registration" className="flex items-center justify-center w-screen md:h-[45vw] my-5 bg-gradient-to-r from-[#372F85] via-[#0A6EA2] to-[#FFD649] text-white">
            <div className="flex flex-col items-center justify-center w-5/6  mt-10 mb-10 md:flex-row  md:max-w-[90vw] ">
                {/* <Image
                    src="https://divedigital.id/wp-content/uploads/2023/04/Ai-Hoshino-1.jpg"
                    alt="Photo by Drew Beamer"
                    width={10}
                    height={10}
                    className="object-cover w-32 h-32 rounded-full"
                /> */}

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <h3 className="mt-3 text-lg px-7 sm:text-2xl md:text-3xl lg:text-4xl">More Than <span className="font-bold">670+ registrants</span> last year</h3>
                    <div className="text-sm text-justify px-7 mt-7 sm:text-lg sm:px-14 md:text-xl lg:text-2xl">
                        {/* <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur doloremque eaque obcaecati, ad alias sequi laudantium amet adipisci aliquam incidunt, quisquam, repudiandae saepe corporis."</p>
                        <b>-- David Dewanto</b> */}
                    </div>
                </motion.div>
            </div>
             <Stars></Stars>
        </div>
    );
}

export default RegistrationInfo;