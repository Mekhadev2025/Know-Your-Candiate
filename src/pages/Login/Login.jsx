import React, { useState } from "react";
import "../Login/Login.css";
import { authentication } from "../../../firebase-config";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
 
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";

const Login = (props) => {
  const signGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setShowWindow(false);
        props.voteInc();

      })
      .catch((err) => {
        console.error(err);
        // Show an error message to the user
        // You can update the state to display the error message within the component.
      });
  };

  const signTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setShowWindow(false);
        props.voteInc();
      })
      .catch((err) => {
        console.error(err);
        // Show an error message to the user
        // You can update the state to display the error message within the component.
      });
  };

  const signFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setShowWindow(false);
        props.voteInc();
      })
      .catch((err) => {
        console.error(err);
        alert("Sign In Not succesful")
        // Show an error message to the user
        // You can update the state to display the error message within the component.
      });
  };

  const [showWindow, setShowWindow] = useState(true);

  return (
    <>
      {showWindow === true ? (
        <div>
          <h1 className="login--header">Login</h1>
          <FacebookLoginButton onClick={signFacebook} />
          <TwitterLoginButton onClick={signTwitter} />
          <GoogleLoginButton onClick={signGoogle} />
        </div>
      ) : (
        <h1 className="thanks--vote">Thanks For Voting</h1>
      )}
    </>
  );
};

export default Login;
