"use client";
import React from "react";
import { motion } from "framer-motion";
import Profile from "/public/assets/image/hero.jpg";
import Image from "next/image";
import { Monoton } from 'next/font/google'

const monoton = Monoton({ subsets: ['latin'] , weight : ['400'] })

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
        className="w-20 h-20 rounded-full translate-x-[70px] -translate-y-20  bg-gradient-to-t from-[#c66541] to-[#9f5524] shadow-lg rotate-12 shadow-black flex items-center justify-center text-5xl text-white font-bold"
      >
        <p className={monoton.className}>T</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.6,
        }}
        className="w-20 h-20 rounded-full translate-x-[80px] md:translate-x-20  bg-gradient-to-r from-[#6a6258] to-[#a99f8e] shadow-lg shadow-black flex items-center justify-center text-5xl text-white font-bold -translate-y-10"
      >
        <p className={monoton.className}>E</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.9,
        }}
        className="w-20 h-20 rounded-full translate-x-[90px] md:translate-x-20  bg-gradient-to-br from-[#e6d2a0] to-[#e4d7ba] shadow-lg -translate-y-[80px] -rotate-6 shadow-black flex items-center justify-center text-5xl text-white font-bold"
      >
        <p className={monoton.className}>C</p>
      </motion.div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col w-screen pt-16 mb-20 md:pt-[160px] h-fit md:pb-24">
      <div className="flex flex-col px-10 h-3/4 pt-10 md:flex-row md:justify-center md:items-center md:px-20 md:w-screen md:translate-x-10 md:-translate-y-20 ">
        <motion.div
          animate={
            {
              "--color-a": ["#c66541", "#ebd7ba", "#554f4a", "#9b8978"],
              "--color-b": ["#e6d2a0", "#9f5524", "#c29454"],
              "--color-c": ["#f2e7d6", "#e4d7ba", "#a99f8e", "#6a6258"],
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
            <button className="w-1/2 sm:w-1/4 px-1 py-1 my-5 bg-gradient-to-r from-[#9f5524] to-[#c66541] font-semibold rounded-xl md:my-7 md:h-10 text-white shadow-lg shadow-[#372F85] hover:scale-125 transition duration-1000 hover:duration-300 cursor-pointer ">
              Join Now!
            </button>
          </a>
        </motion.div>
        <div className="flex items-center justify-center w-full py-5 h-fit ">
          {/* <div className="w-64 h-64 bg-gray-200 rounded-full md:w-96 md:h-96 "></div> */}
          <Image
            src={Profile}
            alt="Profile Image"
            className="w-72 h-72 bg-gray-200 rounded-full md:w-96 md:h-96 object-cover"
          />
        </div>
      </div>
      <PernakPernik></PernakPernik>
    </div>
  );
};

export default Hero;
