import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArticleCardWrapperGrid } from '../styles/StyledComponents';

const ArticleCard = ({ article }) => {
  const [redirect, setRedirect] = useState(false);

  ArticleCard.propTypes = {
    article: PropTypes.object,
  };

  const handleOnClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    const url = `/Articles/${article.id}`;
    return <Redirect path to={url} />;
  }

  return (
    <ArticleCardWrapperGrid onClick={handleOnClick}>
      {article.image !== undefined ? (
        <>
          <img src={article.image.file_path} alt="ilutrasjon av artikkel" />
          <h2>{article.title}</h2>
          <p>
            {article.category.name} <br />
            Lesetid: {Math.round(article.averageReadTime * 100) / 100} minutter
          </p>
          <p>{article.ingress.slice(0, 150)}</p>
        </>
      ) : (
        <>
          <section />
          <h2>{article.title}</h2>
          <p>
            {article.category.name}
            <br />
            Lesetid: {Math.round(article.averageReadTime * 100) / 100} minutter
          </p>
          <p>{article.ingress.slice(0, 150)}</p>
        </>
      )}
    </ArticleCardWrapperGrid>
  );
};

export default ArticleCard;
