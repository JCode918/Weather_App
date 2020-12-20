import React from 'react';

const Card = () => {
	return (
		<div className='bg-blue-lighter p-6 rounded-lg'>
			<div className='flex-col'>
				<p className='text-center'>12-10-2020</p>
				<div className='flex justify-center items-center'>
					<img
						src='https://www.metaweather.com/static/img/weather/lc.svg'
						width='50px'
						height='50px'
						alt='weather_img'
					/>
				</div>
			</div>
			<div className='flex justify-between'>
				<span>22</span>
				<span>26</span>
			</div>
		</div>
	);
};

export default Card;
