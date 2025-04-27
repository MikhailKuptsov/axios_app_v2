// src/components/UI/RoleInterface.js
import React from 'react';

const RoleInterface = ({ role }) => {
  const getRoleName = (role) => {
    switch(role) {
      case 'Admin':
        return 'Админ';
      case 'Manager':
        return 'Менеджер';
      case 'User':
        return 'Пользователь';
      default:
        return role; // Возвращает как есть, если роль не распознана
    }
  };

  return (
    <span>{getRoleName(role)}</span>
  );
};

export default RoleInterface;