 import React,{useState} from 'react';
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup"
import Form from "../../pages/Form/Form"
const Navbar = () => {

  const [buttonPopup,setPopup]=useState(false)

  return (
    <nav>
      <div className="header" >
     
        <span className='header1'>CHOOSE YOUR </span>
        <span className='header2'>CANDIDATE</span>
     
      </div>

      <button className='nav-btn' onClick={()=>{
                    //  alert("Click any district")
                      setPopup(true)
                    }}>
        Add your Nomination
 
      </button>

      <Popup trigger={buttonPopup} setTrigger={setPopup} >
        
        <Form/>
      </Popup>
    </nav>
  );
};

export default Navbar;


