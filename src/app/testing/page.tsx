"use client";

import React, { useState } from "react";

const Page = () => {
  const [color, setColor] = useState("bg-red-500"); // Start with red
  const [startButton, setstartButton] = useState(false);

  const differentColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-black",
    "bg-purple-500",
    "bg-red-500", // Adding red back to complete the cycle
  ];

  const startColor = () => {
    setstartButton(true);

    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % differentColors.length;
      setColor(differentColors[currentIndex]);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className={`w-20 h-20 rounded-lg transition-colors duration-1000 ${color}`}
        ></div>

        <button onClick={startColor}>{startButton ? "start" : "stop"}</button>
      </div>
    </>
  );
};

export default Page;
