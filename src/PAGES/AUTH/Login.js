import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Login = () => {


    return (
        <div className="hero min-h-screen" >
            <div className="card w-full max-w-lg shadow-2xl">
                <div className="pl-7 mt-5">
                    <img src={logo} alt="" />
                    <h1 className="text-primary font-bold pl-10"><span className='text-[#354069]'> Hello, </span>Welcome Back!</h1>
                </div>
                <div className="card-body">
                    <form className="text-blue-600">
                        <div className="form-control">
                            <label className="label p-1">
                                <span className="label-text text-xl">Email</span>
                            </label>

                            <input type="email" placeholder="email" className="input input-secondary text-xl" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>

                            <input type="password" placeholder="password" className="input input-error text-xl" />
                        </div>

                        <div className="form-control">
                            <input type="submit" value="Login" className="btn btn-primary text-white
                            mt-6 input-error" />
                        </div>
                    </form>
                    <label className="label">
                        Lost Password?
                        <button className="label-text-alt link link-hover link-white">Reset Pasword</button>
                    </label>
                    <p><small>New to FishZone? <Link className=' hover:underline font-bold text-green-400' to="/signup">Create New Account</Link></small></p>

                    <div className="divider">OR</div>

                    <button className="btn btn-outline">continue with google</button>
                </div>

            </div>

        </div>

    );
};

export default Login;