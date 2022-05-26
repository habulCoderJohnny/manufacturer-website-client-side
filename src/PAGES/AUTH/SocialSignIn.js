import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import ErrorMassage from '../SHARED/ErrorMassage';
import Loading from '../SHARED/Loading/Loading';

const SocialSignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [token] = useToken(gUser);
    let signInError;

    if (token) {
        navigate('/')
        toast.success('You loggin with google');
        console.log(gUser);
    }
    if (gError) {
        signInError = <ErrorMassage>{gError?.message}</ErrorMassage>
    }

    return (
        <div>
            {signInError}{ gLoading && <Loading></Loading>}
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="w-full btn bg-[#1a73e8] text-white">continue with google
        </button>
        </div>
    );
};

export default SocialSignIn;