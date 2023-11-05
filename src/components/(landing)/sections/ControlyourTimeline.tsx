// "use client";

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";

// const ControlyourTimeline = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       className="flex flex-row items-center justify-center mt-32 w-full z-[20] container"
//     >
//       <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
//         <motion.div
//           variants={slideInFromTop}
//           className="text-transparent font-bold text-left text-4xl  bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500"
//         >
//           Control your Timeline
//         </motion.div>

//         <motion.div
//           variants={slideInFromLeft(0.5)}
//           className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
//         ></motion.div>

//         <motion.div
//           variants={slideInFromLeft(0.8)}
//           className="text-lg text-primary-100 my-5 max-w-[600px] leading-7"
//         >
//           Each Digital allows you to take control of your timeline and customize
//           it according to your preferences. You have the power to decide what
//           content you see, when you see it, and how often you see it. Here are
//           some of the ways you can personalize your timeline:
//           <br />
//           <ul className="list-disc list-inside pl-4 text-primary-100">
//             <li className="mb-2">
//               Follow only the profiles you want to see content from.
//             </li>
//             <li className="mb-2">
//               Mute or unfollow profiles that no longer interest you.
//             </li>
//             <li className="mb-2">
//               Organize your timeline into categories or topics.
//             </li>
//             <li className="mb-2">
//               Set up a schedule for when you want to see certain types of
//               content.
//             </li>
//             <li className="mb-2">
//               Filter out specific types of content, such as ads or sponsored
//               posts.
//             </li>
//           </ul>
//         </motion.div>
//       </div>

//       <motion.div
//         variants={slideInFromRight(0.8)}
//         className="w-full h-full flex justify-center items-center "
//       >
//         <Image
//           src="/images/timeline/1.png"
//           alt="work icons"
//           height={650}
//           width={650}
//           className="object-contain rounded-lg shadow-lg backdrop-opacity-5"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ControlyourTimeline;

import React from "react";

const ControlYourTimeline = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">Control Your Timeline</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8">
            <p className="text-lg text-gray-600">
              Take charge of your digital journey. Customize your timeline and
              experience social media the way you want it. With our flexible
              settings, you `&apos;`re in control.
            </p>
            <ul className="list-disc list-inside pl-4 text-gray-600">
              <li className="mb-2">
                Follow only the profiles you want to see content from.
              </li>
              <li className="mb-2">
                Mute or unfollow profiles that no longer interest you.{" "}
              </li>
              <li className="mb-2">
                Organize your timeline into categories or topics.{" "}
              </li>{" "}
              <li className="mb-2">
                {" "}
                Set up a schedule for when you want to see certain types of
                content.
              </li>
              <li className="mb-2">
                Filter out specific types of content, such as ads or sponsored
                posts.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/timeline/1.png" // Replace with the image file path
              alt="Timeline Image"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlYourTimeline;
