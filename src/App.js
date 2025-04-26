// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router basename="/">
      <AppRoutes />
    </Router>
  );
};

export default App;