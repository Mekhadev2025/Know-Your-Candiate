import React from "react";
import { useState, useEffect } from "react";
import "../District/District.css";
import photo from "../../assets/tharoor.png";
import party from "../../assets/inc.svg";
import {Link }from "react-router-dom"
import Card from "../../components/Card/Card";
import Popup from "../../components/Popup/Popup";
import Form from "../Form/Form"
// import dummyData from "../../dummyData";

const District = (props) => {
  // const handleNominee = () => {
  //   // props.history.push("/nominee")
  //   console.log(props.history);
  // };

  console.log(props)
  const dis=props.location.this.state.district;
  console.log("Dis ==",dis)
  const totalCount = props.totalCount;
  const [data, setData] = useState([]);
  const [buttonPopup,setPopup]=useState(false)
  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(
      `  http://localhost:5000/api/districts/district=${dis}`
      );
      const newRes = await response.json();
      // console.log(newRes);
      setData(newRes);
    }
    fetchItem();
  }, []);

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
       
            
                    <button className="nominee-btn"  onClick={()=>{
                      setPopup(true)
                    }} >
                      Add Your Nominee
                    </button>
        


      
      </div>
      <Popup trigger={buttonPopup} setTrigger={setPopup}>
        
        <Form/>
      </Popup>
    </section>
  );
};

export default District;
