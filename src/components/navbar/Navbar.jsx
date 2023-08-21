 import React from 'react';
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="header">
        <span className='header1'>CHOOSE YOUR </span>
        <span className='header2'>CANDIDATE</span>
      </div>

      <button className='nav-btn'>
        Add you Nomination
        {/* <Link to="/about">Go to About Page</Link> */}
      </button>
    </nav>
  );
};

export default Navbar;
