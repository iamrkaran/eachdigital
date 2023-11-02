import Image from "next/image";
import React from "react";

const EachforKidsPage: React.FC = () => {
  return (
    <div className="bg-primary-100 min-h-screen p-4">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-4xl text-dark font-bold">Welcome to EachforKids</h1>
      </header>

      <main className="mt-8 max-w-4xl mx-auto p-4 bg-white rounded shadow-lg">
        <section className="mb-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-700">
            We are dedicated to providing a safe and educational online space
            for kids.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-bold">What Kids Can Do Here</h2>
          <p className="text-gray-700">
            - Learn and explore new topics
            <br />
            - Connect with friends
            <br />
            - Share creative projects
            <br />
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-bold">Images</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 p-2">
              <Image
                width={500}
                height={500}
                src="/images/extra/1.png"
                alt="Image 1"
                className="rounded-lg"
              />
            </div>
            <div className="w-1/2 p-2">
              <Image
                width={500}
                height={500}
                src="/images/extra/2.png"
                alt="Image 2"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EachforKidsPage;
