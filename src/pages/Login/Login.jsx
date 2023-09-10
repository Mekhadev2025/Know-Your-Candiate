import React, { useState, useEffect } from "react";
import "../Login/Login.css";
import { authentication } from "../../../firebase-config";
import { signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { collection, getDocs, addDoc, query, where, getDocs as getDocsByQuery } from "firebase/firestore"
import { db } from "../../../firebase-config"

const Login = (props) => {
  const [users, setUsers] = useState([]);
  const [showWindow, setShowWindow] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedIdentifier = localStorage.getItem("identifier");

  useEffect(() => {
    const getUsers = async () => {
      const collectionRef = collection(db, 'users');
      const response = await getDocs(collectionRef);
      const Users = response.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }));
      setUsers(Users);
    };
    
    if (storedIdentifier) {
      setIsLoggedIn(true);
    }

    getUsers();

  }, [storedIdentifier]);

  const checkUserExistsInFirestore = async (identifier) => {
    const userQuery = query(collection(db, 'users'), where('identifier', '==', identifier));
    const querySnapshot = await getDocsByQuery(userQuery);
    return !querySnapshot.empty;
  }
 
   const addUserToFirestore = async (identifier) => {
    try {
      const exists = await checkUserExistsInFirestore(identifier);
      if (!exists) {
        const collectionRef = collection(db, 'users');
        await addDoc(collectionRef, { identifier });
        props.voteInc();
        setShowWindow(false)
      }
       else {
        setIsLoggedIn(true)
   
        console.log("User exists brooo")
        
        
      }
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
    }
  }

  const signGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log("response==", re);
        const email = re.user.email;
        localStorage.setItem("identifier", email);
        addUserToFirestore(email);

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
        console.log("uid", re.user.uid);
        const uid = re.user.uid;
        localStorage.setItem("identifier", uid);
        addUserToFirestore(uid);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      {isLoggedIn && showWindow? (
        <h1 className="thanks--vote">Already voted</h1>
      ) : (
        <div>
          {showWindow && (
            <div>
              <h1 className="login--header">Login</h1>
              <TwitterLoginButton onClick={signTwitter} />
              <GoogleLoginButton onClick={signGoogle} />
            </div>
          )}
          {!showWindow && <h1 className="thanks--vote">Thanks For Voting</h1>}
        </div>
      )}
    </>
  );
};

export default Login;