// src/routes.js
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import MainPage from './components/Main/MainPage';
import AdminPage from './components/Admin/AdminPage';
import AdminUsersPage from './components/Admin/AdminUsersPage';
import AdminFacilitiesPage from './components/Admin/AdminFacilitiesPage';
import AdminSettingsPage from './components/Admin/AdminSettingsPage';

import { isAuthenticated, checkAdmin } from './api/authCheck';

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const AdminRoute = () => {
  return checkAdmin() ? <Outlet /> : <Navigate to="/Main_page" replace />;
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
        
        <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/Admin_users" element={<AdminUsersPage />} />
            <Route path="/Admin_Facilities" element={<AdminFacilitiesPage />} />
            <Route path="/Admin_settings" element={<AdminSettingsPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/Main_page" replace />} />
    </Routes>
  );
};

export default AppRoutes;