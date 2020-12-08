import React from 'react';
import { ArticlesSectionStyled } from '../styles/StyledComponents';
import Banner from '../components/Banner';
import BasicArticle from '../components/BasicArticle';

const Home = () => (
  <ArticlesSectionStyled>
    <Banner bannerTitle="Velkommen til FG Rørleggerservice AS" />
    <BasicArticle title="Kontorer" url="/Offices" />
    <BasicArticle title="Kontakt" url="/Contact" />
    <BasicArticle
      title="Se våre fagartikler om oppusing av bad"
      url="/Articles"
    />
  </ArticlesSectionStyled>
);

export default Home;
