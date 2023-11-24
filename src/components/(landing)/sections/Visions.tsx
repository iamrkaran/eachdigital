import Image from 'next/image';
import React from 'react';

const Visions = () => {
	return (
		<section className="bg-primary-100 py-16">
			 
			<div className="container mx-auto text-center">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">
					Takes
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					<div className="bg-white rounded-lg shadow-md">
						<Image
							width={500}
							height={500}
							src="/images/games/1.jpg"
							alt="Vision 1"
							className="w-full h-auto object-cover rounded-t-lg"
						/>
						<div className="p-4">
							<p className="text-lg text-gray-600">
								It Seems Vertical Videos Are All The Rage, But We&apos;re
								Finding Them Limited and The Same. On EACH, Go Live at 200
								Followers, Post Videos For Your Age Group, Store Videos in
								Folders and in Your Journal Scrapbook, Launch a Request Response
								and Earn Some Points, Repost a Video to the Standard Timeline,
								And Add a Theme Border.
							</p>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Visions;
