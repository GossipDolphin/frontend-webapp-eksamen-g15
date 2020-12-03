import React from 'react';
import { ArticleCardWrapperGrid } from "../styles/StyledComponents"

const ArticleCard = ({article}) => {
    return (
        <ArticleCardWrapperGrid>
            <section></section>
            <h2>{article.title}</h2>
            <p>{article.category}</p>
            <p>{article.summary}</p>
        </ArticleCardWrapperGrid>
    )
}

export default ArticleCard;