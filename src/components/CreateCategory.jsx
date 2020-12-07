import React, { useState } from 'react';
import {
  CreateCategoryForm,
  CreateCategoryFormWrapper,
  StandardButton,
} from '../styles/StyledComponents';
import { createCategory, getCategories } from '../utils/articleService';

const CreateCategory = ({
  isAdmin,
  setIsNewCategory,
  setCategoryList,
  setCategory,
}) => {
  const [categoryInput, setCategoryInput] = useState('');
  const [message, setMessage] = useState('');

  const fetchCategories = async () => {
    const { data } = await getCategories();
    if (!data.success) {
      setMessage(data.message);
    } else {
      setCategoryList(data.data);
    }
  };

  const handleClickcreateCategory = async (e) => {
    e.preventDefault();
    if (isAdmin) {
      if (categoryInput !== '') {
        const { data } = await createCategory({
          name: categoryInput,
        });
        if (!data.success) {
          setMessage(data.message);
        } else {
          setIsNewCategory(false);
          setCategory(data.data._id);
          await fetchCategories();
        }
      } else {
        setMessage('Ingen kategori skrevet inn');
      }
    } else {
      setMessage('Du må være admin');
    }
  };

  const handleCategoryChange = (e) => {
    setCategoryInput(e.target.value);
  };

  return (
    <CreateCategoryFormWrapper>
      <CreateCategoryForm>
        <label>Ny Kategori</label>
        <textarea onChange={handleCategoryChange} />
        <StandardButton onClick={handleClickcreateCategory}>
          Create
        </StandardButton>
        <p>{message}</p>
      </CreateCategoryForm>
    </CreateCategoryFormWrapper>
  );
};

export default CreateCategory;
