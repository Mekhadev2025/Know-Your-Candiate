import React from 'react'
import "../Popup/Popup.css"
import closeimg from "../../assets/close.svg"
function Popup(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <img className="close-btn" src={closeimg} onClick={()=>{
             
                props.refresh()
                console.log(props.refresh())
                   props.setTrigger(false)
            }} >
            </img>
            
            {props.children}
        </div>
    </div>
  ):""
}

export default Popup;