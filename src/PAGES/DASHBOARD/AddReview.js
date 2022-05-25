import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Rating from '../SHARED/Rating';


const AddReview = () => {
    const [user,loading] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const body = event.target.body.value;
        const Ratings = event.target.rating.value;
        console.log(body,Ratings)


        const reviews = {
            name: user?.displayName,
            img: user?.photoURL,
            body: event.target.body.value,
            Ratings: event.target.rating.value
        }
        event.target.reset();
        //its time to Fetch for SENT data to server
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                //conditional displayed server:line:35
                if (data.acknowledged) {
                    toast.success('We appreciated your review')
                }
                else {
                    toast.error('Sent again')
                }
            });

    }
    return (
        <div>
          
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center my-5 text-secondary'>
            <h1 className='text-2xl lg:stat-value'>Plz Give your valuable review!</h1>
            <div className="form-control">
              <textarea type="text" name='body' required  className="textarea  mb-4" placeholder="Please tell about us"></textarea>
              <Rating></Rating>
              </div>
                <input type="number" name='rating' required
                    placeholder="Your rating" className="input input-bordered" />
                <input type="submit" value="Submit" className="btn btn-secondary " />

            </form>
        </div>
    );
};

export default AddReview;