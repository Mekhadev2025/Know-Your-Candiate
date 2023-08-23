import React, { useState } from "react";
import "../Form/Form.css"
import { useLocation } from "react-router-dom";
const Form = () => {
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [desc, setDesc] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedDistrict = queryParams.get('district');
  console.log("selected district=",selectedDistrict);
 
  const [open,setOpen]=useState(true);
  const handleSubmit = async (event) => {
    console.log("Form submitted");
    event.preventDefault();
    

    await fetch(`http://localhost:5000/api/districts/district=${selectedDistrict}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        party,
        desc,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setName(" ")
    setParty(" ")
    setDesc(" ")
    console.log("heyyyy");
    setOpen(false);
  };

  return (


    <>
     <h1 className="pop-header">
             Add Your Nominee
             </h1>
    <form  onSubmit={handleSubmit}>
      {
        (open===true)?(
          <>
          
         
 <label htmlFor="name-input">Name</label>
      <input
         required
        id="name-input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="party-input">Party</label>
      <input
     
        id="party-input"
        value={party}
        required
        onChange={(e) => {
          setParty(e.target.value);
        }}
      />

      <label htmlFor="desc-input">Description</label>
      <textarea
        required
        id="desc-input"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button className="form-submit">Submit</button> 
      </>
        ):<div style={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"200"}}>
        Thanks!!!</div>
      }


     
    </form>
    
    </>
    
  );
};

export default Form;
