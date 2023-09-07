import React, { useState } from "react";
import "../Login/Login.css";
import { authentication } from "../../../firebase-config";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import TwitterButton from "react-twitter-button";
import { FacebookLoginButton,GoogleLoginButton,TwitterLoginButton } from "react-social-login-buttons";

const Login = () => {
  const signGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setWindow(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Sign In Not Successful");
      });
  };

  const signTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setWindow(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Sign In Not Successful");
      });
  };

  const signFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
        alert("Sign In Not Successful");
      });
  };

  const [window, setWindow] = useState(true);

  return (
    <>
      {window === true ? (
        <div>
          <h1 className="login--header">Login</h1>
          {/* <TwitterButton/> */}
          <FacebookLoginButton onClick={signFacebook} />
          <TwitterLoginButton onClick={signTwitter} />
          <GoogleLoginButton onClick={signGoogle} />
          {/* <GoogleButton onClick={signGoogle} /> */}
          {/* <button onClick={signFacebook}>Sign In with Facebook</button>
          <button onClick={signTwitter}>Sign In with Twitter</button> */}
        </div>
      ) : (
        <h1 className="thanks--vote">Thanks For Voting</h1>
      )}
    </>
  );
};

export default Login;
