import React from 'react';
import { ArticlesSection } from "../styles/StyledComponents";
import Banner from "../components/Banner";
import ArticlesUiButtons from "../components/ArticlesUiButtons"

const Articles = () => {
    return (
        <>
            <Banner bannerTitle="Fagartikler"></Banner>
            <ArticlesSection>
                <ArticlesUiButtons></ArticlesUiButtons>
            </ArticlesSection>
        </>
    )
}

export default Articles;