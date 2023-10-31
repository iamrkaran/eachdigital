"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-row items-center justify-center mt-32 w-full z-[20] container "
    >
      <div className="h-full w-full flex justify-center flex-col gap-5  m-auto text-center ">
        <motion.div
          variants={slideInFromTop}
          className="flex flex-row items-center justify-center gap-2"
        >
          <SparklesIcon className="h-6 w-6 text-dark" />
          <span className="text-2xl font-bold text-dark">Each Digital</span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex  flex-col gap-6 mt-6 text-6xl font-bold text-dark max-w-full w-auto h-auto"
        >
          <span>
            Experience the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">
              {" "}
              Cyberpunk{" "}
            </span>
            Revolution
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-full w-auto h-auto"
        >
          Join our next-generation social media platform and immerse yourself in
          a cyberpunk-inspired digital world. Connect with friends, explore
          futuristic cityscapes, and experience a new era of social networking.
        </motion.p>
        <motion.div
        variants={slideInFromRight(1)}
        className="flex  items-center justify-center gap-5"
      >
        <motion.a
          variants={slideInFromLeft(1)}
          href="/signup"
          className="py-2 bg-gradient-to-r from-secondary-500 to-primary-500 text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full h-auto"
        >
          Get Started
        </motion.a>
      </motion.div>
      </div> 
      
    </motion.div>
  );
};

export default HeroContent;
