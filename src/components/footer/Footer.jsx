import React from "react";
import "../footer/Footer.css";
import { Link } from "react-router-dom";

import fb from "../../assets/Facebook.svg";

import insta from "../../assets/Insta.svg";

import twitter from "../../assets/twitter.svg";
const Footer = () => {
  return (
    <footer>
      
      <div className="copy">
        &copy; 2023 Choose your candidate .All Rights Reserved
      </div>

      <div className="social">
        <a href="https://www.facebook.com/ashajomiswbip/">
          <img src={fb}></img>
        </a>
        <a href="https://www.facebook.com/ashajomiswbip/">
          <img src={insta}></img>
        </a>
        <a href="https://www.facebook.com/ashajomiswbip/">
          <img src={twitter}></img>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
