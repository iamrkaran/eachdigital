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
    <section className="container flex-[2]" data-aos="zoom-in-up">
      <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 text-[#37517e]">Expansion Packs</h2>
      <p className="px-4 text-gray-700 text-base md:mt-14">There are Many Ways to Elevate your Profile. We Won&apos;t List Them All, but We Guarantee You Won&apos;t Go without A Need. We Aim To surpass What You&apos;d Standardly have With a Website.</p>
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
    </section>
  );
};

export default ExpansionPacks;
