import { Link } from "react-router-dom";
import Home from "../Home/Home";
import User from "../User/User";

const Navbar = () => {

    let userId = 5
    return (
        <>
            <ul>
                <div className=" flex mx-auto justify-around flex-row h-10 items-center ">
                    <li><Link to="/" element={<Home />}
                    className=" bg-blue-600 hover:bg-blue-400 transition-colors"
                    >Home</Link></li>
                    <li><Link to={{ pathname: '/users/' + userId }} element={<User />}
                    className=" bg-blue-600 hover:bg-blue-400 transition-colors"
                    >User</Link></li>
                </div>

            </ul>
        </>
    );
}

export default Navbar;