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
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mx-20 gap-8 mt-8'>
                {
                    reviews.slice(4, 10).map(review => <Card key={review.id} review={review}></Card>)
                }
            </div>
        </div >
    );
};

export default Review;