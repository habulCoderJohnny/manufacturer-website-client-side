import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../SHARED/Loading/Loading';
import NotAccess from '../SHARED/NotAccessPage/NotAccess';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    
    if (!user) {
        toast.error('Plz register!')
        return <Navigate to="/signup" state={{from:location}} replace></Navigate>
    }
    if (!admin) {
        toast.error('Sorry! you are not allowed to access this page!')
        return <NotAccess></NotAccess>;
    }

    return children;
};

export default RequireAdmin;