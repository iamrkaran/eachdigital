import React from "react";

const GetTheContentYouNeed = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">Get the Content You Need</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8">
            <p className="text-lg text-gray-600">
              Discover a vast library of content that suits your interests.
              Whether its the latest tech updates, creative design inspiration,
              or exciting social discussions, we have got you covered.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* You can include an image here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheContentYouNeed;
