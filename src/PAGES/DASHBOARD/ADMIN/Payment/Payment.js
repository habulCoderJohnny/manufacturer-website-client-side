import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../SHARED/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1XLME42PJY6Y23lU6J9gf4OatsGoO48ZSiG7GIJtL1g9ouHZB9dsgtTFWDbR4CM9a7ZAYL4IuVWchf2DBK7b0W00kvewbsw7');


const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`;
    const { data: orderInfo, isLoading } = useQuery(['ordered', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-6 mx-auto">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {orderInfo.customer}</p>
                    <h2 className="card-title">Please Pay for <span className='font-bold'>{orderInfo.name}</span></h2>
                    <p>Your Product Quantity: <span className='text-orange-700 text-xl'>{orderInfo.quantity}</span></p>
                    <p className='stat-value'>Pay: ${orderInfo.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm bookingInfo={orderInfo}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
