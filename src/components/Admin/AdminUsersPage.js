// src/components/Admin/AdminUsersPage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { Alert } from 'react-bootstrap';

import { GetUsersAll } from '../../api/GetUsersAll';
import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import CardUser from '../UI/CardUser';

const AdminUsersPage = () => {
  const location = useLocation();
  const [alert, setAlert] = useState(location.state?.alert || null);

  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAlert(location.state?.alert || null);
  }, [location]);

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

  if (isLoading) {
    return <LoadingStuck />;
  }

  return (
    <>
      <MainHeader />
      <div className="container mt-5">
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

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0">Управление пользователями</h1>
          <Button variant="primary" onClick={handleCreateUser}>
            Создать пользователя
          </Button>
        </div>
        
        {error ? (
          <div className="alert alert-danger mt-3">
            <h4>Ошибка {error.code}</h4>
            <p>{error.message}</p>
          </div>
        ) : (
          <div className="row">
            {users && users.map(user => (
              <div className="col-md-4 mb-4" key={user.username}>
                <CardUser
                  data_username={user.username}
                  data_surname={user.surname || 'Не указано'}
                  data_name={user.name || 'Не указано'}
                  data_patronymic={user.patronymic || 'Не указано'}
                  data_role={user.role || 'User'}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminUsersPage;