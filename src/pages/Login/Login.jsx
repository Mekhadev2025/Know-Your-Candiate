import React, { useState,useEffect } from "react";
import "../Login/Login.css";
import OtpInput from "react-otp-input";
import OTPInput from "react-otp-input";

const Login = () => {
  const [phone, setPhone] = useState("");

  const [window, setWindow] = useState(false);
  const [otp, setOtp] = useState("");
  const [thanks, setThanks] = useState(false);

  const [phoneError, setPhoneError] = useState(true)

const validateForm=()=>{

  let isValid = true;

  if (!phone) {
    setPhoneError("Phone number is required");
    isValid = false;
  } else if (phone.length < 10) {
    setPhoneError("Phone number must be at least 10 digits");
    isValid = false;
  } else {
    setPhoneError("");
  }


  return isValid;


}


  const formSubmit = async (event) => {
    console.log("Form submitted");





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

  useEffect(() => {
    console.log("The current value of the input: ", otp);
  }, [otp]);

  return (
    <>
      <form>
        {/* //send sms */}
        {window == false ? (
          <>
            <h1 className="login--header">Login with phone number</h1>

            <>
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
                {phoneError && <p className="error">{phoneError}</p>}
            </>

            <button
              className="login--button"
              onClick={(event) => {
              
                let isValid = true;
                event.preventDefault();
               

                if (!phone) {
                  setPhoneError("Phone number is required");
                  isValid = false;
                } else if (phone.length < 10) {
                  setPhoneError("Phone number must be at least 10 digits");
                  isValid = false;
                } 
                else if (!/^[0-9]+$/.test(phone)) {
                  setPhoneError("Phone number should contain only numbers");
                  isValid = false;
                } 
               else{
                setWindow(true);
                console.log("going to page 2");
               }
                 
              }}
            >
              Send SMS
            </button>
          </>
        ) : (
          //window==true aanekil then send otp page
          <>
            {thanks == false ? (
              <>
                <h1 className="login--header">Verify OTP</h1>

                <label htmlFor="otp">Enter the OTP</label>
                <OtpInput
                  className="otp-input"
                   value={otp}
                  onChange={setOtp}
                   
                  numInputs={6}
                  renderSeparator=""
                  shouldAutoFocus={true}
                  isInputNum={true}
                  containerStyle={{
                    display: "flex",
                    gap: "2rem",
                    margin: " 1rem auto",
                  }}
                  inputStyle={{
                    padding: "2rem",
                    color: "black",
                    display: "flex",
                    width: "40px", // Adjusted width to ensure each input is visible
                    height: "40px", // Adjusted height for consistency
                    fontSize: "1.5rem", // Adjusted font size for better visibility
                    borderRadius: "8px", // Added border radius for a clean look
                    border: "1px solid #ccc", 
                    textAlign: "center", 
                    fontFamily:'Public sans'
                  
                  }}


                  renderInput={(props) => <input
                         onChange={(e)=>{
                          console.log("new event ",e.target.value)
                         }}
                     {...props} />}
                  
                />
                {
                  console.log(OTPInput)
                }
                <button
                  className="login--button"
                  onClick={() => {

                    setThanks(true);
                    formSubmit();
                  }}
                >
                  Complete Voting
                </button>
              </>
            ) : (
              <h1 className="thanks--vote">Thanks For voting</h1>
            )}
          </>
        )}
      </form>
    </>
  );
};

export default Login;
