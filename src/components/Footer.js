import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed; /* Fixes the footer at the bottom */
  left: 0; /* Aligns the footer to the left */
  bottom: 0; /* Aligns the footer to the bottom */
  width: 100%; /* Ensures the footer takes the full width */
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  z-index: 1000; /* Ensures it's above other content */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Pavithra's Portfolio</p>
    </FooterContainer>
  );
};

export default Footer;
