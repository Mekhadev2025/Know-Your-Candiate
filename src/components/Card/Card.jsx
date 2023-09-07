import React, { useEffect, useState } from "react";
import "../Card/Card.css";

const Card = (props) => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    setCount(props.voteCount);
  }, [props.voteCount]);

  const [selected, setSelected] = useState({});
  const [more, setMore] = useState(true);

  const incrementCount = () => {
    setSelected(props.item);
    console.log("Selected=", props.item);
    props.handleSelected(props.item);
    props.incrementPopper();
    props.incrementLogin();
  };

  const handleMore = () => {
    setMore(!more); // Toggle the value of 'more' (true to false or false to true)
  };

  return (
    <div className={`card--container ${more ? "" : "expanded"}`}>
      <img src={props.photo} className="candidate--img" alt={props.name} />
      <div className="candidiate-deets">
        <h3 className="candidate--name">{props.name}</h3>
        <p className={`candidiate--desc ${more ? "" : "expanded"}`}>
          {more ? props.desc.slice(0, 100) + "..." : props.desc}
        </p>
        {props.desc.length > 100 && (
          <button onClick={handleMore} className="readBtn">
            {more ? "Read More" : "Read Less"}
          </button>
        )}
      </div>
      <img src={props.party} className="party--logo" alt={props.name} />
      <div className={`candidate--count ${props.isMaxVote ? "max-vote" : ""}`}>
        {count}
      </div>
      <button onClick={incrementCount} className="card--btn">
        Vote
      </button>
    </div>
  );
};

export default Card;
