import React from "react";
import Avatar from "../Images/Avatar-AxelBizel.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="header">
      <img src={Avatar} alt="Axel Bizel's Avatar" />
      <div>
        <h1>Axel Bizel</h1>
        <h2>Développeur front-end junior</h2>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  );
};
export default Header;
