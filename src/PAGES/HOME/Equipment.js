import React from 'react';

const Equipment = ({equipment}) => {
    const {img, name,price, minQty,maxQty,description} = equipment;
    return (
        <div class="card w-96  shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <div className='text-2xl'>
              <p>Price: ${price}</p>
              <p>Min Qty. {minQty}</p>
              <p>Available Qty. {maxQty}</p>
          </div>
          <p>{description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Equipment;
