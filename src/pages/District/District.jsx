import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../District/District.css";
import photo from "../../assets/pic.jpg";
import party from "../../assets/inc.svg";
import {Link }from "react-router-dom"
import Card from "../../components/Card/Card";
import Popup from "../../components/Popup/Popup";
import Form from "../Form/Form"


const District = (props) => {


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedDistrict = queryParams.get('district');
  console.log(selectedDistrict);
  const dist=selectedDistrict[0].toUpperCase()+selectedDistrict.substring(1)
  console.log("dist=",dist)
  const totalCount = props.totalCount;
  const [data, setData] = useState([]);
  const [buttonPopup,setPopup]=useState(false)
  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(
      `  http://localhost:5000/api/districts/district=${selectedDistrict}`
      );
      const newRes = await response.json();
      setData(newRes);
    }
    fetchItem();
  }, []);

  return (
    <section className="district--section">

      <div className="dlink">
        
      <Link className="link--home" to="/">Home</Link>
      <span>&gt;</span>
     <Link to="/district?district=wayanad" className="link--dis">{dist}</Link>
        
        </div>

      <h1 className="district--name">{dist}</h1>
      <div className="cards">
        {    data.length===0?(
        <h2 className="no-results">Nothing to display</h2>):(
        data.map((item) => (
          <Card
            key={item.id}
            photo={photo}
            name={item.name}
            party={party}
            voteCount={item.voteCount}
            desc={item.desc}
          />
        )))}
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
