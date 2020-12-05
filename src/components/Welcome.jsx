import React from 'react';
import { WelcomeArticleStyled } from '../styles/StyledComponents';

const Welcome = ({ nummer, setDetailedOffice }) => {
  const handleClick = () => {
    setDetailedOffice(null);
  };
  return (
    <WelcomeArticleStyled>
      <button type="button" onClick={handleClick}>
        Tilbake
      </button>
      <h2>Velkommen til Rørlegger {nummer}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint esse eius
        atque nam deserunt provident odit quisquam eveniet placeat adipisci modi
        facilis dolore voluptatem ipsam minus, doloremque nostrum mollitia
        voluptate.
      </p>
    </WelcomeArticleStyled>
  );
};

export default Welcome;
