import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  DetailedArticleSection,
  DetailedArticleButtonSection,
  StandardButton,
} from '../styles/StyledComponents';
import { useAuthContext } from '../context/AuthProvider';

const DetailedArticle = ({
  detailedArticle,
  setDetailedArticle,
  setShowArticleForm,
  setArticleToEdit,
}) => {
  const [redirect, setRedirect] = useState(false);
  const { isAdmin } = useAuthContext();
  const handleBackClick = () => {
    setRedirect(true);
  };
  if (redirect) {
    setTimeout(() => {
      setDetailedArticle(null);
    }, 10);
    const url = '/Articles';
    return <Redirect path to={url} />;
  }

  const handleClick = () => {
    setArticleToEdit(detailedArticle);
    setShowArticleForm(true);
  };

  return (
    <DetailedArticleSection>
      <button onClick={handleBackClick}>TILBAKE</button>
      <section>
        <p>Av {detailedArticle.author}</p>
        <p>{new Date(detailedArticle.createdAt).toLocaleDateString('NO-no')}</p>
      </section>
      <p>{detailedArticle.ingress}</p>
      <h2>{detailedArticle.subtitleOne}</h2>
      <p>{detailedArticle.contentOne}</p>
      <h2>{detailedArticle.subtitleTwo}</h2>
      <p>{detailedArticle.contentTwo}</p>
      <p>{detailedArticle.category.name}</p>
      {isAdmin && (
        <DetailedArticleButtonSection>
          <StandardButton>SLETT</StandardButton>
          <StandardButton onClick={handleClick}>REDIGER</StandardButton>
        </DetailedArticleButtonSection>
      )}
    </DetailedArticleSection>
  );
};

export default DetailedArticle;
