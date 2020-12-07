import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ArticleCardWrapperGrid } from '../styles/StyledComponents';
import { getArticleByid } from '../utils/articleService';

const ArticleCard = ({ article, setDetailedArticle }) => {
  const [redirect, setRedirect] = useState(false);
  const handleOnClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    const url = `/Articles/${article.id}`;
    const fetch = async () => {
      const { data } = await getArticleByid(article.id);
      if (data.success) {
        setDetailedArticle(data.data);
      }
    };
    fetch();
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
