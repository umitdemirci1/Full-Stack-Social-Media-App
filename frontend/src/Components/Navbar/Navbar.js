import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import User from "../User/User";


const Navbar = () => {

    let userId = 5
    return (
        <>
            <ul>
                <div className="bg-blue-500 mb-4">
                    <div className="flex h-12 items-center justify-between mx-6">
                        <li><Link to="/" element={<Home />}
                            className="text-gray-200 hover:text-white transition-colors flex items-center"
                        > <AiOutlineHome className="mr-1"/> Home</Link></li>
                        <li><Link to={{ pathname: '/users/' + userId }} element={<User />}
                            className="text-gray-200 hover:text-white transition-colors"
                        >User</Link></li>
                    </div>
                </div>
            </ul>
        </>
    );
}

export default Navbar;