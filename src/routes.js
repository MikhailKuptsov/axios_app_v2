// src/routes.js
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import MainPage from './components/Main/MainPage';
import AdminPage from './components/Admin/AdminPage';
import { isAuthenticated, isAdmin } from './api/authCheck';

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const AdminRoute = () => {
  return isAdmin() ? <Outlet /> : <Navigate to="/Main_page" replace />;
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

      <Route element={<PrivateRoute />}>
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to={isAuthenticated() ? "/Main_page" : "/login"} replace />} />
    </Routes>
  );
};

export default AppRoutes;