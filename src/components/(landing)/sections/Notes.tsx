import Image from "next/image";
import React from "react";

const Notes = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-8">
          <Image
            width={500}
            height={500}
            src="/images/tablet.each.png" // Replace with the image file path
            alt="Notes Image"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">You Can Always Each It</h2>
        <p className="text-lg mb-8 text-center">
          Post To Your Each Timeline and Prepare For New Levels of Interaction. Users Can Go To Gift You Directly from Your Post, 
          Reward Points, Go Live Directly in Response, Add Posts to their Journal, Repost with an Positive or Dislike Sentiment, 
          Raise up in Support, Add To Their Story, Post a Video Reply with it, Add it onto One of their profile sceens, get a remainder of it, 
          start a chatbox with it, turn it into a request challenge, or focus it for a group call. Premium users can even have their own theme 
          shown above their posts on the Timeline.
        </p>
        
      </div>
    </section>
  );
};

export default Notes;
