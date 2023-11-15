import React from "react";

const videoData = [
  {
    title: "Add themes to your video posts, Pin other channels you support, add a section for requests, send your video In for review for our Each TV page and more.",
    description: "",
    videoUrl: "https://www.youtube.com/embed/your-video-url-1", // Replace with your video URL
  },
  // {
  //   title: "Video 2",
  //   description: "Explore our platform features in this video tour.",
  //   videoUrl: "https://www.youtube.com/embed/your-video-url-2", // Replace with your video URL
  // },
  // Add more video data here
];

const Videos = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videoData.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div className="relative">
                <iframe
                  title={video.title}
                  src={video.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-64 rounded-t-lg"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
