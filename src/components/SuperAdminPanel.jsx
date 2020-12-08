import React, { useState, useEffect } from 'react';
import { getTopTenArticles, getArticles } from '../utils/articleService';
import {
  SuperAdminPanelWrapperGrid,
  TopTenArticleCard,
  TopTenArticles,
  AllArticles,
  AllUsersBehavior,
  ArticleCardAdmin,
} from '../styles/StyledComponents';

const SuperAdminPanel = () => {
  const [message, setMessage] = useState('');
  const [topTenArticles, setTopTenArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const fetchTopTenArticles = async () => {
      const { data } = await getTopTenArticles();
      if (!data.success) {
        setMessage(data.message);
      } else {
        setTopTenArticles(data.data);
      }
    };

    const fetchArticles = async () => {
      const { data } = await getArticles();
      if (!data.success) {
        setMessage(data.message);
      } else {
        setAllArticles(data.data);
      }
    };
    fetchArticles();
    fetchTopTenArticles();
  }, []);

  return (
    <SuperAdminPanelWrapperGrid>
      <TopTenArticles>
        <h2>Top 10 Artikler</h2>
        {topTenArticles.map((article, index) => (
          <TopTenArticleCard key={index}>
            <h4>
              Tittel: {article.title}
              <br />
              ID: {article._id}
            </h4>
            <p>Antall lesninger: {article.timesRead}</p>
            <p>
              Avg lesetid: {Math.round(article.averageReadTime * 100) / 100}{' '}
              minutter
            </p>
          </TopTenArticleCard>
        ))}
      </TopTenArticles>
      <AllArticles>
        <h2>Alle artikler</h2>
        {allArticles.map((article, index) => (
          <ArticleCardAdmin key={index}>
            <p>Tittel: {article.title}</p>
            <p>ID: {article._id}</p>
            <p>Visninger: {article.timesRead}</p>
            <p>
              Avg lesetid: {Math.round(article.averageReadTime * 100) / 100}{' '}
              minutter
            </p>
          </ArticleCardAdmin>
        ))}
      </AllArticles>
      <AllUsersBehavior />
    </SuperAdminPanelWrapperGrid>
  );
};

export default SuperAdminPanel;
