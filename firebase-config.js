import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig={
    apiKey: "AIzaSyASvXaUx1CEKpK_LffwnMqv-o5UsZYagTo",
    authDomain: "know-your-candidate-24ef8.firebaseapp.com",
    projectId: "know-your-candidate-24ef8",
    storageBucket: "know-your-candidate-24ef8.appspot.com",
    messagingSenderId: "60067425719",
    appId: "1:60067425719:web:1faee75b87fcc929428c32"
}

const app=initializeApp(firebaseConfig)
export const authentication = getAuth(app)
