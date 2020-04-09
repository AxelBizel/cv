import React from "react";
import Avatar from "../Images/Avatar-AxelBizel.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents" data-aos="zoom-in">
        <img src={Avatar} alt="Axel Bizel's Avatar" />
        <div className="header-text">
          <h1 className="header-title">Axel Bizel</h1>
          <p>
            Développeur Javascript
            <br />
            React - Node.js
            <br />
            Expert datavisualisation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
