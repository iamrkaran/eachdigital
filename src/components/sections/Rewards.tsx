import React from "react";

const rewardsData = [
  {
    title: "Reward 1",
    description: "Earn points for engaging with our platform.",
  },
  {
    title: "Reward 2",
    description: "Redeem points for exclusive discounts and offers.",
  },
  {
    title: "Reward 3",
    description: "Unlock special badges and recognition for your contributions.",
  },
  // Add more rewards as needed
];

const Rewards = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewardsData.map((reward, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{reward.title}</h3>
                <p className="text-gray-600">{reward.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
