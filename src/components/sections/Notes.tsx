"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";

const Notes = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
    ref={ref} 
    initial="hidden"
    animate={inView ? "visible" : "hidden"} 
      className="flex flex-row items-center justify-center mt-20 w-full z-[20] container"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="text-transparent text-4xl font-bold text-left bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500"
        >
          Notes
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-lg text-white font-bold mt-6 max-w-full w-auto h-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.div>
        {/* Add more notes here if needed */}
      </div> 
    </motion.div>
  );
};

export default Notes;
