import React, { useState } from "react";
import "../Form/Form.css"
const Form = () => {
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (event) => {
    console.log("Form submitted");
    event.preventDefault();

    await fetch("http://localhost:5000/api/districts/district=kollam", {
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
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name</label>
      <input
      
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
        onChange={(e) => {
          setParty(e.target.value);
        }}
      />

      <label htmlFor="desc-input">Description</label>
      <textarea
        
        id="desc-input"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button className="form-submit">Submit</button>
    </form>
  );
};

export default Form;
