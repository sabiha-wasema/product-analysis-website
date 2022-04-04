import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className=' px-4 pt-20 pb-24mx-auto max-w-7xl md:px-2 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gsp-4 mx-16'>
                <div className='font-mono text-4xl md:text-5xl mx-12 mt-8 text-center'>
                    <h1 className='text-5xl font-sans font-bold mb-8'>
                        <span className='title'>Explore Products</span>
                        <span className='sub-title text-5xl'> Best For You</span>
                    </h1>
                    <p className='text'>Ceramics, glassware, basketry, jewelry, metalware, furniture, textiles, clothing, and other such goods are the objects most commonly associated with the decorative arts. Many decorative arts, such as basketry or pottery, are also commonly considered to be craft, but the definitions of both terms are arbitrary.</p>
                    <button className='py-2 px-3 text-white mx-1 w-auto mt-2 text-xl bg-gray-800 sm:mb-0'>Show More</button>
                </div>
                <div className='sm:mt-8'>
                    <img className='img' src="https://cdn.katiecouric.com/I0U-318.3jGg~29547/w:1410/h:870/q:75/https://katiecouric.com/wp-content/uploads/2021/04/painting-supplies.jpg" alt=""></img>

                </div>
            </div>
        </div >

    );
};

export default Home;