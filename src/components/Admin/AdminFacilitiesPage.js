// src/components/Admin/AdminFacilitiesPage.js
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { GetFacilitiesAll } from '../../api/GetFacilitiesAll';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AdminFacilitiesPage = () => {
  const location = useLocation();
  const [alert, setAlert] = useState(location.state?.alert || null);
  const [facilities, setFacilities] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFacilitiesAll();
        setFacilities(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateFacility = () => {
    navigate('/Admin_Facilities/create');
  };

  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0">Управление заводами</h1>
          <Button 
            variant="primary"
            onClick={handleCreateFacility}
          >
            Создать завод
          </Button>
        </div>
        <div>
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
            <h4>Ошибка {error.code || 'неизвестна'}</h4>
            <p>{error.message}</p>
          </div>
        ) : (
          <div className="mt-4">
            <pre className="bg-light p-3 rounded">
              {JSON.stringify(facilities, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminFacilitiesPage;