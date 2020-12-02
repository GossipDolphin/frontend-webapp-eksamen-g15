import React from 'react';
import { WelcomeArticleStyled } from "../styles/StyledComponents"

const Welcome = ({nummer}) => {
    return (
        <WelcomeArticleStyled>
            <h2>Velkommen til Rørlegger {nummer}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Sint esse eius atque nam deserunt provident odit quisquam eveniet placeat adipisci modi facilis dolore voluptatem ipsam minus,
            doloremque nostrum mollitia voluptate.
            </p>
        </WelcomeArticleStyled>
    )
}

export default Welcome;