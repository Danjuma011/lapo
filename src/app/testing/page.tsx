// import React, { useState } from "react";

// const Page = () => {
//   const [color, setcolor] = useState();

//   const differentColors = {

//   blue : "bg-blue-500",
//   green : "bg-green-500",
//   orange : "bg-orange-500",
//   black : "bg-black-500",
//   purple : "bg-purple-500",
//   }

//   for(let i = differentColors; i <= differentColors.length; i++; ) {

//     if(i === differentColors.blue){
//         setInterval(()=>{
// differentColors.green
//         }, 3000)
//     }

//   }
//   return (
//     <div className=" flex justify-center items-center ">
//       <div className="bg-red-500 w-20 h-20 "></div>
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [color, setColor] = useState("bg-red-500"); // Start with red

  const differentColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-black",
    "bg-purple-500",
    "bg-red-500", // Adding red back to complete the cycle
  ];

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % differentColors.length;
      setColor(differentColors[currentIndex]);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`w-20 h-20 rounded-lg transition-colors duration-1000 ${color}`}
      ></div>

      <div>click</div>
    </div>
  );
};

export default Page;
