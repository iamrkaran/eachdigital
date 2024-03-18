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
		<div className="rounded-xl bg-white shadow-2xl shadow-slate-500 py-14 px-10" data-aos="zoom-in-up">
			<h2 className="text-2xl font-bold mb-4 text-[#37517e]">
				Points
			</h2>
				<p className="text-gray-800 mb-2 ">
					Points Are the Spirit of EACH. They can be received through Dally
					Log-Ins, completing Request challenges, posting content, daily
					reward packs, talking with friends, making themes and stickers,
					frequently updating your profile, chatting and more. Points can also
					be used in a variety of ways. Points can be used to get themes,
					stickers, expansion packs, and even IRL rewards. You can send points
					to friends, give them out for request completions, and share them in
					other ways.
				</p>

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
	);
};

export default Points;
