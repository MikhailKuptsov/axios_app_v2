// src/components/Admin/AdminPage.js
import React from 'react';
import MainHeader from '../Main/MainHeader';

const AdminPage = () => {
  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <h1 className="text-center">Панель администратора</h1>
        <div className="alert alert-success">
          Добро пожаловать в административную панель
        </div>
      </div>
    </>
  );
};

export default AdminPage;