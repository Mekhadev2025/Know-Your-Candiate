import React, { useState } from "react";
import "../Login/Login.css";
import OtpInput from "react-otp-input";

const Login = () => {
  const [phone, setPhone] = useState("");

  const [window, setWindow] = useState(false);
  const [otp, setOtp] = useState("");
  const [thanks, setThanks] = useState(false);

  const formSubmit = async (event) => {
    console.log("Form submitted")
    await fetch(`http://localhost:5000/api/users`, {
      method: "POST",
      body: JSON.stringify({
        phone,
        otp,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setPhone("");
    console.log("heyyyy");
  };

  // const otpSubmit = async (event) => {
  //   console.log("Form submitted");
  //   event.preventDefault();
  //   await fetch(`http://localhost:5000/api/users`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       otp,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //   setOtp("");
  //   console.log("heyyyy");
  // };

  return (
    // <>
    //   {window == false ? (
    //     <>
    //       <h1 className="login--header">Login with phone number</h1>
    //       <form >
    //         <label htmlFor="PhoneNumber">Enter Mobile Number</label>
    //         <input
    //           type="text"
    //           name="name"

    //           value={phone}
    //           onChange={(e) => {
    //             setPhone(e.target.value);
    //           }}
    //           className="login--input"
    //         ></input>

    //         <button
    //           className="login--button"
    //           onClick={() => {
    //             setWindow(true);
    //             console.log("going to page 2")
    //           }}
    //         >
    //           Send SMS
    //         </button>

    //       </form>
    //     </>
    //   ) : (
    //     <>
    //       {thanks == false ? (
    //         <>
    //           <h1 className="login--header">Verify OTP</h1>
    //           <form onSubmit={formSubmit}>
    //             <label htmlFor="otp">Enter the OTP</label>
    //             <OtpInput
    //               className="otp-input"
    //               value={otp}
    //               onChange={setOtp}
    //               numInputs={6}
    //               renderSeparator=""
    //               containerStyle={{
    //                 display: "flex",
    //                 gap: "2rem",
    //                 margin: " 1rem auto",
    //               }}
    //               inputStyle={{
    //                 padding: "2rem",
    //                 color: "black",
    //                 display: "flex",
    //               }}
    //               renderInput={(props) => <input {...props} />}
    //             />

    //             <button className="login--button" onClick={() => {
    //               setThanks(true);

    //             }}>
    //               Complete Voting
    //             </button>
    //           </form>
    //         </>
    //       ) : (

    //         <h1 className="thanks--vote" >Thanks For voting</h1>

    //       )
    //       }
    //     </>
    //   )}
    // </>
    <>

    <form >
      {/* //send sms */}
      {window==false?(
        <>
          <h1 className="login--header">Login with phone number</h1>
                    <label htmlFor="PhoneNumber">Enter Mobile Number</label>
                    <input
                    type="text"
                        name="name"

                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        className="login--input2"
                      ></input>

                      <button
                        className="login--button"
                        onClick={() => {
                          setWindow(true);
                          console.log("going to page 2")
                        }}
                      >
                        Send SMS
                      </button>


        </>
      ):
      //window==true aanekil then send otp page
      (
         <>
          {  thanks==false?(
            <>
            <h1 className="login--header">Verify OTP</h1>
         
              <label htmlFor="otp">Enter the OTP</label>
               <OtpInput
                  className="otp-input"
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator=""
                  containerStyle={{
                    display: "flex",
                    gap: "2rem",
                    margin: " 1rem auto",
                  }}
                  inputStyle={{
                    padding: "2rem",
                    color: "black",
                    display: "flex",
                  }}
                  renderInput={(props) => <input {...props} />}
                />

                <button className="login--button" onClick={() => {
                  setThanks(true);
                      formSubmit();
                }}>
                  Complete Voting
                </button>
            
            </>
            
       

          ):(
            <h1 className="thanks--vote" >Thanks For voting</h1>


          )
          } 
             
            </>
        
        
      )}
    </form>
    </>
  );
};

export default Login;
