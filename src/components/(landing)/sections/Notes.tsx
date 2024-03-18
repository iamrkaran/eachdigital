import Image from "next/image";
import React from "react";

const Notes = () => {
  return (
    <div className="bg-[#f3f5fa] flex flex-col md:flex-row md:p-20 p-2 gap-8">
      <div className="md:flex-1 md:order-2 bg-transparent" data-aos="fade-left">
        <Image
          width={500}
          height={500}
          src="/images/tablet.each.png" // Replace with the image file path
          alt="Notes Image"
          className="w-full h-full object-cover bg-transparent rounded-none md:rounded-md"
        />
      </div>
      <div className="flex-[3] md:order-1 px-4 mb-6" data-aos="fade-right">
        <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4 text-[#37517e]">You Can Always Each It</h2>
        <p className="text-center p-2 md:p-1 overflow-hidden text-gray-700">
          Post To Your Each Timeline and Prepare For New Levels of Interaction. Users Can Go To Gift You Directly from Your Post,
          Reward Points, Go Live Directly in Response, Add Posts to their Journal, Repost with an Positive or Dislike Sentiment,
          Raise up in Support, Add To Their Story, Post a Video Reply with it, Add it onto One of their profile sceens, get a remainder of it,
          start a chatbox with it, turn it into a request challenge, or focus it for a group call. Premium users can even have their own theme
          shown above their posts on the Timeline.
        </p>
      </div>
    </div>
  );
};

export default Notes;
