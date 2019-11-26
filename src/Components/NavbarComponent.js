import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Experience from "./Experience";
import Formation from "./Formation";
import Stack from "./Stack";
import Contact from "./Contact";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sticky-top">
        <Navbar className="navbar-bg" light expand="sm">
          <NavbarBrand href="#header">
            <FontAwesomeIcon icon={faHome} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#formation">Formation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#stack">Stack</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
       
    </div>
  );
};

export default NavbarComponent;
