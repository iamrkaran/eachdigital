// "use client"
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";

// const HeroContent = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       classNameName="flex flex-col items-center justify-center h-screen"
//     >
//       <motion.div
//         variants={slideInFromTop}
//         classNameName="text-center text-8xl font-bold text-primary-100"
//       >
//         <span>
//           Welcome To
//           <span classNameName="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">
//             {" "}
//             Each{" "}
//           </span>
//         </span>
//       </motion.div>

//       <motion.p variants={slideInFromTop} classNameName="mt-6 mb-6 text-xl text-primary-100/70 text-center">
//         Join our next-generation social media platform and immerse yourself in
//         a cyberpunk-inspired digital world. Connect with friends, explore
//         futuristic cityscapes, and experience a new era of social networking.
//       </motion.p>

//       <motion.div
//         variants={slideInFromRight(1)}
//         classNameName="flex  items-center justify-center gap-5 "
//       >
//         <motion.a
//           variants={slideInFromLeft(1)}
//           href="/signup"
//           classNameName="p-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-center text-white cursor-pointer rounded-lg max-w-[400px] w-full h-auto"
//         >
//           Get Started
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HeroContent;

import React from 'react';

type Props = {
	title: string;
	description: string;
};

const HeroContent = (props: Props) => {
	return (
		<section className="flex justify-center items-center mt-16 h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl xl:text-8xl sm:text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-black">
            {props.title}
          </h1>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="flex-grow inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-500 to-primary  hover:opacity-70 focus:ring-4 focus:ring-primary-500 shadow-md"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="flex-grow inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-300/70 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 shadow-md"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              The Need to Know
            </a>
          </div>
        </div>
      </section>
    
	);
};

export default HeroContent;
