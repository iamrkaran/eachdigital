import Image from "next/image";
import React from "react";

const profiles = [
  {
    imageUrl: "/images/profile/2.png",
  },
  {
    imageUrl: "/images/profile/3.png",
  },
  {
    imageUrl: "/images/profile/4.png",
  },
  {
    imageUrl: "/images/profile/5.png",
  },
];

const ExtraordinaryProfiles = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Extraordinary Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <Image
                width={500}
                height={500}
                src={profile.imageUrl}
                alt="profile"
                className="w-full h-full rounded-lg mx-auto mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraordinaryProfiles;
