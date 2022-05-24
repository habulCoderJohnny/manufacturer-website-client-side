import React from 'react';
import Rating from '../SHARED/Rating';
const ReviewCard = ({review}) => {
    const {name, body, img, Ratings,} = review;
    return (
        <div className="card lg:max-w-lg bg-sky-200 ">
            <div className="card-body items-center text-justify">
                <p>{body}</p>
                <div className="avatar mt-4">
                    <div className="w-32 rounded-full">
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div className='text-center'>
                    <h4 className="text-xl">{name}</h4>
                    <p className='stat-value'>{Ratings}<Rating></Rating> </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;