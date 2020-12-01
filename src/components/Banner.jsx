import React from "react";
import {BannerStyled} from "../styles/StyledComponents"

const Banner = ({bannerTitle}) => {
    return(
        <BannerStyled>
            <h1>{bannerTitle}</h1>
        </BannerStyled>
    );
};
export default Banner;