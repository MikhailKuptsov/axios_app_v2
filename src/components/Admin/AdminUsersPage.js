// src/components/Admin/AdminUsersPage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { GetUsersAll } from '../../api/GetUsersAll';
import { Button, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import BlockAllUsersCards from './BlockAllUsersCards';
import SimpleUserInfoForm from './SimpleUserInfoForm';

const AdminUsersPage = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
    navigate('/Admin_users/create');
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleBackToList = () => {
    setSelectedUser(null);
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
          <h1 className="mb-0">
            {selectedUser ? `Пользователь: ${selectedUser.username}` : 'Управление пользователями'}
          </h1>
          {!selectedUser && (
            <Button variant="primary" onClick={handleCreateUser}>
              Создать пользователя
            </Button>
          )}
        </div>
        
        {error ? (
          <div className="alert alert-danger mt-3">
            <h4>Ошибка {error.code}</h4>
            <p>{error.message}</p>
          </div>
        ) : selectedUser ? (
          <SimpleUserInfoForm 
            userData={selectedUser} 
            onBack={handleBackToList}
          />
        ) : (
          <BlockAllUsersCards 
            users={users || []} 
            onSelectUser={handleSelectUser}
          />
        )}
      </div>
    </>
  );
};

export default AdminUsersPage;