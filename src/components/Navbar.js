import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const NavLinks = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    &:hover {
      color: #f39c12;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>My Portfolio</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
