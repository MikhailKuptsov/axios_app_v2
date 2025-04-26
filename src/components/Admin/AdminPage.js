// src/components/Admin/AdminPage.js
import React from 'react';
import MainHeader from '../Main/MainHeader';
import DropdownBlockChoice from '../UI/DropdownBlockChoice';

const AdminPage = () => {
  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <h1 className="text-center">Панель администратора</h1>
        <div className="alert alert-success mb-4">
          Добро пожаловать в административную панель
        </div>
        
        <div className="admin-accordion-container">
          <div className="mb-3">
            <DropdownBlockChoice 
              label_name="Настройка пользователей" 
              link_page="/Admin_users" 
            />
          </div>
          <div className="mb-3">
            <DropdownBlockChoice 
              label_name="Настройка предприятий" 
              link_page="/Admin_Facilities" 
            />
          </div>
          <div className="mb-3">
            <DropdownBlockChoice 
              label_name="Настройка сайта" 
              link_page="/Admin_settings" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;