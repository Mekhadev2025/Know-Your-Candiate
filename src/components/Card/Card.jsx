
//from distict.jsx

import React, { useState } from "react";
import "../Card/Card.css";
// import Loginform from "../Loginform/Loginform"
// import Login from "../Login/Login.jsx"
const Card = (props) => {
  console.log("card props",props)
  const [count, setCount] = React.useState(0);
  // if(count==)
  const [checked, setCheck] = React.useState(0);
  const incrementCount = () => {
    if (checked == 0) {
     
       props.incrementLogin();
      props.incrementTotal();
      props.incrementPopper()==1?()=>{
        setCount(count + 1);
        setCheck(1);
      }:""

         console.log("incrementpopper",props.incrementPopper)
      console.log(props)
      // console.log(totalCount);
    } 
    else {
      setCount(count - 1);
      setCheck(0);
      props.decrementTotal();
      // console.log(totalCount);
    }
    
    //  togglePop();
  };
  return (
    <div className="card--container">
      <img src={props.photo} className="candidate--img"></img>
      <div className="candidiate-deets">
        <h3 className="candidate--name">{props.name}</h3>
        <p className="candidiate--desc">{props.desc}</p>
      </div>
      <img src={props.party} className="party--logo" ></img>
      <div className="candidate--count" >{count}</div>
      <button onClick={incrementCount} className="card--btn"
      >
        Vote
      </button>
     
    </div>
  );
};

export default Card;
