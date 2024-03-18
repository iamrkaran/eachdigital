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
		<div className="py-10">
			<div className='flex flex-col items-center space-y-4 px-5 md:px-10'>
				<h2 className="md:text-3xl text-xl font-bold capitalize text-[#37517e]" data-aos="zoom-in-up" data-aos-offset="100">
					Goodbye Outdated Profiles. Our Needs Have Changed.
				</h2>
				<p className='items-center w-[90%] pb-4' data-aos="fade-up" data-aos-offset="100">
					4 Screens, Right, Left, Down, up, Come Together to form One Full Display Ready For All of Your Links, Content, and However You&apos;d Like To Express Yourself. You&apos;ll Also Have Your Posts Below and Space For Our Extensions and Expansion Packs. Show Everything You Got, and Leave the Perfect Spot For Your Friends, Business Partners, and Supporters to Interact and Get To Know You. The Possibilities are Endless. Obtain subscrlbers, and, make your profile private if you please. To see and get Inspired by all of the profiles out there, users get a feed of profiles that they can scroll through and check out. Who knows, maybe you&apos;ll find someone new to support solely off of their style.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-5 md:px-10">
					{profiles.map((profile, index) => (
						<div key={index} className="image-container" data-aos="zoom-in-down">
							<Image
								src={profile.imageUrl}
								alt="profile"
								width={imageWidth}
								height={imageHeight}
								style={{
									width: `${imageWidth}px`,
									height: `${imageHeight}px`,
								}}
								className={`w-full h-full rounded-lg mx-auto ${index % 2 === 0 ? "animate-fade-right animate-ease-in" : "animate-fade-left animate-ease-in"}`}
							/>
						</div>
					))}
				</div>

				<div className='md:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full flex justify-center rounded-md'>
					<div className="w-full md:w-[80%] h-52 md:h-full md:py-5 flex justify-center">
						<video controls className="responsive-video w-full md:w-2/3 cursor-pointer" data-aos="zoom-in">
							<source src={videoUrl} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</div>

	);
};

export default ExtraordinaryProfiles;
