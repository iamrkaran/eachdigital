"use client";import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const ExtraordinaryProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const extraContent = [
    {
      title: "Customization",
      description:
        "Each allows users to create unique and extraordinary profiles with customizable features and cyberpunk-inspired design elements.",
      image: "/images/extra/1.png",
    },
    {
      title: "Personalization",
      description:
        "Make your profile truly yours with a wide range of personalization options. Customize your layout, themes, and more.",
      image: "/images/extra/2.png",
    },
    {
      title: "Security",
      description:
        "We prioritize your security. Each's advanced security features keep your data safe in the cyberpunk world.",
      image: "/images/extra/3.png",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-row items-center justify-center mt-32 w-full z-[20] container"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="text-transparent text-4xl font-bold text-left bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500"
        >
          Extraordinary Profiles
        </motion.div>

        {extraContent.map((item, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="text-lg text-white font-bold mt-6 max-w-full w-auto h-auto"
          >
            <Image
              src={item.image}
              width={800}
              height={300}
              alt={item.title}
              className="rounded-xl shadow-xl w-full h-[300px] object-cover"
            />
            <h1 className="text-2xl font-bold text-primary-500 pt-2">{item.title}</h1>
            <p className="text-gray-300 opacity-50">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExtraordinaryProfiles;
