import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useOrderDetail from '../Hooks/useOrderDetail';
import Rating from './SHARED/Rating';

const Purchase = () => {

    const { orderId } = useParams();
    const [order] = useOrderDetail(orderId);
    const [user, loading] = useAuthState(auth);
    ;

    const handleBooking = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        console.log(phone, address);

        const orders = {
            img: order.img,
            name: order.name,
            price: order.price,
            // quantity:
            customerMail: user.email,
            customer: user?.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        event.target.reset();
        //its time to Fetch for SENT data to server
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                //conditional displayed server:line:35
                if (data.success) {
                    toast.success('Congrats! Order Add to card!')
                }
                else {
                    toast.error('today this equipment not available try tomorrow!')
                }
            });

    }

    return (
        <div>
            <div className="hero min-h-screen bg-[#0c55b6]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={order.img} className="max-w-sm rounded-lg shadow-2xl mr-8 mask mask-decagon" alt="" />
                    <div className='text-xl text-white pl-8'>
                        <h1 className="text-5xl underline">{order.name}</h1>
                        <h1 className='pt-4 font-bold text-secondary text-xl'>Price: ${order.price}</h1>
                        <label className="label">
                            <span className="label-text text-xl text-white">Minimum:{order.minQty} Qty</span>
                        </label>
                        <input type="number" placeholder="Quantity" className="input input-success text-xl text-orange-500" />
                        <h1>Maximum:{order.maxQty} Qty</h1>
                        <h1 className=''>Parts description:</h1>
                        <p>{order.description}</p>
                        <Rating></Rating>
                    </div>
                </div>
            </div>

            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center my-5 text-secondary'>
                <h1 className='stat-value'>Order information</h1>
                <input value={user?.displayName || ''}
                    disabled type="text" name='name' className="input input-bordered w-full max-w-xs" />
                <input value={user?.email || ''} disabled type="email" name='email' className="input input-bordered w-full max-w-xs" />

                <input type="text" name='phone' required placeholder="Current Phone Number" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='address' required
                    placeholder="your present Address" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Order" className="btn btn-secondary " />
            </form>
        </div>
    );
};

export default Purchase;




