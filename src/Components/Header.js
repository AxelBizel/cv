import React from "react";
import Avatar from "../Images/Avatar-AxelBizel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenFancy,
  faChartArea
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents" data-aos="zoom-in">
        <img src={Avatar} alt="Axel Bizel's Avatar" />
        <div className="header-text">
          <h1 className="header-title">Axel Bizel</h1>
          <p>
            <br />
            <FontAwesomeIcon icon={faCode} style={{fontSize:'1.4em'}}/>
            &nbsp;Développeur React - Node.js
            <br />
            <br />
            <FontAwesomeIcon icon={faChartArea} style={{fontSize:'1.4em'}} />
            &nbsp;Datavisualisation et infographie
            <br />
            <br />
            <FontAwesomeIcon icon={faPenFancy}  style={{fontSize:'1.4em'}}/>
            &nbsp;Journalisme web et rédaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
