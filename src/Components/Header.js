import React from "react";
import Avatar from "../Images/Avatar-AxelBizel.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Avatar} alt="Axel Bizel's Avatar" />
      <div>
        <h1>Axel Bizel</h1>
        <p>Développeur full-stack<br/>junior / React - Node.js</p>
      </div>
    </div>
  );
};


export default Header;
