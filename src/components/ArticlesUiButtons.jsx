import React from 'react';
import { ArticleButtonsUiSection, StandardButton } from "../styles/StyledComponents";

const ArticlesUiButtons = ({ filterValue, setFilterValue, categoryList, setShowArticleForm }) => {

    const toggleFilter = (e) => {
        setFilterValue(e.target.value)
    }
    const showCreateForm = () => {
        setShowArticleForm(true)
    }
    return (
        <ArticleButtonsUiSection>
            <StandardButton onClick={showCreateForm}>NY ARTIKKEL</StandardButton>
            <textarea placeholder="SØK"></textarea>
            <StandardButton>SØK</StandardButton>
            <select value={filterValue} onChange={toggleFilter}>
                <option value="">Ingen Filter</option>
                {categoryList.map((category, index) => {
                    return (
                        <option key={index} value={category}>{category}</option>
                    )
                })}
            </select>
        </ArticleButtonsUiSection>
    )
}

export default ArticlesUiButtons;