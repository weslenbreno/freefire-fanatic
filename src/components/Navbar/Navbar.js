import React from "react";
import styled from "styled-components";
import FFbrandImage from "../../assets/images/slogan.png";
import { Link, animateScroll as scroll } from "react-scroll";

const StyledNavbar = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
  height: 65px;
  width: 100%;
  background: #1a1a1d;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  box-shadow: 3px 12px 27px 0px rgba(0, 0, 0, 0.75);
  padding: 0px 35px;
`;

const Brand = styled.a`
  cursor: pointer;
  color: #fff;
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: "Play";
  margin-right: 25px;
  small {
    position: absolute;
    right: -15px;
    top: 6px;
    padding-left: 15px;
    font-size: 10px;
    display: inline-block;
  }

  p {
    display: inline-block;
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1.3px;
  }

  &:hover {
    text-decoration: none;
    color: #fff;

    p {
      color: #fff;
    }
  }
`;

const FFbrand = styled.div`
  display: inline-block;
  background: url(${props => props.image});
  background-size: cover;
  width: 100px;
  height: 30px;
`;

const NavItem = styled.a`
  color: #fff;
  display: inline-block;
  font-family: "Play";
  position: absolute;
  right: 100px;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1.4px;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <StyledNavbar>
      <Link onClick={scrollToTop} smooth={true} duration={500}>
        <Brand>
          <p>Copa</p>
          <FFbrand image={FFbrandImage} />
          <small>RN</small>
        </Brand>
      </Link>
      <NavItem href="#inscricao">Inscrição</NavItem>
    </StyledNavbar>
  );
};

export default Navbar;
