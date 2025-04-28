// src/components/Admin/UserInfo.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { GetUserInfo } from '../../api/GetUserInfo';
import LoadingStuck from '../UI/LoadingStuck';
import UserInfoForm from './UserInfoForm';

const UserInfo = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Удаляем @ из username если он есть
        const cleanUsername = username.startsWith('@') ? username.slice(1) : username;
        const data = await GetUserInfo(cleanUsername);
        setUserData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUserData();
  }, [username]);

  if (isLoading) {
    return <LoadingStuck message="Загрузка данных пользователя..." />;
  }

  if (error) {
    return (
      <>
        <MainHeader />
        <div className="container mt-5">
          <Alert variant="danger">
            <h4>Ошибка {error.code || 'неизвестна'}</h4>
            <p>{error.message}</p>
          </Alert>
        </div>
      </>
    );
  }

  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <h1 className="mb-4">Информация о пользователе</h1>
        {userData && <UserInfoForm userData={userData} />}
      </div>
    </>
  );
};

export default UserInfo;