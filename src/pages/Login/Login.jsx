import React, { useState, useEffect } from "react";
import "../Login/Login.css";
import { authentication } from "../../../firebase-config";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "../../../firebase-config"

const Login = (props) => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [showWindow, setShowWindow] = useState(true);

  function getUsers() {
    const collectionRef = collection(db, 'users')
    getDocs(collectionRef)
      .then(response => {
        console.log(response.docs)
        const Users = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id
        }))
        setUsers(Users)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    getUsers()
    console.log("hellooooo")
  }, [])

  useEffect(() => {
    console.log("Users=", users);
  }, [users]);

  const addUserToFirestore = (email) => {
    const collectionRef = collection(db, 'users');
    addDoc(collectionRef, { email })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const signGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then(re => {
        console.log("response==", re); 
        setShowWindow(false);
        localStorage.setItem("email", re.user.email);
        addUserToFirestore(re.user.email);

        // Update the value state
       
        console.log("Email", re.user.email);
        props.voteInc();
      })
      .catch(err => {
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
        addUserToFirestore(re.user.email);
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
        addUserToFirestore(re.user.email);
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
        <h1 className="thanks--vote">Already logged In</h1>
         
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
