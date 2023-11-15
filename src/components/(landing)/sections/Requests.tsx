import React from 'react';

const requestsData = [
	{
		title: 'Request 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Request 2',
		description:
			'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Request 3',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
	},
	// Add more requests as needed
];

const Requests = () => {
	return (
		<section className="bg-primary-100 py-16">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 ">
					Request
				</h2>
				<div className="grid w-1/2">
					<p className="p-4 bg-white rounded-lg shadow-md text-2xl font-semibold mb-2 ">
						Make any type of request you&apos;d Iike to see someone do or perform. If
						you think they did it right, they can get rewarded. Famour or not,
						evreyone can benefit by completing these quests. We will even post
						our own. They may be something you can do at home, outdoors, or
						something you&apos;ll need to find in your environment. We will have
						mk[pl[]|ixed reality requests so that you can see your rewards. You might
						find an avatar, or pieces to style one. You might get rare badges
						you can&apos;t get from using the platform, or you may just get a chest of
						points. Maybe there will be rare themes, maybe there will be a
						sticker pack only you will have.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Requests;
