// src/components/UI/LoadingStuck.js
import React from 'react';

const LoadingStuck = ({ message = 'Загрузка...' }) => {
  return (
    <div className="d-flex flex-column align-items-center my-4 py-3">
      <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="mt-2 fs-5">{message}</span>
    </div>
  );
};

export default LoadingStuck;