import React from 'react';
import { DetailedArticleSection, DetailedArticleButtonSection, StandardButton } from "../styles/StyledComponents";

const DetailedArticle = ({ detailedArticle, setDetailedArticle }) => {

    const handleBackClick = () => {
        setDetailedArticle(null);
    }

    return (
        <DetailedArticleSection>
            <button onClick={handleBackClick}>TILBAKE</button>
            <section>
                <p>Av {detailedArticle.author}</p>
                <p>{detailedArticle.dateCreated}</p>
            </section>
            <p>{detailedArticle.summary}</p>
            <h2>{detailedArticle.subTitleOne}</h2>
            <p>{detailedArticle.contentOne}</p>
            <h2>{detailedArticle.subTitleTwo}</h2>
            <p>{detailedArticle.contentTwo}</p>
            <p>{detailedArticle.category}</p>
            <DetailedArticleButtonSection>
                <StandardButton>SLETT</StandardButton>
                <StandardButton>REDIGER</StandardButton>
            </DetailedArticleButtonSection>
        </DetailedArticleSection>
    )
}

export default DetailedArticle;