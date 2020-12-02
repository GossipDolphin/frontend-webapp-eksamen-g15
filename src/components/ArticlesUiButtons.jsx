import React from 'react';
import {ArticleButtonsUiSection, StandardButton} from "../styles/StyledComponents";

const ArticlesUiButtons = () => {
    return(
        <ArticleButtonsUiSection>
            <StandardButton>NY ARTIKKEL</StandardButton>
            <StandardButton>SØK</StandardButton>
            <StandardButton>FILTER</StandardButton>
        </ArticleButtonsUiSection>
    )
}

export default ArticlesUiButtons;