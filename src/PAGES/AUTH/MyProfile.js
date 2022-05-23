
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../SHARED/Loading/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div className='text-center text-2xl'>
            <h1 className='stat-value'>This is my Profile</h1>
            {loading && <Loading></Loading>}
            <h1>Name:{user?.displayName}</h1>
            <h1>email: {user?.email}</h1>

        </div>
    );
};

export default MyProfile;