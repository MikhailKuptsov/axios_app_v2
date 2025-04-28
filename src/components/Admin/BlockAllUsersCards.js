// src/components/Admin/BlockAllUsersCards.js
import React from 'react';
import CardUser from '../UI/CardUser';

const BlockAllUsersCards = ({ users, onSelectUser }) => {
  return (
    <div className="row">
      {users.map(user => (
        <div className="col-md-4 mb-4" key={user._id}>
          <CardUser
            data_username={user.username}
            data_surname={user.surname || 'Не указано'}
            data_name={user.name || 'Не указано'}
            data_patronymic={user.patronymic || 'Не указано'}
            data_role={user.role || 'User'}
            onSelect={() => onSelectUser(user)}
          />
        </div>
      ))}
    </div>
  );
};

export default BlockAllUsersCards;