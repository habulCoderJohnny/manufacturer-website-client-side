import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./PAGES/AUTH/Login";
import RequireAuth from "./PAGES/AUTH/RequireAuth";
import MyProfile from "./PAGES/DASHBOARD/MyProfile";
import SignUp from "./PAGES/AUTH/SignUp";
import Dashboard from "./PAGES/DASHBOARD/Dashboard";
import HOME from "./PAGES/HOME/HOME";
import Purchase from "./PAGES/Purchase";
import Navbar from "./PAGES/SHARED/Navbar";
import MyOrder from "./PAGES/DASHBOARD/MyOrder";
import AddReview from "./PAGES/DASHBOARD/AddReview";
import MakeAdmin from "./PAGES/DASHBOARD/ADMIN/MakeAdmin";
import RequireAdmin from "./PAGES/AUTH/RequireAdmin";
import NotFoundPage from "./PAGES/SHARED/NotFoundPage";
import MyPortfolio from "./PAGES/MyPortfolio";
import AddProduct from "./PAGES/DASHBOARD/ADMIN/AddProduct";
import Payment from "./PAGES/DASHBOARD/ADMIN/Payment/Payment";

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HOME />}></Route>
        <Route path="/order/:orderId" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
                 {/* Nested Route */}
        <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<MyProfile />}></Route>
        <Route path="order" element={<RequireAuth><MyOrder/></RequireAuth>}></Route>
        <Route path="review" element={<RequireAuth><AddReview /></RequireAuth>}></Route>
        <Route path="payment/:id" element={<Payment />}></Route>
        <Route path="users" element={<RequireAdmin><MakeAdmin/></RequireAdmin>}></Route>
        <Route path="add-product" element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
         </Route>
      </Routes>
      <ToastContainer></ToastContainer> 
    </div>
  );
}

export default App;
