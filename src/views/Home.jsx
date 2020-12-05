import React from 'react';
import { ArticlesSectionStyled } from '../styles/StyledComponents';
import Banner from '../components/Banner';
import BasicArticle from '../components/BasicArticle';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <ArticlesSectionStyled>
      <Banner bannerTitle="Velkommen til FG Rørleggerservice AS" />
      <BasicArticle title="Kontorer" url="/Offices" />
      <BasicArticle title="Kontakt" url="/Contact" />
      <BasicArticle
        title="Se våre fagartikler om oppusing av bad"
        url="/Articles"
      />
    </ArticlesSectionStyled>
    <Footer orgnr="007 007 007" email="lg@lgror.no" tlf="99 00 00 00" />
  </>
);

export default Home;
