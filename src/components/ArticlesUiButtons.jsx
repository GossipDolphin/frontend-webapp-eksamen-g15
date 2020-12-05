import React from 'react';
import { ArticleButtonsUiSection, StandardButton } from "../styles/StyledComponents";
import { useAuthContext } from "../context/AuthProvider"

const ArticlesUiButtons = ({ filterValue, setFilterValue, categoryList, setShowArticleForm }) => {
    const { isAdmin } = useAuthContext();


    const toggleFilter = (e) => {
        setFilterValue(e.target.value)
    }
    const showCreateForm = () => {
        setShowArticleForm(true)
    }
    return (
        <ArticleButtonsUiSection>{isAdmin?
            <StandardButton onClick={showCreateForm}>NY ARTIKKEL</StandardButton>
            :<></>}
            <textarea placeholder="SØK"></textarea>
            <StandardButton>SØK</StandardButton>
            <select value={filterValue} onChange={toggleFilter}>
                <option value="">Ingen Filter</option>
                {categoryList.map((category, index) => {
                    return (
                        <option key={index} value={category.name}>{category.name}</option>
                    )
                })}
            </select>
        </ArticleButtonsUiSection>
    )
}

export default ArticlesUiButtons;