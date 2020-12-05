import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './src/styles/index.css';
import { Routes } from './src/routes/routes.jsx';
import AuthProvider from './src/context/AuthProvider.jsx';

const App = () => (
    <AuthProvider>
        <Router>
            <Routes />
        </Router>
    </AuthProvider>
);

export default App;
