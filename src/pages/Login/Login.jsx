import React, { useState } from 'react'
import "../Login/Login.css"
const Login = () => {
   const [phone,setPhone]=useState("");
  
    const formSubmit = async(event) => {
        console.log("Form submitted");
        event.preventDefault();
        await fetch(`http://localhost:5000/api/users`, {
          method: "POST",
          body: JSON.stringify({
            phone,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
       setPhone("")
        console.log("heyyyy");
      };
    
  return (
    <>
        <h1 className='login--header'>Login with phone number</h1>
        <form onSubmit={formSubmit}>
      <label htmlFor='PhoneNumber'>Enter Mobile Number</label>
        <input type="text"
         name="name"
         value={phone}
         onChange={(e) => {
            setPhone(e.target.value);
          }}
          className='login--input'
         ></input>
     
   
        <button className='login--button'>Submit</button>
      
    </form>
    
    
    </>

  )


        }

export default Login
