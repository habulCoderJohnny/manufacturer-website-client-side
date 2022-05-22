import React from 'react';

const Equipment = ({equipment}) => {
    const {img, name,price, minQty,maxQty,description} = equipment;
    return (
        <div className="card w-96  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className='text-2xl'>
              <p>Price: ${price}</p>
              <p>Min Qty. {minQty}</p>
              <p>Available Qty. {maxQty}</p>
          </div>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Equipment;
