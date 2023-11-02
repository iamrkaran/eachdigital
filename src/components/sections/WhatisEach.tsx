import React from "react";

const WhatIsEach = () => {
  return (
    <section className="bg-primary-100 text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">What is Each?</h2>
        <p className="text-lg mb-8">
          Each is a next-generation social media platform that lets you connect
          with friends, explore futuristic cityscapes, and experience a new era
          of social networking. Here&apos;s what makes Each stand out:{" "}
        </p>
        <ul className="text-left list-disc">
          <li className="mb-2">
            Immerse yourself in a cyberpunk-inspired digital world.
          </li>
          <li className="mb-2">Connect with friends and loved ones.</li>
          <li className="mb-2">Explore cutting-edge technologies.</li>
          <li className="mb-2">Discover new communities and experiences.</li>
          <li className="mb-2">Join us today and be part of the future!</li>
        </ul>
      </div>
    </section>
  );
};

export default WhatIsEach;
