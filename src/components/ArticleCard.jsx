import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ArticleCardWrapperGrid } from '../styles/StyledComponents';

const ArticleCard = ({ article, setDetailedArticle }) => {
  const [redirect, setRedirect] = useState(false);
  const handleOnClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    const url = `/Articles/${article.id}`;
    setDetailedArticle(article);
    return <Redirect path to={url} />;
  }

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
