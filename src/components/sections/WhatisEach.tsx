import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";


const sectionContent = [
  {
    title: "What is Each?",
    description: "Experience the Cyberpunk Revolution",
  },
  {
    title: "Notes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Extraordinary Profiles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const WhatisEach = () => {
  const ref = useRef(null);
  const inView = useInView(ref); 

  return (
    <motion.div 
      ref={ref} 
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
      variants={slideInFromLeft(0.5)}
      className="container mx-auto mt-32"
    >
      <div className="flex flex-col gap-5 text-start">
        <div className="flex flex-row items-center gap-2">
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">
            What is Each?
          </span>
        </div>

        {sectionContent.map((section, index) => (
          <div
            key={index}
            className="text-lg font-bold text-white max-w-full"
          >
            {section.description}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhatisEach;
