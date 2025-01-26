import React, { useState } from "react";
import { motion } from "framer-motion";
import arrowImage from '../assets/arrow.jpeg'

const ClickHereSpiralArrow = ({ className }) => (
  <div className="relative">
    <img
      src={arrowImage}  
      alt="Spiral Arrow"
      className={`absolute z-9999 ${className}`}
      style={{
        transform: "rotate(300deg)",
      }}
    />
    <p className="absolute text-black top-1/2 left-full transform -translate-y-1/2 ml-2 font-semibold text-lg">
      Click here
    </p>
  </div>
);

const App = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const courses = [
    {
      title: "All Courses",
      description: "Courses you're powering through right now.",
      count: "23",
      color: "bg-gradient-to-br from-[#c23241] to-[#c23241]",
      textColor: "text-white",
      icons: [
        "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      ],
    },
    {
      title: "Upcoming Courses",
      description: "Exciting new courses waiting to boost your skills.",
      count: "5",
      color: "bg-gradient-to-br from-[#c23241] to-[#c23241]",
      textColor: "text-white",
      icons: [
        "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      ],
    },
    {
      title: "Ongoing Courses",
      description: "Currently happening—don't miss out on the action!",
      count: "10",
      color: "bg-gradient-to-br from-[#c23241] to-[#c23241]",
      textColor: "text-white",
      icons: [
        "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      ],
    },
  ];

  const toggleCard = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <div className="container w-full h-full">
      <div className="box m-10 p-6 relative">
        {/* Header Section */}
        <div className="text-left mb-40">
          <h1 className="text-4xl text-[#1DAO77]">
            Explore Our Classes and Master Trending Skills!
          </h1>
          <p className="text-3xl font-bold mt-2">
            Dive Into{" "}
            <span className="text-green-700">What's Hot Right Now!</span> 🔥
          </p>
        </div>

        {/* Courses Cards */}
        <div className="flex gap-6 relative">
          {courses.map((course, index) => (
            <div key={index} className="relative">
              {/* Hover Click Here Arrow */}
              {hoveredIndex === index && openIndex !== index && (
                <motion.div
                  className="absolute z-50 left-1/2 transform -translate-x-1/2"
                  style={{ top: "-80px" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ClickHereSpiralArrow className="w-20 h-20" />
                </motion.div>
              )}

              <motion.div
                className={`relative p-6 rounded-lg shadow-lg cursor-pointer overflow-hidden ${
                  openIndex === index ? course.color : "bg-gray-200"
                }`}
                onClick={() => toggleCard(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ width: "380px", height: "461px" }}
                animate={{
                  width: openIndex === index ? "650px" : "280px",
                  height: "461px",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                {/* Rest of the card content remains the same */}
                {/* Expanded Card Icons */}
                {openIndex === index && course.icons && (
                  <div className="flex pt-10 gap-10 mb-4 justify-center items-center">
                    {course.icons.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="Icon"
                        className="w-25 h-25 object-contain"
                      />
                    ))}
                  </div>
                )}

                {/* Course Title and Description */}
                <motion.div
                  className={`absolute  ${
                    openIndex === index
                      ? "right-8 bottom-6 flex flex-col gap-2 items-start"
                      : "left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  }`}
                  animate={{
                    rotate: openIndex === index ? 0 : 270,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  {/* Course Title */}
                  <p
                    className={`text-[32px] font-bold transition-colors duration-300 ${
                      openIndex === index ? course.textColor : "text-[#c23241]"
                    }`}
                  >
                    {course.title}
                  </p>

                  {/* Course Description */}
                  <p
                    className={`text-[18px] transition-colors duration-300 ${
                      openIndex === index ? course.textColor : "text-[#c23241]"
                    }`}
                  >
                    {course.description}
                  </p>
                </motion.div>

                {/* Course Count */}
                <motion.div
                  className={`absolute ${
                    openIndex === index
                      ? "left-6 bottom-6 text-white"
                      : "left-1/2 bottom-4 transform -translate-x-1/2 text-[#c23241]"
                  } text-7xl font-bold `}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  {course.count} <sup>+</sup>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;