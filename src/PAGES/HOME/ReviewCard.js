import React from 'react';
import Rating from '../SHARED/Rating';
import img2 from '../../assets/images/profile.png';
import { faQuoteLeft, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewCard = ({review}) => {
    
    const {name, body, img, Ratings,} = review;
    return (
        <div className="card lg:max-w-lg bg-sky-200 ">
            <div className="card-body items-center text-justify">


                <p> <FontAwesomeIcon icon={faQuoteLeft} className="text-secondary"></FontAwesomeIcon> {body} <FontAwesomeIcon icon={faQuoteRightAlt} className="text-secondary" ></FontAwesomeIcon></p>

                <div className="avatar mt-4">
                    <div className="w-32 rounded-full">
                        {img ? <img src={img} alt=""/>:
                        <img src={img2} alt=""/>}
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
<i class="fa-solid fa-quote-left"></i>