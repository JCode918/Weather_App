import React from 'react';

const LeftAside = () => {
	return (
		<div>
			<div className='flex-col'>
				<div className='flex'>
					<button className='bg-light-gray text-white mt-10 m-10 rounded-md p-3'>
						Search for Places
					</button>
				</div>
				{/*Image */}
				<div className='flex flex-col justify-start items-center h-full'>
					<img
						src='https://www.metaweather.com/static/img/weather/sn.svg'
						alt='snow'
						width='150px'
						height='150px'
					/>
                    <p className="mt-5">
                        <span className='font-extrabold text-white text-7xl'>26</span>
                        <span className="text-gray-400 text-3xl">°C</span>
                    </p>
                    <p className="text-gray-50 font-bold mt-10 text-3xl">Clear</p>
                    <p className="text-gray-50 font-bold mt-10 text-2xl">Today</p>
                    <div className='flex justify-center items-center'>
                        <p className="text-gray-700 font-bold text-2xl mt-12">
                            <i className="material-icons">location_on</i> London
                        </p>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default LeftAside;
