import React, { useState, useEffect } from 'react';
import { ArticlesSection, PageNumberButtonsSection } from "../styles/StyledComponents";
import Banner from "../components/Banner";
import ArticlesUiButtons from "../components/ArticlesUiButtons"
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import DetailedArticle from "../components/DetailedArticle"

const Articles = () => {

    const [articlesList, setArticlesList] = useState([])
    const articlesPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [detailedArticle, setDetailedArticle] = useState(null);
    class Article {
        constructor(title, summary, subTitleOne, contentOne, subTitleTwo, contentTwo, dateCreated, author, category) {
            this.title = title;
            this.summary = summary
            this.subTitleOne = subTitleOne;
            this.contentOne = contentOne;
            this.subTitleTwo = subTitleTwo;
            this.contentTwo = contentTwo
            this.dateCreated = dateCreated;
            this.author = author;
            this.category = category;
        }
    }

    const changePage = (e) => {
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
                    "sub title 1",
                    "content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis blandit urna et consequat. Aliquam erat volutpat. Nam dui erat, tincidunt in finibus ut, tempor in odio. Nunc egestas ex sed vulputate porta. Maecenas pretium nisi id libero pulvinar, vitae sollicitudin justo euismod. In tristique purus ut suscipit mattis. Sed at lectus feugiat, blandit turpis ut, convallis lectus. Curabitur consectetur orci id justo porta, at aliquet libero semper. Donec ultrices facilisis malesuada. In at felis orci. Suspendisse quis eros in dolor rutrum mattis a eu dui. Cras interdum semper nisl et eleifend. Cras pulvinar odio nunc, ac fringilla ex malesuada non. Curabitur et elit et justo dignissim porta. Aenean massa est, facilisis et erat sit amet, aliquet maximus velit. Mauris erat lacus, pharetra in vulputate et, tempor sed velit. Donec id lectus vel odio lobortis consectetur. Phasellus mollis orci felis, quis cursus magna consectetur sed. Integer gravida ultricies ultricies. Donec convallis nibh at molestie interdum. Morbi hendrerit, purus eget porta dictum, turpis risus maximus leo, ac molestie sem lorem a felis. Proin pretium ornare orci a gravida. Nullam eu dignissim nisi. Sed porta, dui vitae commodo posuere, neque urna feugiat arcu, nec mattis orci velit vitae diam. Nulla malesuada consectetur.",
                    "subtitle 2",
                    "content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis blandit urna et consequat. Aliquam erat volutpat. Nam dui erat, tincidunt in finibus ut, tempor in odio. Nunc egestas ex sed vulputate porta. Maecenas pretium nisi id libero pulvinar, vitae sollicitudin justo euismod. In tristique purus ut suscipit mattis. Sed at lectus feugiat, blandit turpis ut, convallis lectus. Curabitur consectetur orci id justo porta, at aliquet libero semper. Donec ultrices facilisis malesuada. In at felis orci. Suspendisse quis eros in dolor rutrum mattis a eu dui. Cras interdum semper nisl et eleifend. Cras pulvinar odio nunc, ac fringilla ex malesuada non. Curabitur et elit et justo dignissim porta. Aenean massa est, facilisis et erat sit amet, aliquet maximus velit. Mauris erat lacus, pharetra in vulputate et, tempor sed velit. Donec id lectus vel odio lobortis consectetur. Phasellus mollis orci felis, quis cursus magna consectetur sed. Integer gravida ultricies ultricies. Donec convallis nibh at molestie interdum. Morbi hendrerit, purus eget porta dictum, turpis risus maximus leo, ac molestie sem lorem a felis. Proin pretium ornare orci a gravida. Nullam eu dignissim nisi. Sed porta, dui vitae commodo posuere, neque urna feugiat arcu, nec mattis orci velit vitae diam. Nulla malesuada consectetur.",
                    new Date(Date.now()).toLocaleDateString("no-NO"),
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
        if (detailedArticle === null) {
            setColorOnSelectedPageNumber();
        }
    })

    const setColorOnSelectedPageNumber = () => {
        pageNumbers.forEach(id => {
            document.getElementById(id).style.backgroundColor = "gray";
            if (id === currentPage) {
                document.getElementById(id).style.backgroundColor = "black";
            }
        });
    }

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articlesList.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        <>{detailedArticle === null ?
            <>
                <Banner bannerTitle="Fagartikler"></Banner>
                <ArticlesSection>
                    <ArticlesUiButtons></ArticlesUiButtons>
                    {currentArticles.map((article) => {
                        return (
                            <ArticleCard article={article} setDetailedArticle={setDetailedArticle}></ArticleCard>
                        )
                    })}
                    <PageNumberButtonsSection>
                        {pageNumbers.map(number => {
                            return (
                                <button
                                    key={number}
                                    id={number}
                                    onClick={changePage}>{number}</button>
                            )
                        })}
                    </PageNumberButtonsSection>
                </ArticlesSection>
            </>
            : <>
                <Banner bannerTitle={detailedArticle.title}></Banner>
                <DetailedArticle detailedArticle={detailedArticle} setDetailedArticle={setDetailedArticle}></DetailedArticle>
            </>}
            <Footer orgnr="007 007 007" email="lg@lgror.no" tlf="99 00 00 00"></Footer>
        </>
    )
}

export default Articles;