import './App.css';
import Layout from './components/Layout/Layout';
import React from 'react';
import LeftAside from './components/LeftAside/LeftAside';
import RightAside from './components/RighAside/RightAside';

const App = () => {
	return (
		<div>
			<Layout>
				<div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10'>
					<aside className='col-span-1 lg:col-span-2 bg-blue-lighter h-full md:bg-cloud-image md:bg-bottom lg:bg-cloud-image bg-no-repeat bg-bottom bg-contain'>
						<LeftAside />
					</aside>
					{/*Right Aside */}
					<aside className='col-span-1 lg:col-span-4 bg-blue-dark h-full'>
						<RightAside />
					</aside>
				</div>
			</Layout>
		</div>
	);
};

export default App;
