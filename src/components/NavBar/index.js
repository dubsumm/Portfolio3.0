import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavbarContainer,
} from "./NavbarElements";


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLink className="text-uppercase" to="/">
            Will's Site
          </NavLink>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLink className="text-uppercase" to="/about">
              About
            </NavLink>
            <NavLink className="text-uppercase" to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="text-uppercase" to="/contact">
              Contact
            </NavLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
