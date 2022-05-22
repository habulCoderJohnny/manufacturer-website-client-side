import React from 'react';

const ErrorMassage = ({children}) => {
    return (
        <div className="bg-red-200 border-l-4 rounded border-orange-500 p-4" role="alert">
        <p className="font-bold ">Authority says:</p>
        <p className='text-red-500'>{children}</p>
      </div>
    );
};

export default ErrorMassage;