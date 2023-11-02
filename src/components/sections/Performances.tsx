import React from "react";

const performanceData = [
  {
    title: "Performance Metric 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Performance Metric 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Performance Metric 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  // Add more performance metrics as needed
];

const Performances = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">Performances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {performanceData.map((performance, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{performance.title}</h3>
                <p className="text-gray-600">{performance.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performances;
