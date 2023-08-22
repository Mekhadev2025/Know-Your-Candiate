import React from 'react'
import "../Popup/Popup.css"
import closeimg from "../../assets/close.svg"
function Popup(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <img className="close-btn" src={closeimg} onClick={()=>{
                props.setTrigger(false)
            }} >
            </img>
            <h1 className="pop-header">
             Add Your Nominee
             </h1>
            {props.children}
        </div>
    </div>
  ):""
}

export default Popup;