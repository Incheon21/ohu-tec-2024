"use client";
import React, { useState, useEffect } from "react";
import { Monoton } from 'next/font/google'

const monoton = Monoton({ subsets: ['latin'] , weight : ['400'] })

function Popup() {
  const [toggle, setToggle] = useState(false);

  // Automatically close popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setToggle(true);  // Close the popup after 3 seconds
    }, 2000);

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={
        toggle
          ? `hidden`
          : `flex fixed w-screen h-screen justify-center items-center z-50 transition-all overflow-hidden backdrop-blur-3xl`
      }
    >
      <div className={monoton.className}>
        <h1 className="text-xl md:text-4xl">Are your ready to join us?</h1>
      </div>
    </div>
  );
}

export default Popup;
