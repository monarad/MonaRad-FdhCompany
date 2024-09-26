// import React, { useEffect, useState } from "react";
// import img1 from '../images/one.JPG'; // مسیر تصویر اول
// import img2 from "../images/two.JPG"; // مسیر تصویر دوم
// import { Link } from "react-router-dom";
// import navbar from "./Navbar"
// function Products() {
//    const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     img1,
//     img2,
    
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//     }
//   return (
//     <>
//      <div className="relative w-full max-w-md mx-auto">
//       <div className="overflow-hidden rounded-lg shadow-lg">
//         <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div key={index} className="min-w-full p-4 text-center bg-gray-200">
//               {slide}
//             </div>
//           ))}
//         </div>
//       </div>
//       <button onClick={prevSlide} className="absolute left-0 z-10 p-2 text-white bg-blue-500 rounded-l">
//         Prev
//       </button>
//       <button onClick={nextSlide} className="absolute right-0 z-10 p-2 text-white bg-blue-500 rounded-r">
//         Next
//       </button>
//     </div>
//     </>
//   );
// }

// export default Products


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import Navbar from "./Navbar"; // توجه کنید که نام کامپوننت باید با حروف بزرگ شروع شود
import img1 from '../images/one.JPG'; // مسیر تصویر اول
import img2 from '../images/two.JPG'; // مسیر تصویر دوم


function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // آرایه‌ای از تصاویر
  const slides = [
    img1,
    img2,
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative w-full max-w-md mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: ` translateX(-${currentIndex * 100}%) ` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full p-4 text-center bg-gray-200"
              >
                <img
                  src={slide}
                  alt={`Slide  ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 text-white bg-blue-500 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 text-white bg-blue-500 rounded-r"
        >
          Next
        </button>
      </div>

     
    </>
  );
}

export default Products;
