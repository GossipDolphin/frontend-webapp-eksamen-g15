import React from 'react';
import {
  ArticleButtonsUiSection,
  StandardButton,
} from '../styles/StyledComponents';
import { useAuthContext } from '../context/AuthProvider';

const ArticlesUiButtons = ({
  filterValue,
  setFilterValue,
  categoryList,
  setShowArticleForm,
  setSearchValue,
  searchValue,
}) => {
  const { isAdmin, isSuperAdmin } = useAuthContext();

  const toggleFilter = (e) => {
    setFilterValue(e.target.value);
  };
  const showCreateForm = () => {
    setShowArticleForm(true);
  };
  const setSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <ArticleButtonsUiSection>
      {(isAdmin || isSuperAdmin) && (
        <StandardButton onClick={showCreateForm}>NY ARTIKKEL</StandardButton>
      )}
      <label>Søk i tittel:</label>
      <textarea
        value={searchValue}
        onChange={setSearch}
        placeholder="SØK Tittel"
      />
      <select value={filterValue} onChange={toggleFilter}>
        <option value="">Ingen Filter</option>
        {categoryList.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </ArticleButtonsUiSection>
  );
};

export default ArticlesUiButtons;
