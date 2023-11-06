import React from "react";

const profiles = [
  {
    imageUrl: "/images/profile/1.png",
  },
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
  {
    imageUrl:"/images/profile/6.png",
  }
];

const videoUrl = "/videos/extraordinary.mp4"; // Add the URL to your video here
const imageWidth = 450;
const imageHeight = 800;

const ExtraordinaryProfiles = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Extraordinary Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} >
              <img
                src={profile.imageUrl}
                alt="profile"
                width={imageWidth}
                height={imageHeight}
                style={{
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                }}
                className="w-full h-full rounded-lg mx-auto mb-4"
              />
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md"
          style={{
            width:"900px",
            height:"550px",
            padding:"16px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            margin: "50px auto",
          }}
        >
          <video
            controls
            width="100%"
            height="auto"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ExtraordinaryProfiles;
