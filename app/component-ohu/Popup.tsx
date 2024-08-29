"use client";
import React, { useState } from "react";


function Popup() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div
      className={
        toggle
          ? `hidden`
          : `flex fixed w-screen h-screen justify-center items-center z-50 transition-all overflow-hidden backdrop-blur-3xl`
      }
    >
      <div>
        <button onClick={toggleButton} className="shadow-2xl text-white bg-black rounded-xl w-40">
            Hi, Click Me!
        </button>
      </div>
    </div>
  );
}
export default Popup;
