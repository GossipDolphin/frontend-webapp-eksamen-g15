import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/routes';
import AuthProvider from "../src/context/AuthProvider.jsx";

ReactDOM.render(
  <AuthProvider>
  <Router>
    <Routes />
  </Router>
  </AuthProvider>,
  document.getElementById('root')
);
reportWebVitals();
