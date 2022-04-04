import React from 'react';

const Card = (props) => {
    const { picture, name, comment } = props.review;
    return (
        <div className='shadow-lg rounded-2xl w-{80px} mb-4 bg-white p-6'>
            <div className='flex-shrink-0'>
                <img src={picture} alt="" />
            </div>
            <div className='text-center font-mono my-6'>
                <h3 className='my-4'><span className='font-bold'>Name:</span> {name}</h3>
                <p className='message'><span className='font-bold'>Review:</span> {comment} </p>
            </div>
            <div className=''>
                <h3 className='font-sans font-bold'>Ratings: </h3>
            </div>

        </div>
    );
};

export default Card;