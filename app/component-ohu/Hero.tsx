"use client";
import React from "react";
import { motion } from "framer-motion";
import Profile from "/public/assets/image/profile.jpg";
import Image from "next/image";

function PernakPernik() {
  return (
    <div className="flex md:gap-24 md:px-20 h-1/4 md:pt-10 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
        className="w-20 h-20  translate-x-10 -translate-y-20  bg-gradient-to-t from-[#372F85] via-[#AF86D6] to-[#AF86D6] shadow-lg rotate-12 shadow-black flex items-center justify-center text-5xl text-white font-bold"
      >
        <p>T</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.6,
        }}
        className="w-20 h-20  translate-x-16 md:translate-x-40  bg-gradient-to-r from-[#FBB915] via-[#C9D650] to-[#6AC4B8] shadow-lg -rotate-6 shadow-black flex items-center justify-center text-5xl text-white font-bold -translate-y-10"
      >
        E
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.9,
        }}
        className="w-20 h-20  translate-x-24 md:translate-x-64  bg-gradient-to-br from-[#0A6EA2] via-[#6AC4B8] to-[#6AC4B8] shadow-lg -translate-y-44 -rotate-6 shadow-black flex items-center justify-center text-5xl text-white font-bold"
      >
        C
      </motion.div>
      <div className="hidden md:scroll-smooth md:absolute md:flex md:items-center md:justify-center md:w-full md:pt-10 md:animate-bounce md:bottom-10 ">
        <a href="#videoplayer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 cursor-pointer md:w-16 md:h-16"
          >
            {/* icon  */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col w-screen pt-20 mb-20 md:pt-32 h-fit md:pb-24">
      <div className="flex flex-col px-10 h-3/4 pt-7 md:flex-row md:justify-center md:items-center md:px-20 md:w-screen md:translate-x-10 md:-translate-y-20 ">
        <motion.div
          animate={
            {
              "--color-a": ["#FBB915", "#0A6EA2", "#6AC4B8", "#AF86D6"],
              "--color-b": ["AF86D6", "#C9D650", "#C9D650"],
              "--color-c": ["#372F85", "#f4e54d", "#FFD649", "#4455A3"],
            } as any
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col w-full md:w-5/6 "
        >
          <motion.p
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-medium md:text-3xl "
          >
            Global, Enrich, High Impact
          </motion.p>
          <motion.p
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] text-3xl font-extrabold md:text-7xl bg-clip-text text-transparent drop-shadow-lg shadow-[#372F85] w-full "
          >
            OPEN HOUSE UNIT
            <br /> TEC ITB 2023
          </motion.p>
          <motion.p
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="md:text-2xl"
          >
            Prepare to TEC your seat on the one and only technopreneur club in
            ITB.
          </motion.p>
          <a href="/dashboard">
            <button className="w-1/4 px-1 py-1 mx-3 my-5 bg-gradient-to-r from-[#FBB915] via-[#0A6EA2] to-[#6AC4B8] font-semibold rounded-xl md:my-7 md:h-10 text-white shadow-lg shadow-[#372F85] hover:scale-125 transition duration-1000 hover:duration-300 cursor-pointer ">
              Join Now!
            </button>
          </a>
        </motion.div>
        <div className="flex items-center justify-center w-full py-5 h-fit ">
          {/* <div className="w-64 h-64 bg-gray-200 rounded-full md:w-96 md:h-96 "></div> */}
          <Image
            src={Profile}
            alt="Profile Image"
            className="w-64 h-64 bg-gray-200 rounded-full md:w-96 md:h-96"
          />
        </div>
      </div>
      <PernakPernik></PernakPernik>
    </div>
  );
};

export default Hero;
