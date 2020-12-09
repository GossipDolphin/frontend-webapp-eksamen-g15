import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { deleteArticle } from '../utils/articleService';
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
  setDeleted,
}) => {
  const [redirect, setRedirect] = useState(false);
  const { isAdmin, isSuperAdmin } = useAuthContext();
  const [message, setMessage] = useState('');
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

  const handleClickDelete = async () => {
    const { data } = await deleteArticle(detailedArticle._id);
    if (data.message) {
      setMessage(data.message);
    } else {
      setRedirect(true);
      setDetailedArticle(null);
      setDeleted(true);
    }
  };

  return (
    <DetailedArticleSection>
      <button type="button" onClick={handleBackClick}>
        TILBAKE
      </button>
      <section>
        <p>Av {detailedArticle.author}</p>
        <p>
          {new Date(detailedArticle.createdAt).toLocaleDateString('NO-no')}
          <br />
          Lesetid: {Math.round(detailedArticle.averageReadTime * 100) / 100}
          minutter
        </p>
      </section>
      <p>{detailedArticle.ingress}</p>
      <h2>{detailedArticle.subtitleOne}</h2>
      <p>{detailedArticle.contentOne}</p>
      <h2>{detailedArticle.subtitleTwo}</h2>
      <p>{detailedArticle.contentTwo}</p>
      <p>{detailedArticle.category.name}</p>
      {(isAdmin || isSuperAdmin) && (
        <DetailedArticleButtonSection>
          <StandardButton onClick={handleClickDelete}>SLETT</StandardButton>
          <StandardButton onClick={handleClick}>REDIGER</StandardButton>
        </DetailedArticleButtonSection>
      )}
      <p>{message}</p>
    </DetailedArticleSection>
  );
};

export default DetailedArticle;
