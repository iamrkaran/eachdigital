import Image from "next/image";
import React from "react";

const ChatBoxes = () => {
  return (
    <div className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 text-[#37517e] text-center" data-aos="zoom-in">
          Chat and Channels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md" data-aos="fade-right">
            <Image
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={300}
              src="/images/chat/chat.png"
              alt="Chat Screen 1"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                Chat with friends and share your latest updates.
              </p>
            </div>
          </div>
 
          <div className="bg-white rounded-lg shadow-md" data-aos="fade-left">
            <Image
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={300}
              src="/images/chat/messenger.png"
              alt="Chat Screen 2"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                Stay connected with loved ones wherever you are.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white rounded-lg shadow-md" data-aos="zoom-in" data-aos-offset="500">
              <Image
                sizes="100vw"
                width={500}
                height={300}
                src="/images/chat/5.png"
                alt="Chat Screen 3"
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-lg text-gray-600">
                  Share moments and experiences in real-time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md" data-aos="zoom-in" data-aos-offset="500">
              <Image
                sizes="100vw"
                width={500}
                height={100}
                src="/images/chat/6.png"
                alt="Chat Screen 4"
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-lg text-gray-600">
                  Collaborate with colleagues and discuss projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxes;
