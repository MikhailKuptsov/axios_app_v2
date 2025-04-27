// src/components/Admin/CreateFacilityPage.js
import React from 'react';
import MainHeader from '../Main/MainHeader';
import CreateFacilityForm from './CreateFacilityForm';

const CreateFacilityPage = () => {
  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <h1>Создание нового завода</h1>
        <CreateFacilityForm />
      </div>
    </>
  );
};

export default CreateFacilityPage;