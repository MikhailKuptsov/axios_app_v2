// src/components/Admin/AdminFacilitiesPage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { GetFacilitiesAll } from '../../api/GetFacilitiesAll';
import { Button, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import CardFacilities from '../UI/CardFacilities';

const AdminFacilitiesPage = () => {
  const [facilities, setFacilities] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAlert(location.state?.alert || null);
  }, [location]);

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
            className="mb-4"
          >
            {alert.message}
          </Alert>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Управление заводами</h1>
          <Button variant="primary" onClick={handleCreateFacility}>
            Создать завод
          </Button>
        </div>
        
        {error ? (
          <Alert variant="danger">
            <h4>Ошибка {error.code || 'неизвестна'}</h4>
            <p>{error.message}</p>
          </Alert>
        ) : (
          <div className="row">
            {facilities?.map(facility => (
              <div className="col-md-6 col-lg-4 mb-4" key={facility._id}>
                <CardFacilities
                  data_id={facility._id}
                  data_short_name={facility.short_name}
                  data_full_name={facility.full_name}
                  data_description={facility.description}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminFacilitiesPage;