import React from "react";
import "../Card/Card.css";
const Card = (props) => {
   



  let x = props.voteCount;
  const [count, setCount] = React.useState(x);
  // if(count==)
  const [checked, setCheck] = React.useState(0);
  const incrementCount = () => {
    if (checked == 0) {
      setCount(count + 1);
      setCheck(1);
    } else {
      setCount(count - 1);
      setCheck(0);
    }
  };
  return (
    <div className="card--container">
      <img src={props.photo} className="candidate--img"></img>
      <div className="candidiate-deets">
        <h3 className="candidate--name">{props.name}</h3>
        <p className="candidiate--desc">{props.desc}</p>
      </div>
      <img src={props.party} className="party--logo"    ></img>
      <div className="candidate--count" >{count}</div>
      <button onClick={incrementCount} className="card--btn">
        Vote
      </button>
    </div>
  );
};









export default Card;
