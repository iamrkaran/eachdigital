import React from "react";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }:CardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg w-64">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
