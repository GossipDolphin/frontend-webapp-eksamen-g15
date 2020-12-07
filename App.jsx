import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './src/styles/index.css';
import { Routes } from './src/routes/routes.jsx';
import AuthProvider from './src/context/AuthProvider.jsx';
import Footer from './src/components/Footer';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes />
    </Router>
    <Footer orgnr="007 007 007" email="lg@lgror.no" tlf="99 00 00 00" />
  </AuthProvider>
);

export default App;
