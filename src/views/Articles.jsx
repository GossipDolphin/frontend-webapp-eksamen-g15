import React, { useState, useEffect } from 'react';
import { ArticlesSection, PageNumberButtonsSection } from "../styles/StyledComponents";
import Banner from "../components/Banner";
import ArticlesUiButtons from "../components/ArticlesUiButtons"
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

const Articles = () => {

    const [articlesList, setArticlesList] = useState([])
    const articlesPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    class Article {
        constructor(title, summary, content, date, author, category) {
            this.title = title;
            this.summary = summary
            this.content = content;
            this.date = date;
            this.author = author;
            this.category = category;
        }
    }

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id));
    }

    //remove after api is up ---- change it to api call to get articles ----
    const generateArticles = () => {
        const generatedArticles = [];
        for (let i = 0; i < 12; i++) {
            generatedArticles.push(
                new Article(
                    "title" + i,
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dapibus tellus non imperdiet. Nam nisl dolor, vehicula eu faucibus id, auctor et dui. Vestibulum aliquet lobortis odio. Aenean cursus tortor nibh, quis imperdiet lectus pretium at. Nulla cursus justo at aliquam commodo. Integer nec pharetra nisi. Vivamus nisi enim, pellentesque ut auctor consectetur, auctor eu tellus. Donec finibus libero enim, quis auctor nibh consectetur eu. Quisque lobortis dapibus vehicula. Morbi vitae volutpat neque. Pellentesque enim ante, auctor sit amet tortor vel, euismod volutpat nunc. Morbi quis placerat lorem. Nulla tincidunt in magna at pretium. Vivamus pulvinar lectus turpis, at.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis labore ipsam iure reprehenderit rem nobis maxime modi ad nam quae laborum accusantium, necessitatibus laboriosam omnis officia in mollitia possimus porro.",
                    Date.now.toString(),
                    "author" + i,
                    "Avløpsrens"
                )
            )
        }
        return generatedArticles;
    }

    const generatePageNumbers = () => {
        const pageNumbersGenerated = [];
        for (let i = 1; i <= Math.ceil(articlesList.length / articlesPerPage); i++) {
            pageNumbersGenerated.push(i);
        }
        return pageNumbersGenerated;
    }

    useEffect(() => {
        setArticlesList(generateArticles)
        setPageNumbers(generatePageNumbers)
    }, )

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articlesList.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        <>
            <Banner bannerTitle="Fagartikler"></Banner>
            <ArticlesSection>
                <ArticlesUiButtons></ArticlesUiButtons>
                {currentArticles.map((article) => {
                    return (
                        <ArticleCard article={article}></ArticleCard>
                    )
                })}
                <PageNumberButtonsSection>
                {pageNumbers.map(number => {
                    return (
                        <button
                            key={number}
                            id={number}
                            onClick={handleClick}>{number}</button>
                    )
                })}
                </PageNumberButtonsSection>
            </ArticlesSection>
            <Footer orgnr="007 007 007" email="lg@lgror.no" tlf="99 00 00 00"></Footer>
        </>
    )
}

export default Articles;