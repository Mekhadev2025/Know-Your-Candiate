import React, { useState, useEffect } from "react";
import "../Card/Card.css";
import inc from "../../assets/inc.svg"
import cpi from "../../assets/cpm.svg"
import bjp from "../../assets/bjp.png"
import other from "../../assets/other.png"
const Card = (props) => {
  const [selected, setSelected] = useState({});
  const [more, setMore] = useState(true);
  const [photos, setPhotos] = useState(null);
 
  useEffect(() => {
    console.log(props);

    if (props.party === "Congress") {
      setPhotos(inc);
    } else if (props.party === "BJP") {
      setPhotos(bjp);
    } else if (props.party === "CPI") {
      setPhotos(cpi);
    }
    else{
      setPhotos(other)
    }
  }, [props.party]); 

  const incrementCount = () => {
    setSelected(props.item);
    console.log("Selected=", props.item);
    props.handleSelected(props.item);
    props.incrementPopper();
    props.incrementLogin();
  };

  const handleMore = () => {
    setMore(!more); 
  };

  const cardClassName = `card--container ${more ? "" : "expanded"} ${
    props.isMaxVote ? "max-vote" : ""
  }`;

  return (
    <div className={cardClassName}>
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
      <img src={photos} className="party--logo" alt={props.name} />
      <div className="candidate--count" style={{ backgroundColor: props.voteCount == props.maxVote ? '#F0F3F5' : ' #FCE7E5' , color:props.voteCount == props.maxVote ? '#006EB5' : ' #EE311F'}} >
        {props.voteCount}
      </div>

      <button onClick={incrementCount
      }
       
         className="card--btn">
        Vote
      </button>
    </div>
  );
};

export default Card;