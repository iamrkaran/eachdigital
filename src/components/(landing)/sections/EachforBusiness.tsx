// import React, { useState } from "react";

// type PricingData = {
//   [key: string]: {
//     monthly: number;
//     quarterly: number;
//     yearly: number;
//   };
// };

// const EachforBusiness: React.FC = () => {
//   const [selectedTier, setSelectedTier] = useState("basic");
//   const [selectedBillingCycle, setSelectedBillingCycle] = useState("monthly");

//   // Define your pricing details here
//   const pricingData: PricingData = {
//     basic: {
//       monthly: 19.99,
//       quarterly: 49.99,
//       yearly: 199.99,
//     },
//     pro: {
//       monthly: 29.99,
//       quarterly: 79.99,
//       yearly: 299.99,
//     },
//     advanced: {
//       monthly: 49.99,
//       quarterly: 129.99,
//       yearly: 499.99,
//     },
//   };

//   const handleTierChange = (tier: string) => {
//     setSelectedTier(tier);
//   };

//   const handleBillingCycleChange = (billingCycle: string) => {
//     setSelectedBillingCycle(billingCycle);
//   };

//   return (
//     <section className="bg-primary-100 py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">Each for Business</h2>
//         <div className="mb-4">
//           <div className="flex justify-center space-x-4">
//             <button
//               className={`${
//                 selectedTier === "basic" ? "bg-blue-500" : "bg-gray-300"
//               } px-4 py-2 rounded-full`}
//               onClick={() => handleTierChange("basic")}
//             >
//               Basic
//             </button>
//             <button
//               className={`${
//                 selectedTier === "pro" ? "bg-blue-500" : "bg-gray-300"
//               } px-4 py-2 rounded-full`}
//               onClick={() => handleTierChange("pro")}
//             >
//               Pro
//             </button>
//             <button
//               className={`${
//                 selectedTier === "advanced" ? "bg-blue-500" : "bg-gray-300"
//               } px-4 py-2 rounded-full`}
//               onClick={() => handleTierChange("advanced")}
//             >
//               Advanced
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <button
//             className={`${
//               selectedBillingCycle === "monthly" ? "bg-blue-500" : "bg-gray-300"
//             } px-4 py-2 rounded-full`}
//             onClick={() => handleBillingCycleChange("monthly")}
//           >
//             Monthly
//           </button>
//           <button
//             className={`${
//               selectedBillingCycle === "quarterly" ? "bg-blue-500" : "bg-gray-300"
//             } px-4 py-2 rounded-full`}
//             onClick={() => handleBillingCycleChange("quarterly")}
//           >
//             Quarterly
//           </button>
//           <button
//             className={`${
//               selectedBillingCycle === "yearly" ? "bg-blue-500" : "bg-gray-300"
//             } px-4 py-2 rounded-full`}
//             onClick={() => handleBillingCycleChange("yearly")}
//           >
//             Yearly
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//           {Object.keys(pricingData).map((tier) => (
//             <div
//               key={tier}
//               className={`${
//                 selectedTier === tier ? "border border-blue-500" : "border"
//               } p-4 rounded-lg shadow-md`}
//             >
//               <h3 className="text-xl font-semibold">{tier} Plan</h3>
//               <p className="text-gray-600">
//                 {selectedBillingCycle === "monthly"
//                   ? `Monthly Price: $${pricingData[selectedTier].monthly}`
//                   : selectedBillingCycle === "quarterly"
//                   ? `Quarterly Price: $${pricingData[selectedTier].quarterly}`
//                   : `Yearly Price: $${pricingData[selectedTier].yearly}`
//                 }
//               </p>
//               <p className="text-gray-600">Plan Details:</p>
//               <ul className="list-disc pl-4">
//                 <li>Feature 1</li>
//                 <li>Feature 2</li>
//                 <li>Feature 3</li>
//                 {/* Add more features as needed */}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";

const aServiceData = [
  {
    title: "There are many ways to use EACH to promote your business. You can set your profile up to display new campaigns In an engaging format you cant do elsewhere. You can also update your dedicated followers automatically. Show Off Your Own Stickers and Themes, Launch Your own request adventures,and give other Incentives.",
    description: "",
  },
  // {
  //   title: "Step Away From The Standard Network and See How We Can",
  //   description: "Find specialists to help you make and do what you need, read news in detail, get health and fitness instruction, Pay, Send meals and gifts to others, study, read, find support, apply for a grant and more.",
  // },
  // Add more services as needed
];

const EachforBusiness = () => {
  return (
    <div className="flex-1" data-aos="zoom-in-up">
      <h2 className="text-3xl font-bold capitalize relative text-[#37517e] text-center">Each for Business</h2>
      <div className="p-4">
        {aServiceData.map((service, index) => (
          <div key={index} className="">
            <h3 className="overflow-hidden text-gray-600">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachforBusiness;
