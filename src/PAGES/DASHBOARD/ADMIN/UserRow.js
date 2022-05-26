import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> {
            if (res.status===403) {
                toast.error('Without an admin! Let alone Add a admin')
            }
           return res.json()})
        .then(data =>{
            // console.log(data);
            if (data.modifiedCount>0) {
                refetch();
                toast.success(`Successfully made an admin!`);
            }
        })

    }
    return (

        <tr>
            <td>
                {email}
                <br />
            </td>
            <td> {role!=='admin' && <button onClick={makeAdmin} className="btn bg-[#1369da] btn-sm text-white ">Make Admin</button>}
            {role == 'admin' && <button className="badge badge-success text-white badge-sm">Already Admin</button>} </td>
             <td><button className="btn btn-error btn-xs">Remove user</button></td>
        </tr>
    );
};

export default UserRow;