import React from 'react';

const About = () => {
    return (
        <section className='px-4 pt-10 mx-auto max-w-6xl md:px-3 pb-10'>
            <div className='flex flrx-col justify-center items-center'>
                <div >
                    <h1 className='text-xl text-center md:text-3xl font-sans font-bold'>
                        Contact Us
                    </h1>
                    <button className='py-2 px-3 text-white mx-1 w-auto mt-2 bg-gray-800 sm:mb-0'>Dhaka Address</button>
                    <button className='py-2 px-3 text-white mx-1 w-auto mt-2 bg-gray-800 sm:mb-0'>Chittagong Address</button>
                </div>
                <div>
                    <img src="" alt=""></img>
                </div>

            </div>
        </section>
    );
};

export default About;