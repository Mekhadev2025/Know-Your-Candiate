
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Home from  "./pages/Home/Home"
import Footer from "./components/footer/Footer"
import Nominee from  "./pages/Nominee/Nominee"
import District from './pages/District/District'
import Form from "./pages/Form/Form"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
<Navbar/>


<BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}>    
        </Route>
        <Route path="/nominee" element={<Form/>}>    
        </Route>
        <Route path="/district" element={<District district="Trivandrum" />}>    
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
