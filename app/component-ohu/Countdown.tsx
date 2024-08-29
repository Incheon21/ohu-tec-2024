"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const [countSecond, setcountSecond] = useState(0);
    const [countMinute, setcountMinute] = useState(0);
    const [countHour, setcountHour] = useState(0);
    const [countDay, setcountDay] = useState(0);

    function countDown() {
        const targetDate = new Date("September 2, 2023 13:00:00").getTime();
        const currDate = new Date().getTime();
        const gap = targetDate - currDate;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        setcountSecond(textSecond);
        setcountMinute(textMinute);
        setcountHour(textHour);
        setcountDay(textDay);

    }

    useEffect(() => {
        // exit early when we reach 0

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            countDown();
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [countSecond]);

    return (
        <div suppressHydrationWarning id="countdown" className="scroll-smooth h-[80vw] w-screen flex items-center justify-center flex-col gap-10 md:h-[30vw] md:-translate-y-20 md:gap-16 my-24">
            <h1 className="text-4xl font-semibold md:text-6xl">Countdown</h1>
            <div className="flex items-center justify-center gap-4 text-4xl md:gap-8 ">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 + 0.3 }}
                    className="grid p-2 text-center shadow-xl rounded-2xl md:text-8xl"
                >
                    <p>{countDay}</p>
                    <p className="text-xs md:text-2xl">Days</p>
                </motion.div>
                <p className="">:</p>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.3 }}
                    className="grid p-2 text-center shadow-xl rounded-2xl md:text-8xl"
                >
                    <p>{countHour}</p>
                    <p className="text-xs md:text-2xl">Hours</p>
                </motion.div>
                <p>:</p>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + 0.3 }}
                    className="grid p-2 text-center shadow-xl rounded-2xl md:text-8xl"
                >
                    <p>{countMinute}</p>
                    <p className="text-xs md:text-2xl">Minutes</p>
                </motion.div>
                <p>:</p>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + 0.3 }}
                    className="grid p-2 text-center shadow-xl rounded-2xl md:text-8xl"
                >
                    <p>{countSecond}</p>
                    <p className="text-xs md:text-2xl">Seconds</p>
                </motion.div>
            </div>
            <h2 className="w-full text-4xl font-semibold text-center md:text-6xl">Till Registration Open</h2>
        </div>
    );
};

export default Countdown;
