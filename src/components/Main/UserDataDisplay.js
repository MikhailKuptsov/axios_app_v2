// src/components/Main/UserDataDisplay.js
import React from 'react';

const UserDataDisplay = ({ userData }) => {
  return (
    <div className="mt-4">
      <div className="mb-3">
        <h5>Логин пользователя:</h5>
        <p className="bg-light p-2 rounded">{userData.username || 'Не указан'}</p>
      </div>
      <div className="mb-3">
        <h5>Имя пользователя:</h5>
        <p className="bg-light p-2 rounded">{userData.name || 'Не указано'}</p>
      </div>
      <div className="mb-3">
        <h5>Сессионный ключ пользователя:</h5>
        <p className="bg-light p-2 rounded text-break">{userData.api_session_key || 'Не указан'}</p>
      </div>
    </div>
  );
};

export default UserDataDisplay;