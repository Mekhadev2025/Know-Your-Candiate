 import React from 'react'
 import {authentication} from "../firebase-config"
 import { signInWithPopup ,GoogleAuthProvider} from 'firebase/auth'

 const GoogleSignUp = () => {


    const handleClick=()=>{
        const provider=new GoogleAuthProvider();
        signInWithPopup(authentication,provider)
        .then((re)=>{
            console.log(re)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   return (
     <button onClick={handleClick}>
       Click Me
     </button>
   )
 }
 
 export default GoogleSignUp
 