import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig={
    apiKey: "AIzaSyASvXaUx1CEKpK_LffwnMqv-o5UsZYagTo",
    authDomain: "know-your-candidate-24ef8.firebaseapp.com",
    projectId: "know-your-candidate-24ef8",
    storageBucket: "know-your-candidate-24ef8.appspot.com",
    messagingSenderId: "60067425719",
    appId: "1:60067425719:web:1faee75b87fcc929428c32"
}

const app=initializeApp(firebaseConfig)
const authentication = getAuth(app);
const db = getFirestore(app);
export { authentication, db };

