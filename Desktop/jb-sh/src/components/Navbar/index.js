import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
              Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/food" activeStyle>
            Food
          </NavLink>
          <NavLink to="/hotels" activeStyle>
            Hotels
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/Login">Sign In/Sign Up</NavBtnLink>
          <NavBtnLink to="/profile">Profile</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
