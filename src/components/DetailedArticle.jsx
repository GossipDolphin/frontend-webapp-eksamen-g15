import React from 'react';
import {
  DetailedArticleSection,
  DetailedArticleButtonSection,
  StandardButton,
} from '../styles/StyledComponents';

const DetailedArticle = ({ detailedArticle, setDetailedArticle }) => {
  const handleBackClick = () => {
    setDetailedArticle(null);
  };

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
