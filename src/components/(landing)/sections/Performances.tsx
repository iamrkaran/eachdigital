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
		<div className="px-4" data-aos="zoom-in-up">
			<h2 className="text-3xl font-bold capitalize relative text-[#37517e] text-center">
				Performances
			</h2>
			<p className="text-center p-2 md:p-1 overflow-hidden text-gray-700">
				We Want to Support Artists, Creators, and other EACH users as much
				as possible. We will regularly give chances to be rewarded for
				showing off what you do.
			</p>
		</div>
	);
};

export default Performances;
