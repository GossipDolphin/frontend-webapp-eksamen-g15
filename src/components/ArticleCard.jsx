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
    setTimeout(() => {
      setDetailedArticle(article);
    }, 10);
    return <Redirect path to={url} />;
  }

  return (
    <ArticleCardWrapperGrid onClick={handleOnClick}>
      {article.image !== undefined ? (
        <>
          <img src={article.image.file_path} />
          <h2>{article.title}</h2>
          <p>{article.category.name}</p>
          <p>{article.ingress}</p>
        </>
      ) : (
        <>
          <section />
          <h2>{article.title}</h2>
          <p>{article.category.name}</p>
          <p>{article.ingress}</p>
        </>
      )}
    </ArticleCardWrapperGrid>
  );
};

export default ArticleCard;
