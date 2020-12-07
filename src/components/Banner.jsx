import React from 'react';
import { BannerStyled } from '../styles/StyledComponents';

const Banner = ({ bannerTitle, imageurl }) => (
  <>
    {imageurl !== undefined ? (
      <BannerStyled>
        <h1>{bannerTitle}</h1>
        <img src={imageurl} alt="illustration of article" />
      </BannerStyled>
    ) : (
      <BannerStyled>
        <h1>{bannerTitle}</h1>
      </BannerStyled>
    )}
  </>
);
export default Banner;
