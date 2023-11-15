import React from 'react';

const performanceData = [
	{
		title: 'We want ',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Performance Metric 2',
		description:
			'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'Performance Metric 3',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
	},
	// Add more performance metrics as needed
];

const Performances = () => {
	return (
		<section className="bg-primary-100 py-16">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 ">
					Performances
				</h2>
				<div className="grid w-1/2">
					<p className="p-4 bg-white rounded-lg shadow-md text-2xl font-semibold mb-2 ">
						We Want to Support Artists, Creators, and other EACH users as much
						as possible. We will regularly give chances to be rewarded for
						showing off what you do.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Performances;
