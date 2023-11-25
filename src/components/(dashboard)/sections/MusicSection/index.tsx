import React from "react";
import { ProfileDesign } from "./ProfileDesign";
import Image from "next/image";
import MusicPlayer from "./MusicPlayer";

const MusicSection = () => {
  return (
    <section className="relative h-screen">
      {/* Logo Design */}
      <div className="flex items-center justify-center p-4">
        <Image
          src="/images/logo/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Music Section */}
      <div className="h-3/4 overflow-y-auto p-4">
        {/* Add your music content here */}
        <h2 className="text-2xl font-bold mb-4">Music Section</h2>
        <MusicPlayer />
      </div>

      {/* Profile Design */}
      <div className="absolute bottom-1 w-full pl-2 pr-2">
        <ProfileDesign />
      </div>
    </section>
  );
};

export default MusicSection;
