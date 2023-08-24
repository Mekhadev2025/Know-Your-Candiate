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
import Login from "../Login/Login"
import Loginform from "../../components/Loginform/Loginform"

const District = (props) => {

  const [totalCount,setTotal]=useState(0)
  const  [popper,setPopper]=useState(0);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedDistrict = queryParams.get('district');
  console.log(selectedDistrict);
  const dist=selectedDistrict[0].toUpperCase()+selectedDistrict.substring(1)
  console.log("dist=",dist) 


  const [data, setData] = useState([]);
  const [buttonPopup,setPopup]=useState(false)
  const [loginPopup,setLogin]=useState(false)
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

  

  const incrementTotal=()=>{
    setTotal(totalCount+1)
  }


  const decrementTotal=()=>{
    setTotal(totalCount-1)
  }


  console.log(totalCount);
  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };


     function incrementPopper(){
             setPopper(3);
             return 1;
    }

    function incrementLogin(){
          setLogin(true)
    }

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
            incrementTotal={incrementTotal}
            decrementTotal={decrementTotal}
            incrementPopper={incrementPopper}
            incrementLogin={incrementLogin}
          />
        )))}
      </div>

      <div className="btn-wrapper">
       
            
                    <button className="nominee-btn"  onClick={()=>{
                      setPopup(true) 
                      setPopper(1)
                    }} >
                      Add Your Nominee
                    </button>
        


      
      </div>


      <>
      {
        popper===1?(
          <Popup trigger={buttonPopup} setTrigger={setPopup}>
      <Form/>
      </Popup>
        ):""}
  
      {
        popper===3?(
       
          <Popup trigger={loginPopup} setTrigger={setLogin}>
                 <Login/>
        </Popup>
        ):" "
      
      }
        
      </>

    </section>
  );
};

export default District;
