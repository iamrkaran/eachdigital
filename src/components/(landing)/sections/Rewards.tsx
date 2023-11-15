import React from 'react';

const rewardsData = [
	{
		title: 'Reward 1',
		description: 'Earn points for engaging with our platform.',
	},
	{
		title: 'Reward 2',
		description: 'Redeem points for exclusive discounts and offers.',
	},
	{
		title: 'Reward 3',
		description:
			'Unlock special badges and recognition for your contributions.',
	},
	// Add more rewards as needed
];

const Rewards = () => {
	return (
		<section className="bg-primary-100 py-16">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-center">
					Rewards
				</h2>
				<div className="grid center mx-auto w-1/2">
					<p className="p-4 bg-white rounded-lg shadow-md text-2xl font-semibold mb-2 ">
						Each Is filled with rewards. Most commonly, users get rewards for
						their profiles or for their messages and posts. They may get IRL
						Items or even a cash reward, coupons, and the like. If users rank
						high In the annual Each Talent Show, good luck guessing what the
						rewards will be! Additionally, users will be placed on teams during
						sign up on the platform. Whichever team has the most points at the
						end of the year will get special rewards for the entirety of the
						year following.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Rewards;
