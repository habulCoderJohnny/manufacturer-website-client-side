import React from 'react';
import { useNavigate } from 'react-router-dom';

const Equipment = ({equipment}) => {
    const {_id, img, name,price, minQty,maxQty} = equipment;
    const navigate = useNavigate();
    const navigateToOrderDetail = id =>{
        navigate(`/order/${id}`);
    }
    return (
        <div className="card w-96  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className='text-2xl'>
              <p className='text-secondary'>Price: ${price}</p>
              <p>Min Qty. {minQty}</p>
              <p>Available Qty. {maxQty}</p>
          </div>
          <div className="card-actions">
          <button onClick={()=>navigateToOrderDetail(_id)} className="btn btn-secondary mb-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">Order now</button>
          </div>
        </div>
      </div>
    );
};

export default Equipment;
