import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import profile from '../../assets/images/profile.png';

const Navbar = () => {

    const [user,loading] = useAuthState(auth);
    const menuItems =
        <>
            <li className='font-serif font-bold'>
                <Link to="/">Home</Link>
                <Link to="/#equipment">Product Equipment</Link>
                <Link to="/#review">Review</Link>
                <Link to="/about">Who we are</Link>
            </li>
        </>
    
    return (
        <>
            <div className="navbar sticky top-0 z-50 bg-[#f2f2f2]">
                <div className="flex-1">

                    <Link to='/about'><img src={logo} alt="" /></Link>

                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                                {menuItems}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                       {  user?.photoURL? <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="" />
                                </div>
                              :<div className="w-10 rounded-full">
                                <img src={profile} alt="" />
                            </div>
                            }
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                          <Link to="/profile" className="justify-between text-purple-500 font-bold uppercase">
                              {user?.displayName} 
                                <span className="badge bg-primary">View</span>
                                </Link>
                    
                            </li>
                            {
                                user && <li><Link to="/dashboard">Dashboard</Link></li>
                            }
                            <li>{user ? <button className="btn btn-ghost">Logout</button> :
                                <Link to="/login">Login</Link>}</li>

                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;