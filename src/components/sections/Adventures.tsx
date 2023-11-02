import React from "react";

const Adventures = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">Adventures</h2>
        <p className="text-lg text-gray-600 mb-8">
          Embark on exciting adventures and explore new horizons with our platform.  what you can do:
        </p>
        <ul className="list-disc pl-4">
          <li className="text-gray-600 mb-2">
            Discover new content and engage with like-minded adventurers.
          </li>
          <li className="text-gray-600 mb-2">
            Share your own adventures, travel stories, and experiences.
          </li>
          <li className="text-gray-600 mb-2">
            Connect with fellow travelers and plan your next journey together.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Adventures;
