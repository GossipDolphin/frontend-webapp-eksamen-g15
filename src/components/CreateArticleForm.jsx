import React, { useState, useEffect } from 'react';
import {
  CreateArticleFormStyled,
  CategoryOptionSection,
  StandardButton,
} from '../styles/StyledComponents';
import CreateCategory from './CreateCategory';
import { useAuthContext } from '../context/AuthProvider';
import { createArticle, createImage } from '../utils/articleService';

const CreateArticleForm = ({
  categoryList,
  setShowArticleForm,
  setDetailedArticle,
}) => {
  const { isAdmin } = useAuthContext();
  const authors = ['Petter', 'Kalle', 'Bjørnson'];
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [subTitleOne, setSubTitleOne] = useState('');
  const [contentOne, setContentOne] = useState('');
  const [subTitleTwo, setSubTitleTwo] = useState('');
  const [contentTwo, setContentTwo] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [secret, setSecret] = useState(false);
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [createdArticle, setCreatedArticle] = useState({});
  const [image, setImage] = useState(null);
  const [imageId, setImageId] = useState('');

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
  const handleClickSeeArticle = () => {
    setShowArticleForm(false);
    setDetailedArticle(createdArticle);
  };

  useEffect(() => {
    setAuthor(authors[0]);
    if (categoryList.length > 1) {
      setCategory(categoryList[0]._id);
    }
  }, []);

  const handleClickNewArticle = async (e) => {
    e.preventDefault();
    if (isAdmin) {
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
        setMessage('success created');
        setSuccess(true);
        setCreatedArticle(data.data);
        console.log(data.data);
      }
    } else {
      setMessage('Ingen title skrevet inn');
    }
  };

  return (
    <CreateArticleFormStyled>
      {isNewCategory && (
        <CreateCategory isAdmin={isAdmin} setIsNewCategory={setIsNewCategory} />
      )}
      <label htmlFor="Tittel">Tittel</label>
      <input value={title} onChange={handleTitleChange} type="textarea" />
      <label htmlFor="Ingress">Ingress</label>
      <input value={summary} onChange={handleSummaryChange} type="textarea" />
      <label htmlFor="Under Tittel 1">Under Tittel 1</label>
      <input
        value={subTitleOne}
        onChange={handlesubTitleOneChange}
        type="textarea"
      />
      <label htmlFor="Innhold 1">Innhold 1</label>
      <input
        value={contentOne}
        onChange={handleContentOneChange}
        type="textarea"
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
      {!success ? (
        <StandardButton onClick={handleClickNewArticle}>CREATE</StandardButton>
      ) : (
        <StandardButton onClick={handleClickSeeArticle}>
          Se Arikkel
        </StandardButton>
      )}
    </CreateArticleFormStyled>
  );
};

export default CreateArticleForm;
