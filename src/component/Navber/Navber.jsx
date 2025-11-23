import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Navber = () => {
   
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className=" mx-auto w-1250px navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/Title">Skills</NavLink></li>
      <li><NavLink to="/Dashboard">Development</NavLink></li>
      <li><NavLink to="/Card">Card</NavLink></li>
      <li><a>portfolio</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/Login">
    <button className="btn bg-[#FF6C36] font-bold text-[#4b4848] pb-2 pt-1 pl-13 pr-13 rounded-tl-3xl rounded-br-3xl text-xl hover:bg-transparent hover:border-white hover:text-white">Login</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Navber;