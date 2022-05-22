import { Route, Routes } from "react-router-dom";
import HOME from "./PAGES/HOME/HOME";
import Navbar from "./PAGES/SHARED/Navbar";

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HOME/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
