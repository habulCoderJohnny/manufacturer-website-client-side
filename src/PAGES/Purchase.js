import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useOrderDetail from '../Hooks/useOrderDetail';
import Rating from './SHARED/Rating';

const Purchase = () => {

    const { orderId } = useParams();
    const [order] = useOrderDetail(orderId);
    const [user, loading] = useAuthState(auth);
    const [disable, setDisable] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = event => {
        const disable = event.target.value;
        setDisable(disable);
    }

    const handleOrder = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const quantity = event.target.quantity.value;
        console.log(phone, address, quantity);

        const orders = {
            img: order.img,
            name: order.name,
            quantity,
            price: order.price*quantity,
            customerMail: user.email,
            customer: user?.displayName,
            phone,
            address
        }
        event.target.reset();
        // its time to Fetch for SENT data to server
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
                    navigate('/dashboard/order');
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
                        <h1 className='pt-4 font-bold text-secondary text-xl'>Price: ${order.price} (Per unit)</h1>
                        <label className="label">
                            <span className="label-text text-xl text-white">Minimum:{order.minQty} Qty</span>
                        </label>
                        <h1>Maximum:{order.maxQty} Qty</h1>
                        <h1 className=''>Parts description:</h1>
                        <p>{order.description}</p>
                        <Rating></Rating>
                    </div>
                </div>
            </div>

            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center my-5 text-secondary'>
                <h1 className='stat-value'>Order information</h1>
                <input value={user?.displayName || ''}
                    disabled type="text" name='name' className="input input-bordered w-full max-w-xs" />
                <input value={user?.email || ''} disabled type="email" name='email' className="input input-bordered w-full max-w-xs" />


                <input type="text" name='tools' value={order.name} disabled  className="input input-bordered w-full max-w-xs" />

                <p class="label">
                        <span class="label-text">Your minmum quantity: {order?.minQty} and Maximum:{order.maxQty}</span>
                    </p>

                <input type="number" name='quantity' onChange={handleChange} placeholder={`Min:${order?.minQty} Max:${order.maxQty}`} className="input input-success text-xl text-orange-500" />

                
                <input type="text" name='phone' required placeholder="Current Phone Number" className="input input-bordered w-full max-w-xs" />

                <input type="text" name='address' required
                    placeholder="your present Address" className="input input-bordered w-full max-w-xs" />
                <input type="submit"
                 disabled={disable < order?.minQty || disable >= order?.maxQty} className="btn btn-secondary transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" value="Order" />
            </form>
        </div>
    );
};

export default Purchase;




