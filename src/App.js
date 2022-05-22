import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./PAGES/AUTH/Login";
import SignUp from "./PAGES/AUTH/SignUp";
import HOME from "./PAGES/HOME/HOME";
import Navbar from "./PAGES/SHARED/Navbar";

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HOME/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
