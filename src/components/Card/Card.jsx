
//from distict.jsx

import React, { useEffect, useState } from "react";
import "../Card/Card.css";
// import Loginform from "../Loginform/Loginform"
// import Login from "../Login/Login.jsx"
const Card = (props) => {
  console.log("card props",props)
  const [count, setCount] = React.useState(0);
    
  useEffect(()=>{
    setCount(props.voteCount)
  })
 

  const incrementCount=()=>{
    props.incrementPopper();
    props.incrementLogin();
  }

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
