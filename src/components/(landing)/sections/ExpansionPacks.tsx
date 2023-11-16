import Image from "next/image";
import React from "react";

const expansionPacks = [
  {
    title: "Pack 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue.",
    imageUrl: "/images/extra/1.png",
  },
  {
    title: "Pack 2",
    description:
      "Sed gravida leo nec nisi efficitur, quis efficitur arcu facilisis. Aenean eget.",
    imageUrl: "/images/extra/1.png",
  },
  {
    title: "Pack 3",
    description:
      "Sed gravida leo nec nisi efficitur, quis efficitur arcu facilisis. Aenean eget.",
    imageUrl: "/images/extra/1.png",
  },
];

const ExpansionPacks = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">Expansion Packs</h2>
      <p className="md:w-1/2">There are Many Ways to Elevate your Profile. We Won&apos;t List Them All, but We Guarantee You Won&apos;t Go without A Need. We Aim To surpass What You&apos;d Standardly have With a Website.</p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expansionPacks.map((pack, index) => (
            <div key={index} className="flex items-center">
              <div className="md:order-2">
                <Image
                  width={500}
                  height={500}
                  src={pack.imageUrl}
                  alt={pack.title}
                  className="w-64 h-64 rounded-lg object-cover"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-semibold mb-2">{pack.title}</h3>
                <p className="text-gray-600">{pack.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ExpansionPacks;
