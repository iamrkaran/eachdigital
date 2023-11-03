import Image from "next/image";
import React from "react"; 

const stickersData = [
  {
    title: "Sticker 1",
    imageUrl: "/images/games/1.jpg"
  },
  {
    title: "Sticker 2",
    imageUrl: "/images/games/2.jpg",
  },
  {
    title: "Sticker 3",
    imageUrl: "/images/games/3.jpg", 
  },
  
];

const Stickers = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">Stickers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stickersData.map((sticker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <Image
                width={500}
                height={500}
                src={sticker.imageUrl}
                alt={sticker.title}
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{sticker.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stickers;
