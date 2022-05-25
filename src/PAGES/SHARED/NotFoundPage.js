import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex'>
            <img className='' src="https://www.farmandfleet.com/error-pages/bulldog.jpg" alt="" />
            <h1 className='font-bold text-5xl uppercase my-40'> <span className='text-red-500 '>404 |</span> Your page Not Found!</h1>
        </div>
    );
};

export default NotFoundPage;