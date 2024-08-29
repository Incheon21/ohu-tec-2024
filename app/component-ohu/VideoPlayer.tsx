"use client";
import React from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "framer-motion";

const VideoPlayer = () => {
    let factor = 0.3;
    return (
        <div
            id="videoplayer"
            className="flex flex-col items-center justify-center w-screen"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-[80vw] gap-2"
            >
                <h1 className="text-xl min-[500px]:text-3xl lg:text-5xl font-semibold text-center">
                    Techno Entrepreneur Club
                </h1>
                <h1 className="text-lg min-[500px]:text-xl lg:text-2xl font-medium">OPEN HOUSE UNIT 2023</h1>
                <div className="px-30 ">
                    
                <iframe src="https://www.youtube.com/embed/NlIj4a213h0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-[80vw] h-[60vw] sm:w-[50vw] sm:h-[30vw]"></iframe>
                    
                </div>
            </motion.div>
        </div>
    );
};

export default VideoPlayer;
