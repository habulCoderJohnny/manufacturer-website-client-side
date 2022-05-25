import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import profile from '../../assets/images/profile.png';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer" className=""> 
                <h1 className='stat-value text-primary'> <span className='text-[#354069]'>DASH</span>BOARD</h1>
                    <h3 className='text-purple-500'>Welcome to your Dashboard</h3></label>
                {/*Render Nested Routes*/}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-3 overflow-y-auto w-80 bg-secondary  text-white text-xl font-serif">

                <label tabIndex="0" className="avatar ml-4">
                       {  user?.photoURL? <div className="w-32  mask mask-squircle">
                                <img src={user?.photoURL} alt="" />
                                </div>
                              :<div className="w-24 rounded-full">
                                <img src={profile} alt="" />
                            </div>
                            }
                        </label>
                <li><Link to="/dashboard/profile">My Profile</Link></li>
                   {!admin && <>
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li></>}
                    
                    {admin && <>
                    <li><Link to="/dashboard/users">Make an Admin</Link></li>
                    <li><Link to="/dashboard/add-doctor">Add a Product</Link></li>
                    <li><Link to="/dashboard/users">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/manage-doctor">Manage Products</Link></li>
                    </>}
                </ul>
            </div>
        </div>

    );
};

export default Dashboard;