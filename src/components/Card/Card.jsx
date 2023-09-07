
//from distict.jsx
import React, { useEffect, useState } from "react";
import "../Card/Card.css";
// import Loginform from "../Loginform/Loginform"
// import Login from "../Login/Login.jsx"
const Card = (props) => {

  const [count, setCount] = React.useState(0);
 
  useEffect(()=>{ 
 
    setCount(props.voteCount)
  })
   const [selected,setSelected]=useState({
   })

  const incrementCount=()=>{
    setSelected(props.item)
     console.log("Selected=",props.item)
     props.handleSelected(props.item)
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
