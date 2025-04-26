// src/components/Main/MainPage.js
import React from 'react';
import MainHeader from './MainHeader';
import UserDataDisplay from './UserDataDisplay';


const MainPage = () => {
  const userData = JSON.parse(sessionStorage.getItem('user_data'));

  return (
    <>
      <MainHeader />
      <div className="container mt-5" style={{ paddingBottom: '60px' }}>
        {/* <h1 className="text-center">Welcome, {userData?.name || 'User'}!</h1> */}
        <UserDataDisplay userData={userData} />
      </div>

    </>
  );
};

export default MainPage;