// src/components/Admin/CreateUserPage.js
import React from 'react';
import MainHeader from '../Main/MainHeader';
import CreateUserForm from './CreateUserForm';

const CreateUserPage = () => {
  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <h1>Создание нового пользователя</h1>
        <CreateUserForm />
      </div>
    </>
  );
};

export default CreateUserPage;