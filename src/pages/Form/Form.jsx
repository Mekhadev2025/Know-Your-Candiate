import React, { useState } from "react";
import "../Form/Form.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [desc, setDesc] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track whether the form has been submitted

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedDistrict = queryParams.get('district');
  console.log("selected district =", selectedDistrict);
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formData = {
    //   name,
    //   party,
    //   desc,
    //   method: "add", // Assuming you want the method to always be 'add'
    //   district: selectedDistrict, // Use the selectedDistrict from the URL
    // };

    const queryParams = {
      name: name,
      party: party,
      desc: desc,
      method: "add", // Assuming you want the method to always be 'add'
      district: selectedDistrict,
      voteCount:"0"
    };

    axios
      .post('https://syndigo.matsio.com/gilabs/api/', null, {
        params: queryParams,
      })
      .then((response) => {
        // Handle the response data here.
        console.log("Submitted");
        // The form was successfully submitted, so set the submitted state to true
        setSubmitted(true);
       
      })
      .catch((error) => {
        // Handle errors here.
        console.error('Error:', error);
      });
  };

  return (
    <>
      <h1 className="pop-header">Add Your Nominee</h1>
      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "200",
            }}
          >
            Thanks!!!
          </div>
        ) : (
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
        )}
      </form>
    </>
  );
};

export default Form;
