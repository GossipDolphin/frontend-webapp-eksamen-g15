import React from 'react';
import { ArticleCardWrapperGrid } from "../styles/StyledComponents"

const ArticleCard = ({ article, setDetailedArticle }) => {

    const handleOnClick = () => {
        setDetailedArticle(article);
    }

    return (
        <ArticleCardWrapperGrid onClick={handleOnClick}>
            <section></section>
            <h2>{article.title}</h2>
            <p>{article.category}</p>
            <p>{article.summary}</p>
        </ArticleCardWrapperGrid>
    )
}

export default ArticleCard;