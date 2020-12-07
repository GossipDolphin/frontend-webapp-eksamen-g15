import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  CreateArticleFormStyled,
  CategoryOptionSection,
  StandardButton,
  ArticleCreatedPrompt,
  BackButton,
} from '../styles/StyledComponents';
import CreateCategory from './CreateCategory';
import { useAuthContext } from '../context/AuthProvider';
import {
  createArticle,
  createImage,
  updateArticle,
} from '../utils/articleService';
import Banner from './Banner';
import DetailedArticle from './DetailedArticle';

const CreateArticleForm = ({
  categoryList,
  setShowArticleForm,
  setCategoryList,
  articleToEdit,
  setDetailedArticle,
  setArticleToEdit,
}) => {
  const { isAdmin } = useAuthContext();
  const authors = ['Petter', 'Kalle', 'Bjørnson'];
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [subTitleOne, setSubTitleOne] = useState('');
  const [contentOne, setContentOne] = useState('');
  const [subTitleTwo, setSubTitleTwo] = useState('');
  const [contentTwo, setContentTwo] = useState('');
  const [category, setCategory] = useState(categoryList[0]._id);
  const [author, setAuthor] = useState('');
  const [secret, setSecret] = useState(false);
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [imageId, setImageId] = useState();
  const [submitButtonText, setSubmitButtonText] = useState('LAGRE');
  const [redirect, setRedirect] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };
  const handlesubTitleOneChange = (e) => {
    setSubTitleOne(e.target.value);
  };
  const handleContentOneChange = (e) => {
    setContentOne(e.target.value);
  };
  const handleSubTitleTwoChange = (e) => {
    setSubTitleTwo(e.target.value);
  };
  const handleContentTwoChange = (e) => {
    setContentTwo(e.target.value);
  };
  const handleCatheroyChange = (e) => {
    setCategory(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSecretChange = () => {
    setSecret(!secret);
  };
  const handleClickNewCatgegory = (e) => {
    e.preventDefault();
    setIsNewCategory(true);
  };
  const goToArtikles = () => {
    setShowArticleForm(false);
    setArticleToEdit(undefined);
  };

  const goBack = () => {
    setShowArticleForm(false);
  };

  useEffect(() => {
    if (articleToEdit !== undefined) {
      setTitle(articleToEdit.title);
      setSummary(articleToEdit.ingress);
      setSubTitleOne(articleToEdit.subtitleOne);
      setContentOne(articleToEdit.contentOne);
      setSubTitleTwo(articleToEdit.subtitleTwo);
      setContentTwo(articleToEdit.contentTwo);
      setAuthor(articleToEdit.author);
      setCategory(articleToEdit.category);
    }
  }, [articleToEdit, redirect]);

  const handleImageUpload = async (e) => {
    if (e.target.files[0] !== null) {
      const { data } = await createImage(e.target.files[0]);
      if (!data.success) {
        setMessage(data.message);
        console.log(data);
      } else {
        setImageId(data.data._id);
        console.log(data.data._id);
        setMessage('Image added');
      }
    }
  };

  useEffect(() => {
    setAuthor(authors[0]);
    if (articleToEdit !== undefined) {
      setSubmitButtonText('Oppdater');
    }
  }, [authors]);

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    if (isAdmin) {
      if (articleToEdit === undefined) {
        const { data } = await createArticle({
          title,
          ingress: summary,
          subtitleOne: subTitleOne,
          contentOne,
          subtitleTwo: subTitleTwo,
          contentTwo,
          category,
          author,
          secret,
          image: imageId,
        });
        if (!data.success) {
          setMessage(data.message);
          console.log(data);
        } else {
          setSuccess(true);
          setMessage('artikkel lagret');
        }
      } else {
        const { data } = await updateArticle({
          _id: articleToEdit._id,
          title,
          ingress: summary,
          subtitleOne: subTitleOne,
          contentOne,
          subtitleTwo: subTitleTwo,
          contentTwo,
          category,
          author,
          secret,
          image: imageId,
        });
        if (!data.success) {
          setMessage(data.message);
        } else {
          setSuccess(true);
          setMessage('artikkel oppdatert');
        }
      }
    }
  };

  return (
    <>
      {articleToEdit === undefined ? (
        <Banner bannerTitle="Ny artikkel" />
      ) : (
        <Banner bannerTitle="Rediger artikkel" />
      )}

      {isNewCategory && (
        <CreateCategory
          isAdmin={isAdmin}
          setIsNewCategory={setIsNewCategory}
          setCategoryList={setCategoryList}
          setCategory={setCategory}
        />
      )}

      {!success ? (
        <>
          <BackButton onClick={goBack}>Tilbake</BackButton>
          <CreateArticleFormStyled onSubmit={handleArticleSubmit}>
            <label htmlFor="Tittel">Tittel</label>
            <input
              value={title}
              onChange={handleTitleChange}
              type="textarea"
              required
            />
            <label htmlFor="Ingress">Ingress</label>
            <input
              maxLength="700"
              value={summary}
              onChange={handleSummaryChange}
              type="textarea"
              required
            />
            <label htmlFor="Under Tittel 1">Under Tittel 1</label>
            <input
              value={subTitleOne}
              onChange={handlesubTitleOneChange}
              type="textarea"
              required
            />
            <label htmlFor="Innhold 1">Innhold 1</label>
            <input
              value={contentOne}
              onChange={handleContentOneChange}
              type="textarea"
              required
            />
            <label htmlFor="Under tittel 2">Under Tittel 2</label>
            <input
              value={subTitleTwo}
              onChange={handleSubTitleTwoChange}
              type="textarea"
            />
            <label htmlFor="Innhold 2">Innhold 2</label>
            <input
              value={contentTwo}
              onChange={handleContentTwoChange}
              type="textarea"
            />
            <label htmlFor="Kategori">Kategori</label>
            <CategoryOptionSection>
              <select value={category} onChange={handleCatheroyChange}>
                {categoryList.map((category, index) => (
                  <option key={index} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button type="button" onClick={handleClickNewCatgegory}>
                NY
              </button>
            </CategoryOptionSection>
            <label htmlFor="Forfatter">Forfatter</label>
            <select value={author} onChange={handleAuthorChange}>
              {authors.map((author, index) => (
                <option key={index} value={author}>
                  {author}
                </option>
              ))}
            </select>
            <label>Hemmelig</label>
            <input onChange={handleSecretChange} type="checkbox" />
            <label>Last opp bilde</label>
            <input
              file={image}
              onChange={handleImageUpload}
              type="file"
              id="myfile"
              name="myfile"
              accept="image/png,image/jpeg,image/jpg"
            />
            <p>{message}</p>
            <StandardButton type="submit">{submitButtonText}</StandardButton>
          </CreateArticleFormStyled>
        </>
      ) : (
        <ArticleCreatedPrompt>
          <h1>{message}</h1>
          <StandardButton onClick={goToArtikles}>Ok</StandardButton>
        </ArticleCreatedPrompt>
      )}
    </>
  );
};

export default CreateArticleForm;
