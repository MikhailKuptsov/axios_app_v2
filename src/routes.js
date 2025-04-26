// src/routes.js
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import MainPage from './components/Main/MainPage';
import { isAuthenticated } from './api/authCheck';

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const AuthRoute = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/Main_page" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      
      <Route element={<PrivateRoute />}>
        <Route path="/Main_page" element={<MainPage />} />
      </Route>

      <Route path="/" element={<Navigate to={isAuthenticated() ? "/Main_page" : "/login"} replace />} />
    </Routes>
  );
};

export default AppRoutes;