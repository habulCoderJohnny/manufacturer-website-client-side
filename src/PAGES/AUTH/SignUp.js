import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const SignUp = () => {
    return (
        <div className="hero min-h-screen" >
            <div className="card w-full max-w-lg shadow-2xl">
                <div className="pl-7 mt-5">
                    <img src={logo} alt="" />
                    <h1 className="text-primary font-bold pl-12"><span className='text-[#354069]'> Hello, </span>Welcome to our Registration form!</h1>
                </div>
                <div className="card-body">
                    <form className="text-blue-600">
                    <div className="form-control">
                            <label className="label p-0">
                                <span className="label-text text-xl">Name</span>
                            </label>

                            <input type="text" placeholder="Name" className="input input-secondary   text-xl"/>
                        </div>
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
                            <input type="submit" value="Registration Now" className="btn bg-[#00a400]  text-white font-bold
                        mt-6" />
                        </div>
                    </form>
                    <p><small>Already Have an Account? <Link className=' hover:underline font-bold text-primary' to="/login">Login</Link></small></p>

                    <div className="divider">OR</div>

                    <button className="btn btn-outline">continue with google</button>
                </div>

            </div>

        </div>
    );
};

export default SignUp;