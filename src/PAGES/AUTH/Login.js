import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import Loading from '../SHARED/Loading/Loading';
import ErrorMassages from '../SHARED/ErrorMassages';
import SocialSignIn from './SocialSignIn';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const navigate = useNavigate()
    let signInError;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);

    if (token) {
        navigate('/')
    }

    if (error) {
        signInError = <ErrorMassages>{error?.message}</ErrorMassages>
    }

    
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data.email);
    }

    console.log(user);

    return (
        <div className="hero min-h-screen" >
            <div className="card w-full max-w-lg shadow-2xl">
                <div className="pl-7 mt-5">
                    <img src={logo} alt="" />
                    <h1 className="text-primary font-bold pl-10"><span className='text-[#354069]'> Hello, </span>Welcome Back!</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-blue-600">
                        <div className="form-control">
                            <label className="label p-1">
                                <span className="label-text text-xl">Email</span>
                            </label>

                            <input type="email" placeholder="email" className="input input-secondary text-xl" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />


                            <label className="label p-1">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>

                            <input type="password" placeholder="password" className="input input-error text-xl"{...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />


                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError} 
                        { loading && <Loading></Loading>}


                        <div className="form-control">
                            <input type="submit" value="Login" className="btn btn-primary text-white
                            mt-2 input-error" />
                        </div>
                    </form>
                    <label className="label">
                        Lost Password?
                        <button className="label-text-alt link link-hover link-primary link-white font-bold">Reset Pasword</button>
                    </label>
                    <p><small>New to FishZone? <Link className=' hover:underline font-bold text-green-400' to="/signup">Create New Account</Link></small></p>

                  <SocialSignIn></SocialSignIn>
                </div>

            </div>

        </div>

    );
};

export default Login;