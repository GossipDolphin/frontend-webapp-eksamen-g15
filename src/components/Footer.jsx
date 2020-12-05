import React from 'react';
import { FooterStyled } from '../styles/StyledComponents';

const Footer = ({ orgnr, email, tlf }) => (
  <FooterStyled>
    <p>orgnr: {orgnr}</p>
    <p>{email}</p>
    <p>{tlf}</p>
  </FooterStyled>
);

export default Footer;
