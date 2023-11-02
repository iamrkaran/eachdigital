import React from "react";

const dataPoints = [
  {
    title: "Data Point 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Data Point 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Data Point 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  // Add more data points as needed
];

const Data = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {dataPoints.map((dataPoint, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{dataPoint.title}</h3>
                <p className="text-gray-600">{dataPoint.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;
