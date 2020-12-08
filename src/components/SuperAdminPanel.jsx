import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { getLogData } from '../utils/logService';
import {
  SuperAdminPanelWrapperGrid,
  TopTenArticleCard,
  TopTenArticles,
  AllArticles,
  AllUsersBehavior,
  ArticleCardAdmin,
  UserCardAdmin,
} from '../styles/StyledComponents';

const SuperAdminPanel = () => {
  const [message, setMessage] = useState('');
  const [topTenArticles, setTopTenArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [CSVdata, setCSVData] = useState('');

  useEffect(() => {
    const fetchLog = async () => {
      const { data } = await getLogData();
      if (!data.success) {
        setMessage(data.message);
      } else {
        setCSVData(JSON.stringify(data, null, 4));
        setAllArticles(data.data.articles);
        setUsers(data.data.users);
        setTopTenArticles(data.data.topTenArticles);
      }
    };
    fetchLog();
  }, []);

  return (
    <SuperAdminPanelWrapperGrid>
      <CSVLink data={CSVdata} target="_blank" filename="log.csv">
        last ned som CSV
      </CSVLink>
      <p>{message}</p>
      <TopTenArticles>
        <h2>Top 10 Artikler</h2>
        {topTenArticles.map((article, index) => (
          <TopTenArticleCard key={index}>
            <h4>
              Tittel: {article.title}
              <br />
              ID: {article._id}
            </h4>
            <p>Visninger: {article.timesRead}</p>
            <p>
              Laget: {new Date(article.createdAt).toLocaleDateString('NO-no')}
            </p>
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
              Laget: {new Date(article.createdAt).toLocaleDateString('NO-no')}
            </p>
            <p>
              Avg lesetid: {Math.round(article.averageReadTime * 100) / 100}{' '}
              minutter
            </p>
          </ArticleCardAdmin>
        ))}
      </AllArticles>
      <AllUsersBehavior>
        <h2>User behavior</h2>
        {users.map((user, index) => (
          <UserCardAdmin key={index}>
            <p>ID: {user._id}</p>
            <p>Role: {user.role}</p>
            <p>Laget: {user.createdAt}</p>
            <p>Antall artikler lest: {user.nrOfArticlesRead}</p>
            <select>
              {user.articlesRead.map((id, i) => (
                <option key={i} value={id}>
                  Artikkel ID: {id}
                </option>
              ))}
            </select>
          </UserCardAdmin>
        ))}
      </AllUsersBehavior>
    </SuperAdminPanelWrapperGrid>
  );
};

export default SuperAdminPanel;
