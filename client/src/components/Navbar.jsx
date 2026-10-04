
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Navbar = () => {

	return (
		<div className="h-[5rem] shadow-md navbar bg-[#203162]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#e4654f">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='/'>Homepage</Link></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="text-[#e4654f] btn btn-ghost text-xl">ColorBridge</a>
      </div>
      
      <div className="navbar-end mr-[1rem]">
        <a href=""><img className="w-[4rem]" src="./right-arrow-next-svgrepo-com.svg" alt="" /></a>
        <a href=""><img className="w-[4rem]" src="./right-arrow-next-svgrepo-com.svg" alt="" /></a>
      </div>

	  

    </div>
		
	);
};



export default Navbar;
