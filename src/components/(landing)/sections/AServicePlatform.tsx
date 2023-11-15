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
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">A Service Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {aServiceData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AServicePlatform;
