import { Route, Routes } from "react-router-dom";
import Login from "./PAGES/AUTH/Login";
import HOME from "./PAGES/HOME/HOME";
import Navbar from "./PAGES/SHARED/Navbar";

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HOME/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
