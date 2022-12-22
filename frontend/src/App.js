import { Route, Routes } from "react-router-dom";
import User from "./Components/User/User";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/users/:userId" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App;
