import React from 'react';
import { ArticlesSectionStyled } from "../styles/StyledComponents";
import Banner from "../components/Banner";
import BasicArticle from "../components/BasicArticle";
import Footer from "../components/Footer"

const Home = () => {

    return (
        <>
            <ArticlesSectionStyled>
                <Banner bannerTitle="Velkommen til FG Rørleggerservice AS"></Banner>
                <BasicArticle title="Kontorer" url="/Offices"></BasicArticle>
                <BasicArticle title="Kontakt" url="/Contact"></BasicArticle>
                <BasicArticle title="Se våre fagartikler om oppusing av bad" url="/Articles"></BasicArticle>
            </ArticlesSectionStyled>
            <Footer orgnr="007 007 007" email="lg@lgror.no" tlf="99 00 00 00"></Footer>
        </>
    )
}

export default Home;