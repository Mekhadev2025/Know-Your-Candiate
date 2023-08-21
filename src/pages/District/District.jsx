import React from "react";
import { useState, useEffect } from "react";
import "../District/District.css"
import photo from "../../assets/tharoor.png";
import party from "../../assets/inc.svg";

import Card from "../../components/Card/Card";

import dummyData   from "../../dummyData";
    
const District = (props) => {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  //   const data=async ()=>{
  //     try{
  //      const response=await axios.get("url");
  //     }
  //     catch (err){
  //     console.log(err);
  //     }

  //   }
  

const totalCount=props.totalCount



  return (
    <section className="district--section">
      <div className="dlink">{`Home > ${props.district}`}</div>

      <h1 className="district--name">{props.district}</h1>
      <div className="cards">


      {dummyData.map((item) => (
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
