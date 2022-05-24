import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () => {
    // const [user] = useAuthState(auth);

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
                <ul className="menu p-3 overflow-y-auto w-80 bg-secondary text-base-content text-xl">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>

                </ul>
            </div>
        </div>

    );
};

export default Dashboard;