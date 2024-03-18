import Image from 'next/image';
import React from 'react';

const gamesData = [
	{
		title:
			"EACH may naturally feel like a game at times but we do want to provide some In the future, even having mini-games In your Timeline where you can opt in to play with someone you've never met.",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		imageUrl: '/images/games/1.jpg',
	},
	{
		title: "EACH may naturally feel like a game at times but we do want to provide some In the future, even having mini-games In your Timeline where you can opt in to play with someone you've never met.",
		description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/images/games/2.jpg",
	},
	// {
	//   title: "Game 3",
	//   description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
	//   imageUrl: "/images/games/3.jpg",
	// },{
	//   title: "Game 4",
	//   description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	//   imageUrl: "/images/games/2.jpg",
	// },
];

const Games = () => {
	return ( 
		<div className="py-16">
			<h2 className="text-3xl underline md:text-4xl lg:text-4xl xl:text-4xl font-extrabold mb-6 text-center text-[#37517e]" data-aos="zoom-in">
				Games
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-24 px-6">
				{gamesData.map((game, index) => (
					<div key={index} className="bg-white rounded-md shadow-md" data-aos="zoom-in-down">
						<Image
							width={500}
							height={500}
							src={game.imageUrl}
							alt={game.title}
							className="w-full h-64 object-cover rounded-t-md"
						/>
						<div className="p-4">
							<h3 className="text-base text-gray-800 font- mb-2">{game.title}</h3>
							{/* <p className="text-gray-600">{game.description}</p> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Games;
