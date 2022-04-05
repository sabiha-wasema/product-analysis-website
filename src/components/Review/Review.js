import React from 'react';
import Card from '../Card/Card';
import CustomHook from '../CustomHook/CustomHook';

const Review = () => {
    const [reviews, setReviews] = CustomHook();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mx-20 gap-8 mt-8'>
                {
                    reviews.slice(4, 8).map(review => <Card key={review.id} review={review}></Card>)
                }
            </div>
        </div >
    );
};

export default Review;