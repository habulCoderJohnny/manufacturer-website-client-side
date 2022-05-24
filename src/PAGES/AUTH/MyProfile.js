
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SHARED/Loading/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div className='grid grid-cols-1 gap-4 justify-items-center '>
            <h1 className='stat-value'>My Profile</h1>
            {loading && <Loading></Loading>}
            <div class="min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={user?.photoURL} className="shadow-2xl rounded-full" alt="" />
                    <div className='font-mono'>
                        <h1 className='text-xl'>Name:</h1>
                        <h1 className='my-1'>{user?.displayName}</h1>
                        <h1 className='text-xl'>Email:</h1>
                        <h1> {user?.email}</h1>
                        <Link to="/" className='btn btn-secondary '>Edit Profile</Link>
                    </div>
                </div>
            </div>

        </div>




    );
};

export default MyProfile;


