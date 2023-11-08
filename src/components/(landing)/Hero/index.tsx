import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  const digitalContent = {
    title: "Each",
    description:
      "Join our next-generation social media platform and immerse yourself in a cyberpunk-inspired digital world. Connect with friends, explore futuristic cityscapes, and experience a new era of social networking.",
  };

  return ( 
    <div className="w-full h-screen bg-cover bg-center">
      <HeroContent title={digitalContent.title} description={digitalContent.description} />
    </div>
  );
};

export default Hero;
