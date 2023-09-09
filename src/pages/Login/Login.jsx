import React, { useState, useEffect } from "react";
import "../Login/Login.css";
import { authentication } from "../../../firebase-config";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";

const Login = (props) => {
  const [value, setValue] = useState("");
  const [showWindow, setShowWindow] = useState(true);

  const signGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
       
        console.log(re);
        setShowWindow(false);
         setValue(re.user.email);
        localStorage.setItem("email", re.user.email);
        props.voteInc();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setShowWindow(false);
        setValue(re.user.email);
        localStorage.setItem("email", re.user.email);
        props.voteInc();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setShowWindow(false);
        setValue(re.user.email);
        localStorage.setItem("email", re.user.email);
        props.voteInc();
      })
      .catch((err) => {
        console.error(err);
        alert("Sign In Not successful");
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      {value ? (
        <h1 className="thanks--vote">Already Logged In</h1>
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
};

export default Login;
