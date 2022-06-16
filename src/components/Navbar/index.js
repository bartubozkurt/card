import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src ={require("../../assets/Logo.f3d88813a4ef4ecd89dc.png")} alt="logo" width="190" height="40" />
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/explore" activeStyle>
            Explore
          </NavLink>

          <NavLink to="/services" activeStyle>
            Services
          </NavLink>

          <NavLink to="/team" activeStyle>
            Team
          </NavLink>

          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>

          <NavLink to="/sign-up" activeStyle>
            Sign up
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
        </NavBtn>


      </Nav>
    </>
  );
};

export default Navbar;
