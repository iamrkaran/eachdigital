import React from "react";

const ShowYourStyle = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">Show Your Style</h2>
        <p className="text-lg text-gray-600 mb-8">
          Express yourself and showcase your unique style on our platform. Here are some ways to do it:
        </p>
        <ul className="list-disc pl-4">
          <li className="text-gray-600 mb-2">
            Create a personalized profile that represents your personality.
          </li>
          <li className="text-gray-600 mb-2">
            Share your interests, hobbies, and passions with the world.
          </li>
          <li className="text-gray-600 mb-2">
            Customize your timeline to curate the content you love.
          </li>
          <li className="text-gray-600 mb-2">
            Interact with like-minded individuals and build your own community.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ShowYourStyle;
