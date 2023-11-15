import Image from 'next/image';
import React from 'react';

const gamesData = [
	{
		title:
			"EACH may naturally feel like a game at times but we do want to provide some In the future, even having mini-games In your Timeline where you can opt in to play with someone you've never met.",
		// description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
		<section className="bg-primary-100 py-16">
			<div className="container mx-auto ">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-right">
					Games
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
					{gamesData.map((game, index) => (
						<div key={index} className="bg-white rounded-lg shadow-md">
							<Image
								width={500}
								height={500}
								src={game.imageUrl}
								alt={game.title}
								className="w-full h-64 object-cover rounded-t-lg"
							/>
							<div className="p-4">
								<h3 className="text-2xl font-semibold mb-2">{game.title}</h3>
								{/* <p className="text-gray-600">{game.description}</p> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Games;
