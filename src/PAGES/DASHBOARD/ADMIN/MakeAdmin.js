import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SHARED/Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
     //load all user from Database
     const { data: allUsers, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <button class="btn gap-2 ml-80  mb-2 text-red-500">
                All Users:
                <div class="badge badge-secondary text-2xl">{allUsers.length}</div>
            </button>

            <div className="overflow-x-auto">
                <table className="table mx-auto">
                    {/* <!-- head --> */}
                    <thead className='text-primary'>
                        <tr>
                            <th>Name | Email</th>
                            <th>Admin Status</th>
                            <th>User Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map(user=><UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdmin;