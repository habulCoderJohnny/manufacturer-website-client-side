import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../SHARED/Loading/Loading';


const MyOrder = () => {
  const [orders,setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(()=>{
    //SEND USER MAIL & localStorage accessToken for secure UserData TO SERVER || Token parameter sent 
    if (user) {
      fetch(`http://localhost:5000/order?email=${user?.email}`,{
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => {
          setOrders(data);
        //console.log(data);
        })
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>
  }


  //DELETE OPERATION


  const handleDelete = email =>{
    const confirm = window.confirm('Are you sure to Delete this parts?');
    if (confirm) {
    fetch(`http://localhost:5000/parts/${email}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.deletedCount) {
            toast.success('Delete Successfully!')
            window.location.reload();
        }
        else{
            toast.error('failed to delete!')
        }
    })

  };
}


  return (
    <div>
      <h1 className='text-center'>My Order: <span className='stat-value text-blue-400'> {orders.length}</span></h1> 
      <div className="overflow-x-auto w-full">
        <table className="table mx-auto">
          {/* <!-- head --> */}
          <thead className='text-primary'>
            <tr>
              <th></th>
              <th>Avator</th>
              <th>Equipment Name</th>
              <th>Price</th>
              <th>phone Number</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map((order, index) => 
                <tr key={order._id}>
                  <th>{index+1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        
                          <div className="w-32 rounded"> <img src={order.img} alt=".." />
                          </div> 

                      </div>
                    </div>
                  </td>

                  <td>
                    <div>
                      <div className="font-bold">{order.name}</div>
                    </div>
                  </td>
                  <td>
                    ${order.price}
                  </td>
                   <td>{order.phone}</td>
                  {/* <th>
                  <button className="btn btn-ghost btn-xs">{order.treatment}</button>
                  </th>  */}
                  <td>{(order.price && !order.paid ) && <div><Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn btn-warning btn-xs">Plz Pay</button></Link> <FontAwesomeIcon onClick={()=>handleDelete(order?.email)}  className='h-6 pl-2 text-orange-600' icon={faTrashAlt}></FontAwesomeIcon>
                    </div> 
                     }
                  {(order.price && order.paid ) && 
                   <div>
                      <p className='stat-value text-green-500 text-xl'><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> PAID</p>
                      <abbr className='text-green-500' title={order.transactionId}>Transaction id</abbr> 
                   </div>}
                   </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;