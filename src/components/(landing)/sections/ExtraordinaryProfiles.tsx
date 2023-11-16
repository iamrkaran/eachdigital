import Image from 'next/image';
import React from 'react';

const profiles = [
	{
		imageUrl: '/images/profile/1.png',
	},
	{
		imageUrl: '/images/profile/2.png',
	},
	{
		imageUrl: '/images/profile/3.png',
	},
	{
		imageUrl: '/images/profile/4.png',
	},
	{
		imageUrl: '/images/profile/5.png',
	},
	{
		imageUrl: '/images/profile/6.png',
	},
];

const videoUrl = '/videos/extraordinary.mp4';
const imageWidth = 370;
const imageHeight = 620;

const ExtraordinaryProfiles = () => {
	return (
		<section className="bg-primary-100 py-16">
			<style>
				{`
          .responsive-div {
            max-width: 900px;
            width: 100%;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 50px auto;
          }

          .responsive-video {
            width: 100%;
            height: auto;
          }

          .image-container {
            margin-bottom: 4px;
            margin-right: 4px; /* Adjust this value to reduce horizontal gap */
          }
        `}
			</style>
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-extrabold mb-8">
					Goodbye Outdated Profiles. Our Needs Have Changed.
				</h2>
				<p className="text-lg mb-8 text-center">
					4 Screens, Right, Left, Down, up, Come Together to form One Full
					Display Ready For All of Your Links, Content, and However You&apos;d
					Like To Express Yourself. You&apos;ll Also Have Your Posts Below and
					Space For Our Extensions and Expansion Packs. Show Everything You Got,
					and Leave the Perfect Spot For Your Friends, Business Partners, and
					Supporters to Interact and Get To Know You. The Possibilities are
					Endless. Obtain subscrlbers, and, make your profile private if you
					please. To see and get Inspired by all of the profiles out there,
					users get a feed of profiles that they can scroll through and check
					out. Who knows, maybe you&apos;ll find someone new to support solely
					off of their style.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{profiles.map((profile, index) => (
						<div key={index} className="image-container">
							<Image
								src={profile.imageUrl}
								alt="profile"
								width={imageWidth}
								height={imageHeight}
								style={{
									width: `${imageWidth}px`,
									height: `${imageHeight}px`,
								}}
								className="w-full h-full rounded-lg mx-auto"
							/>
						</div>
					))}
				</div>
				<div className="bg-white rounded-lg shadow-md responsive-div">
					<video controls className="responsive-video" src={videoUrl}>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	);
};

export default ExtraordinaryProfiles;
