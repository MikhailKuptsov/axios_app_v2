// src/components/Admin/AdminUsersPage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { GetUsersAll } from '../../api/GetUsersAll';

const AdminUsersPage = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <h1 className="text-center">Управление пользователями</h1>
        
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