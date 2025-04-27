// src/components/Admin/AdminUsersPage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { Alert } from 'react-bootstrap';

import { GetUsersAll } from '../../api/GetUsersAll';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AdminUsersPage = () => {
  const location = useLocation();
  const [alert, setAlert] = useState(location.state?.alert || null);

  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await GetUsersAll();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = () => {
    navigate('/Admin_users/create'); // Маршрут для создания пользователя
  };

  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0">Управление пользователями</h1>
          <Button 
            variant="primary"
            onClick={handleCreateUser}
          >
            Создать пользователя
          </Button>
        </div>
        <div>
        // Добавляем после заголовка
          {alert && (
            <Alert 
              variant={alert.variant} 
              onClose={() => setAlert(null)} 
              dismissible
              className="mt-3"
            >
              {alert.message}
            </Alert>
          )}
        </div>
        
        {isLoading ? (
          <LoadingStuck />
        ) : error ? (
          <div className="alert alert-danger mt-3">
            <h4>Ошибка {error.code}</h4>
            <p>{error.message}</p>
          </div>
        ) : (
          <div className="mt-4">
            <pre className="bg-light p-3 rounded">
              {JSON.stringify(users, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminUsersPage;