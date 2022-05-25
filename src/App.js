import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./PAGES/AUTH/Login";
import RequireAuth from "./PAGES/AUTH/RequireAuth";
import MyProfile from "./PAGES/AUTH/MyProfile";
import SignUp from "./PAGES/AUTH/SignUp";
import Dashboard from "./PAGES/DASHBOARD/Dashboard";
import HOME from "./PAGES/HOME/HOME";
import Purchase from "./PAGES/Purchase";
import Navbar from "./PAGES/SHARED/Navbar";
import MyOrder from "./PAGES/DASHBOARD/MyOrder";
import AddReview from "./PAGES/DASHBOARD/AddReview";
import MakeAdmin from "./PAGES/DASHBOARD/ADMIN/MakeAdmin";
import RequireAdmin from "./PAGES/AUTH/RequireAdmin";

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HOME />}></Route>
        <Route path="/order/:orderId" element={<Purchase />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
                 {/* Nested Route */}
        <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<MyOrder/>}></Route>
        <Route path="review" element={<AddReview />}></Route>
        <Route path="profile" element={<MyProfile />}></Route>
        <Route path="users" element={<RequireAdmin><MakeAdmin/></RequireAdmin>}></Route>
         </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
