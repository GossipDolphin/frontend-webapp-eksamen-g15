import React, { useState, useEffect } from 'react';
import { ArticlesSection, PageNumberButtonsSection } from "../styles/StyledComponents";
import Banner from "../components/Banner";
import ArticlesUiButtons from "../components/ArticlesUiButtons"
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import DetailedArticle from "../components/DetailedArticle";
import CreateArticleForm from "../components/CreateArticleForm";
import { getCategories } from "../utils/articleService";

const Articles = () => {

    const [articlesList, setArticlesList] = useState([])
    const articlesPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [detailedArticle, setDetailedArticle] = useState(null);
    const [filterValue, setFilterValue] = useState("")
    const [categoryList, setCategoryList] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [showArticleForm, setShowArticleForm] = useState(false);

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
        for (let i = 1; i < 13; i++) {
            if (i % 2 === 0) {
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
            else {
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
                        "Vask Montering"
                    )
                )
            }
        }
        return generatedArticles;
    }

    const generatePageNumbers = (list) => {
        const pageNumbersGenerated = [];
        for (let i = 1; i <= Math.ceil(list.length / articlesPerPage); i++) {
            pageNumbersGenerated.push(i);
        }
        return pageNumbersGenerated;
    }
    /*
    //change it to return categories from api call
    const getCategoryes = async () => {
        const { data, err } = await getCategories();
        if (err) {
            console.log(err)
        }
        else {
            setCategoryList(data)
        }
        return categoryList;
    }
    */

    useEffect(() => {
        //setArticlesList(generateArticles)

        const fetchData = async () => {
            const {data, err} = await getCategories();
            if (err) {
                console.log(err)
            }
            else {
                setCategoryList(data);
                console.log(data)
            }
        }
        fetchData();
    }, [])
    /*
        useEffect(() => {
    
            const setColorOnSelectedPageNumber = () => {
                pageNumbers.forEach(id => {
                    if (document.getElementById(id) !== null) {
                        document.getElementById(id).style.backgroundColor = "gray";
                        if (id === currentPage) {
                            document.getElementById(id).style.backgroundColor = "black";
                        }
                    }
                });
            }
    
            if (pageNumbers.length < 1) {
                setPageNumbers(generatePageNumbers(articlesList))
            }
            if (detailedArticle === null) {
                setColorOnSelectedPageNumber();
            }
        }, [pageNumbers.length, detailedArticle, articlesList, currentPage, pageNumbers])
        */
    useEffect(() => {
        if (filterValue.length > 1) {
            const filter = articlesList.filter(article => article.category === filterValue)
            setFilteredArticles(filter)
            setPageNumbers(generatePageNumbers(filter))
            setCurrentPage(1)
        }
        else {
            setPageNumbers(generatePageNumbers(articlesList))
        }
    }, [filterValue, articlesList])

    const initCurrentArticles = (list) => {
        const indexOfLastArticle = currentPage * articlesPerPage;
        const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
        const currentArticles = list.slice(indexOfFirstArticle, indexOfLastArticle);
        return currentArticles;
    }

    return (
        <>{showArticleForm ? <>
            <Banner bannerTitle="Ny artikkel"></Banner>
            <CreateArticleForm setCategoryList={setCategoryList} categoryList={categoryList}></CreateArticleForm>
            <Footer orgnr="007 007 007" email="lg@lgror.no" tlf="99 00 00 00"></Footer>
        </> :
            <>{detailedArticle === null ?
                <>
                    <Banner bannerTitle="Fagartikler"></Banner>
                    <ArticlesSection>
                        <ArticlesUiButtons filterValue={filterValue} setFilterValue={setFilterValue} categoryList={categoryList} setShowArticleForm={setShowArticleForm}></ArticlesUiButtons>
                        {filterValue.length > 1 ? initCurrentArticles(filteredArticles).map((article, index) => {
                            return (
                                <ArticleCard key={index} article={article} setDetailedArticle={setDetailedArticle}></ArticleCard>
                            )
                        }) : initCurrentArticles(articlesList).map((article, index) => {
                            return (
                                <ArticleCard key={index} article={article} setDetailedArticle={setDetailedArticle}></ArticleCard>
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
        }
        </>
    )
}

export default Articles;