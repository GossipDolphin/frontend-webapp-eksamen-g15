import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  DetailedArticleSection,
  DetailedArticleButtonSection,
  StandardButton,
} from '../styles/StyledComponents';

const DetailedArticle = ({ detailedArticle, setDetailedArticle }) => {
  const [redirect, setRedirect] = useState(false);
  const handleBackClick = () => {
    setRedirect(true);
  };
  if(redirect){
    setDetailedArticle(null);
    const url = '/Articles';
    return <Redirect path to={url} />;
  }

  return (
    <DetailedArticleSection>
      <button onClick={handleBackClick}>TILBAKE</button>
      <section>
        <p>Av {detailedArticle.author}</p>
        <p>{new Date(detailedArticle.createdAt).toLocaleDateString("NO-no")}</p>
      </section>
      <p>{detailedArticle.summary}</p>
      <h2>{detailedArticle.subtitleOne}</h2>
      <p>{detailedArticle.contentOne}</p>
      <h2>{detailedArticle.subtitleTwo}</h2>
      <p>{detailedArticle.contentTwo}</p>
      <p>{detailedArticle.category.name}</p>
      <DetailedArticleButtonSection>
        <StandardButton>SLETT</StandardButton>
        <StandardButton>REDIGER</StandardButton>
      </DetailedArticleButtonSection>
    </DetailedArticleSection>
  );
};

export default DetailedArticle;
