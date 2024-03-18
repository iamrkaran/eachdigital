import { url } from 'inspector';
import Image from 'next/image';
import React from 'react';
import Videos from './Videos';

const Visions = () => {
	return (
		<div className="mx-auto bg-fixed px-6 py-24 md:p-16 flex md:flex-row flex-col gap-8 opacity-70 bg-[url('/images/games/1.jpg')]">
			<div className='md:flex-[7]' data-aos="zoom-in-up">
				<h2 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4 text-gray-300">
					Takes
				</h2>
				<p className="text-gray-300 ">
					It Seems Vertical Videos Are All The Rage, But We&apos;re
					Finding Them Limited and The Same. On EACH, Go Live at 200
					Followers, Post Videos For Your Age Group, Store Videos in
					Folders and in Your Journal Scrapbook, Launch a Request Response
					and Earn Some Points, Repost a Video to the Standard Timeline,
					And Add a Theme Border.
				</p>
			</div>
			<div className='md:flex-[4]' data-aos="zoom-in-up">
				<Videos />
			</div>
		</div>
	);
};

export default Visions;
