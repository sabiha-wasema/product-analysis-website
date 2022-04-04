import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='px-4 pt-10 pb-15 mx-auto max-w-7xl md:px-2'>
            <h2 className='text-center text-3xl font-bold pb-12'>Customer Reviews(3)</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mx-20 gap-8'>
                {
                    reviews.slice(0, 3).map(review => <Card key={review.id} review={review}></Card>)
                }
            </div>

            <button className='py-2 px-3 md:mb-8 text-white mx-1 w-auto mt-2 bg-gray-800 sm:mb-0'>See All Reviews</button>

        </div>
    );
};

export default Review;