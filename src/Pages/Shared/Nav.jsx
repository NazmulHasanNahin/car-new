import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { toast } from 'sonner';
import { AuthContext } from "../../Providers/Authcontext";
import { ImImages } from "react-icons/im";
const Nav = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const { user, logout } = useContext(AuthContext);


    const handlelogout = () => {
        logout()
            .then(result => {
                toast.warning('Successfully logged out');
                console.log(result.user);
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <div className="navbar-center">
                                <ul className="menu menu-horizontal px-1 space-x-1">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={`btn ${isActive("/") ? "bg-[#FF3811] text-white" : "btn-ghost"}`}>
                                            Home
                                        </NavLink>
                                    </li>
                                    {user ?
                                        <li>
                                            <NavLink
                                                to="/bookings"
                                                className={`btn ${isActive("/bookings") ? "bg-[#FF3811] text-white" : "btn-ghost"}`}>
                                                All Bookings
                                            </NavLink>
                                        </li> :
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={`btn ${isActive("/") ? "bg-[#FF3811] text-white" : "btn-ghost"}`}>
                                                Add Tourist Spot
                                            </NavLink>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <NavLink to="/" className="text-2xl font-bold text-gray-800">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                {/* here start for pc */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="navbar-center">
                            <ul className="menu menu-horizontal px-1 space-x-4">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={`btn ${isActive("/") ? "bg-[#FF3811] text-white" : "btn-ghost"}`}>
                                        Home
                                    </NavLink>
                                </li>
                                {user ?
                                    <li>
                                        <NavLink
                                            to="/bookings"
                                            className={`btn ${isActive("/bookings") ? "bg-[#FF3811] text-white" : "btn-ghost"}`}>
                                            All Bookings
                                        </NavLink>
                                    </li> :
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={`btn ${isActive("/") ? "bg-[#FF3811] text-white" : "btn-ghost"}`}>
                                            Add Tourist Spot
                                        </NavLink>
                                    </li>
                                }


                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {user ? (
                        <>
                            <div className="flex items-center space-x-3 max-w-xs truncate">
                                <div className="avatar flex justify-center items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                                        {user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt="User"
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <button className="text-gray-500  text-3xl font-semibold rounded-full bg-gray-300 p-2 hover:bg-gray-400 transition">
                                                <ImImages />
                                            </button> // Fallback icon button
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-base font-semibold text-gray-800 truncate max-w-[150px]">
                                        {user.displayName || user.name || "User"}
                                    </h1>
                                </div>
                            </div>
                            <button
                                onClick={handlelogout}
                                className="btn bg-red-500 text-white hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <div className="p-2 bg-[#FF3811] rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-green-600 transition">
                                    <span className="text-white text-lg font-semibold font-['Work Sans']">
                                        Sign In
                                    </span>
                                </div>
                            </Link>
                            <Link to="/reg">
                                <div className="p-2 bg-[#59c6d2] rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-cyan-500 transition">
                                    <span className="text-white text-lg font-semibold font-['Work Sans']">
                                        Sign Up
                                    </span>
                                </div>
                            </Link>
                        </>
                    )}
                </div>


            </div>
        </div>

    );
};

export default Nav;