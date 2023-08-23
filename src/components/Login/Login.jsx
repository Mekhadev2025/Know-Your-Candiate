import React from 'react'

import closeimg from "../../assets/close.svg"
function Login(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <img className="close-btn" src={closeimg} onClick={()=>{
                props.setTrigger(false)
            }} >
            </img>
            <h1 className="pop-header">
               Login With OTP
             </h1>
            {props.children}
        </div>
    </div>
  ):""
}
export default Login