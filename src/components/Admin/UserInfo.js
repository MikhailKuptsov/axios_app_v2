// src/components/Admin/UserInfo.js
import React from 'react';
import MainHeader from '../Main/MainHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const UserInfo = () => {
  const { username } = useParams(); // Теперь получаем username
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Информация о пользователе</h1>
          <Button 
            variant="secondary" 
            onClick={() => navigate('/Admin_users')}
          >
            Назад к списку
          </Button>
        </div>
        
        <div className="card p-4">
          <h4>Детальная информация о пользователе: {username}</h4>
          <p className="text-muted">Здесь будет полная информация о пользователе {username}</p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;