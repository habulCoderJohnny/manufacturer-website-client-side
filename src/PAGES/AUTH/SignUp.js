import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ErrorMassage from '../SHARED/ErrorMassage';
import Loading from '../SHARED/Loading/Loading';
import SocialSignIn from './SocialSignIn';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,  {sendEmailVerification: true});
    const navigate = useNavigate()
    let signInError;

    if (user) {
        navigate('/')
    }

    if (error) {
        signInError = <ErrorMassage>{error?.message}</ErrorMassage>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        if ({sendEmailVerification:true}) {
            await toast('Sent email Verification mail check your inbox/spam!');
            console.log(user);
        }
    }
    return (
        <div className="hero min-h-screen" >
            <div className="card w-full max-w-lg shadow-2xl">
                <div className="pl-7 mt-5">
                    <img src={logo} alt="" />
                    <h1 className="text-primary font-bold pl-12"><span className='text-[#354069]'> Hello, </span>Welcome to our Registration form!</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}  className="text-blue-600">


                    <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>

                            <input type="text" placeholder="Name" className="input input-secondary   text-xl" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />


                            <label className="label p-1">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Name field End  */}

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

                         {/* Email field End  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>

                            <input type="password" placeholder="password" className="input input-error text-xl" {...register("password", {
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
                         {/* Password field End  */}
                         {/* Error & Loading */}
                         {signInError}
                        {loading && <Loading></Loading>}

                        <div className="form-control">
                            <input type="submit" value="Registration Now" className="btn bg-[#00a400]  text-white font-bold
                        mt-1" />
                        </div>
                    </form>

                    <p><small>Already Have an Account? <Link className=' hover:underline font-bold text-primary' to="/login">Login</Link></small></p>
                    <SocialSignIn></SocialSignIn>
                </div>

            </div>

        </div>
    );
};

export default SignUp;