// src/components/Admin/AdminFacilitiesPage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { GetFacilitiesAll } from '../../api/GetFacilitiesAll';
import { Button, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import BlockAllFacilitiesCards from './BlockAllFacilitiesCards';
import SimpleFacilityInfoForm from './SimpleFacilityInfoForm'; // Создайте аналогичный компонент для заводов

const AdminFacilitiesPage = () => {
  const [facilities, setFacilities] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [selectedFacility, setSelectedFacility] = useState(null);
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

  const handleSelectFacility = (facility) => {
    setSelectedFacility(facility);
  };

  const handleBackToList = () => {
    setSelectedFacility(null);
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
          <h1 className="mb-0">
            {selectedFacility 
              ? `Завод: ${selectedFacility.short_name}` 
              : 'Управление заводами'
            }
          </h1>
          {!selectedFacility && (
            <Button variant="primary" onClick={handleCreateFacility}>
              Создать завод
            </Button>
          )}
        </div>
        
        {error ? (
          <Alert variant="danger">
            <h4>Ошибка {error.code || 'неизвестна'}</h4>
            <p>{error.message}</p>
          </Alert>
        ) : selectedFacility ? (
          <SimpleFacilityInfoForm 
            facilityData={selectedFacility} 
            onBack={handleBackToList}
          />
        ) : (
          <BlockAllFacilitiesCards 
            facilities={facilities || []} 
            onSelectFacility={handleSelectFacility}
          />
        )}
      </div>
    </>
  );
};

export default AdminFacilitiesPage;