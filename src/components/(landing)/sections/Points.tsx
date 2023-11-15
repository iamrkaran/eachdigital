import React from 'react';

const pointsData = [
	{
		title: 'Point 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Point 2',
		description:
			'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Point 3',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
	},
	// Add more points as needed
];

const Points = () => {
	return (
		<section className="bg-primary-100 py-16">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-center">
					Points
				</h2>
				<div className="grid center mx-auto w-1/2">
					<p className="p-4 bg-white rounded-lg shadow-md text-2xl font-semibold mb-2 ">
						Points Are the Spirit of EACH. They can be received through Dally
						Log-Ins, completing Request challenges, posting content, daily
						reward packs, talking with friends, making themes and stickers,
						frequently updating your profile, chatting and more. Points can also
						be used in a variety of ways. Points can be used to get themes,
						stickers, expansion packs, and even IRL rewards. You can send points
						to friends, give them out for request completions, and share them in
						other ways.
					</p>
				</div>

				{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{pointsData.map((point, index) => (
						<div key={index} className="bg-white rounded-lg shadow-md">
							<div className="p-4">
								<h3 className="text-2xl font-semibold mb-2">{point.title}</h3>
								<p className="text-gray-600">{point.description}</p>
							</div>
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default Points;
