import React, { useState, useEffect } from 'react';
import {
  CreateArticleFormStyled,
  CategoryOptionSection,
  StandardButton,
} from '../styles/StyledComponents';
import CreateCategory from './CreateCategory';
import { useAuthContext } from '../context/AuthProvider';
import { createArticle } from '../utils/articleService';

const CreateArticleForm = ({ categoryList }) => {
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
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [message, setMessage] = useState('');

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
  const handleClickNewCatgegory = (e) => {
    e.preventDefault();
    setIsNewCategory(true);
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
      });
      if (!data.success) {
        setMessage(data.message);
        console.log(data);
      } else {
        setMessage('success created');
        console.log(data.message);
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
            <option key={index} value={category.id}>
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
      <p>{message}</p>
      <StandardButton onClick={handleClickNewArticle}>CREATE</StandardButton>
    </CreateArticleFormStyled>
  );
};

export default CreateArticleForm;
