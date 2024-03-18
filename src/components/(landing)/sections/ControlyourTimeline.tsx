import Image from "next/image";
import React from "react";

const ControlYourTimeline = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center text-[#37517e]" data-aos="zoom-in">
          Control Your Timeline
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2" data-aos="fade-right">
            <Image
              sizes="100vw"
              width={500}
              height={300} 
              src="/images/timeline/1.png"
              alt="Timeline Image"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 pl-8 pt-4" data-aos="fade-left">
            <p className="text-lg text-gray-700">
              EACH is free-flow and One-day Endless. Create your network the way
              that you please. Rearrange the sizing of your feeds. Choose what
              you need on your side Bars, and figure out what&apos;s your
              priority. Join a social landscape that chases the convenience of
              your browser. Easily discuss with a chatbot before you post, have
              quick access to your messages, and have access to multiple content
              forms. You can always select what you do and don&apos;t want to
              see at a given time. Not in mood to come across photos? No
              problem. Want to see photos only? Of course!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlYourTimeline;
