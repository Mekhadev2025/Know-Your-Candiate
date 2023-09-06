import React,{useState} from "react"
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Home from  "./pages/Home/Home"
import Footer from "./components/footer/Footer"
import Login from "./pages/Login/Login"
import District from './pages/District/District'
import Demo from "./pages/Demo.jsx"
import Demos from "./GoogleSignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // const ExternalIntegration = () => {
  //   window.location.href = 'https://syndigo.matsio.com/gilabs/wp-admin/';
  //   return null; // This component doesn't render anything
  // };
 
  function ExternalIntegration() {
    // Redirect to the external URL
    window.location.href = 'https://syndigo.matsio.com/gilabs/wp-admin/';
    return null;
  }
//  const [val,setVal]=useState("kollam")
  return (
    <>
<Navbar/>


<BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}>    
        </Route>
        {/* <Route path="/nominee" element={<Form/>}>    
        </Route> */}
        <Route path="/district" 
        element={
      <District 

        />}>    
        </Route>
        <Route path="/login" element={<Login />}>    
        </Route>
        <Route path="/demo" element={<Demos />}>    
        </Route>
        <Route path="/admin" element={<ExternalIntegration />} />
        
      </Routes>
    
    </BrowserRouter>

{/* <Form/> */}

{/* 
<District district="Trivandrum"/> */}

<Footer/>
    </>
  )
}

export default App
