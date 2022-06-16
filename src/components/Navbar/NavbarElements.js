import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// ! Nav
export const Nav = styled.nav`
  background: #000;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

// ! Navlink
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;
// ! Bars
export const Bars = styled(FaBars)`
  color: #fff;
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
// ! NavMenu
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;


  @media screen and (max-width: 760px) {
    display: none;
  }
`;
// ! NavBtn
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;


  @media screen and (max-width: 760px) {
    display: none;
  }
`;

// ! NavBtnLink
export const NavBtnLink = styled(Link)`
  border-radidus: 50%;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decorasion: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
