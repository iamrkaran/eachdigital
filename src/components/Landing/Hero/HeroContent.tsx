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
		<div>
			<section className="flex justify-center items-center mt-16 h-screen">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
					{/* <a
						href="#"
						className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
						role="alert"
					>
						<span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
							New
						</span>{' '}
						<span className="text-sm font-medium">
							Next genration dashboard is coming soon
						</span>
						<svg
							className="ml-2 w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
					</a> */}
					<h1 className="mb-4 text-4xl xl:text-8xl sm:text-3xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-primary-100">
						{props.title}
					</h1>
					<div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
						<a
							href="#"
							className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-secondary-500 to-primary-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
							className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
										stroke="#ffffff"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
							</svg>
							{/* <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                
              </svg> */}
							The Need to Know
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeroContent;
