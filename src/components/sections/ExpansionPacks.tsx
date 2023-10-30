"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

type ExpansionPackCardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
};

const ExpansionPackCard = ({
  title,
  description,
  image,
  index,
}: ExpansionPackCardProps) => {
  return (
    <motion.div
      key={index}
      variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
      className="flex flex-col items-center  gap-4"
    >
      <div className="text-transparent  text-4xl font-bold text-left bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">
        <Image
          src={image}
          width={800}
          height={300}
          alt={title}
          className="rounded-lg"
        />
      </div>
      <motion.div
        variants={slideInFromTop}
        className="text-lg text-white font-bold mt-6 max-w-full w-auto h-auto"
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

const ExpansionPacks = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const expansionPacks = [
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
    {
      title: "Customization",
      description:
        "Each allows users to create unique and extraordinary profiles with customizable features and cyberpunk-inspired design elements.",
      image: "/images/extra/1.png",
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
          Expansion Packs
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {expansionPacks.map((item, index) => (
            <ExpansionPackCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpansionPacks;
