import React,{useState} from "react"
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Home from  "./pages/Home/Home"
import Footer from "./components/footer/Footer"

import District from './pages/District/District'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

 
   
 const [val,setVal]=useState("kollam")
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
