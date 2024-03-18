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
		<div className="rounded-xl bg-white shadow-2xl shadow-slate-500 py-14 px-10" data-aos="zoom-in-up">
			<h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-4 text-[#37517e]">
				Rewards
			</h2>
			<p className="text-gray-800 font-semibold mb-2 ">
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
	);
};

export default Rewards;
