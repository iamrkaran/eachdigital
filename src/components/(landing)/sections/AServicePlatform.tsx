import React from "react";

const aServiceData = [
  {
    title: "We're Here to give You What YouNeed Without All of The FluffPerformance",
    description: "",
  },
  {
    title: "Step Away From The Standard Network and See How We Can",
    description: "Find specialists to help you make and do what you need, read news in detail, get health and fitness instruction, Pay, Send meals and gifts to others, study, read, find support, apply for a grant and more.",
  },
  // Add more services as needed
];

const AServicePlatform = () => {
  return (
    <div className="py-4">
      <h2 className="text-3xl underline md:text-3xl lg:text-3xl xl:text-4xl font-extrabold mb-6 text-center text-[#37517e]" data-aos="zoom-in-down">A Service Platform</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-24 px-6">
        {aServiceData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border px-8 py-6" data-aos="zoom-in-down">
              <h3 className="text-lg font-semibold mb-2  text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AServicePlatform;
