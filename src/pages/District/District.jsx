import React from "react";
import { useState, useEffect } from "react";
import "../District/District.css"
import photo from "../../assets/tharoor.png";
import party from "../../assets/inc.svg";

import Card from "../../components/Card/Card";

import dummyData   from "../../dummyData";
    
const District = (props) => {

  

const totalCount=props.totalCount
const [data,setData]=useState([])

useEffect(()=>{
  async function fetchItem(){
    const response=await fetch("http://localhost:5000/api/data");
    const newRes=await response.json();
    // console.log(newRes);
    setData(newRes);

  }
  fetchItem();
},[])

// console.log(data)
  return (
    <section className="district--section">
      <div className="dlink">{`Home > ${props.district}`}</div>

      <h1 className="district--name">{props.district}</h1>
      <div className="cards">


      {data.map((item) => (
        <Card
          key={item.id}
          photo={photo}
          name={item.name}
          party={party}
          voteCount={item.voteCount}
          desc={item.desc}
        />
      ))}

</div>

<div className="btn-wrapper">
<button className="nominee-btn">Add Your Nominee</button>


</div>
     </section>
  );
};

export default District;
