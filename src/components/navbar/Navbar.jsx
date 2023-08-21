import React from 'react'
import "../navbar/Navbar.css"


const Navbar = () => {
  return (
    <nav>
         <div className="header">
            <span className='header1'>CHOOSE YOUR </span>
            <span className='header2'>CANDIDATE</span>

         </div>
       
        <button className='nav-btn'>Add your Nominee</button>
    </nav>
  )
}

export default Navbar
