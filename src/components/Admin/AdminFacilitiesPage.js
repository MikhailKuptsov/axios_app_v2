// src/components/Admin/AdminFacilitiesPage.js
import React, { useState, useEffect } from 'react';
import MainHeader from '../Main/MainHeader';
import LoadingStuck from '../UI/LoadingStuck';
import { GetFacilitiesAll } from '../../api/GetFacilitiesAll';

const AdminFacilitiesPage = () => {
  const [facilities, setFacilities] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <MainHeader />
      <div className="container mt-5">
        <h1 className="text-center">Управление заводами</h1>
        
        {isLoading ? (
          <LoadingStuck />
        ) : error ? (
          <div className="alert alert-danger mt-4">
            <h4>Ошибка {error.code || 'неизвестна'}</h4>
            <p className="mb-0">{error.message}</p>
            {error.details && (
              <pre className="mt-2 mb-0">{JSON.stringify(error.details, null, 2)}</pre>
            )}
          </div>
        ) : (
          <div className="mt-4">
            <pre className="bg-light p-3 rounded">
              {JSON.stringify(facilities, null, 2)}
            </pre>
            
            {/* Пример вывода в таблице (раскомментировать при необходимости) */}
            {/* 
            <div className="table-responsive mt-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Адрес</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {facilities.map(facility => (
                    <tr key={facility.id}>
                      <td>{facility.id}</td>
                      <td>{facility.name}</td>
                      <td>{facility.address}</td>
                      <td>
                        <span className={`badge ${facility.active ? 'bg-success' : 'bg-secondary'}`}>
                          {facility.active ? 'Активен' : 'Неактивен'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> 
            */}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminFacilitiesPage;