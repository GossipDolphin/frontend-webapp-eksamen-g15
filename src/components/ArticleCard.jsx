import React from 'react';
import { ArticleCardWrapperGrid } from '../styles/StyledComponents';

const ArticleCard = ({ article, setDetailedArticle }) => {
  const handleOnClick = () => {
    setDetailedArticle(article);
  };

  return (
    <ArticleCardWrapperGrid onClick={handleOnClick}>
      <section />
      <h2>{article.title}</h2>
      <p>{article.category.name}</p>
      <p>{article.ingress}</p>
    </ArticleCardWrapperGrid>
  );
};

export default ArticleCard;
