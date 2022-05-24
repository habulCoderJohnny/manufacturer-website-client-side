import React, { useEffect, useState } from 'react';

import ReviewCard from './ReviewCard';
const Review = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);

    return (
        <section className='my-28' id='review'>
            <div className='flex justify-between'>
                <div>
                 <h2 className="text-4xl underline decoration-3 decoration-primary">What Our Client Says</h2>
                </div>
                <div>
                    <img src='https://png.pngitem.com/pimgs/s/504-5044190_get-quote-filled-icon-quote-commas-png-transparent.png' className="w-24 lg:w-[192px]" alt="quote"/>
                </div>
            </div>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                  reviews.map(review => <ReviewCard key={review._id}review={review}></ReviewCard>)
                }

            </div>
        </section>
    );
};

export default Review;