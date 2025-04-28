// src/components/UI/CardUser.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import RoleInterface from './RoleInterface';

const CardUser = ({ 
  data_username, 
  data_surname, 
  data_name, 
  data_patronymic, 
  data_role,
  onSelect
}) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{data_username}</span>
          <span className={`badge ${
            data_role === 'Admin' ? 'bg-danger' : 
            data_role === 'Manager' ? 'bg-primary' : 'bg-secondary'
          }`}>
            <RoleInterface role={data_role} />
          </span>
        </Card.Title>
        <Card.Text>
          <div className="mb-1">
            <strong>ФИО:</strong> {data_surname} {data_name} {data_patronymic}
          </div>
          <div className="mb-2">
            <strong>Роль:</strong> <RoleInterface role={data_role} />
          </div>
          <Button 
            variant="outline-primary"
            size="sm"
            onClick={onSelect}
            className="w-100"
          >
            Выбрать
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardUser;