import Image from "next/image";
import React from "react";

const Visions = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Our Visions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            <Image
              width={500} 
              height={500}
              src="/images/games/1.jpg"
              alt="Vision 1"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                Our vision is to create a unique and immersive digital world.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <Image
              width={500}
              height={500}
              src="/images/games/1.jpg"
              alt="Vision 2"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                We aim to connect people and communities through technology.
              </p>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Visions;
