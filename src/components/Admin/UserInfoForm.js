// src/components/Admin/UserInfoForm.js
import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserInfoForm = ({ userData }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <Form>
        <div className="row">
          <Form.Group className="mb-3 col-md-6" controlId="username">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              type="text"
              value={userData.username || ''}
              readOnly
              plaintext
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={userData.email || ''}
              readOnly
              plaintext
            />
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col-md-4" controlId="surname">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              value={userData.surname || ''}
              readOnly
              plaintext
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="name">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              value={userData.name || ''}
              readOnly
              plaintext
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="patronymic">
            <Form.Label>Отчество</Form.Label>
            <Form.Control
              type="text"
              value={userData.patronymic || ''}
              readOnly
              plaintext
            />
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col-md-6" controlId="role">
            <Form.Label>Роль</Form.Label>
            <Form.Control
              type="text"
              value={userData.role || ''}
              readOnly
              plaintext
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="job_title">
            <Form.Label>Должность</Form.Label>
            <Form.Control
              type="text"
              value={userData.job_title || ''}
              readOnly
              plaintext
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="telegram">
          <Form.Label>Telegram</Form.Label>
          <Form.Control
            type="text"
            value={userData.telegram || ''}
            readOnly
            plaintext
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Фото</Form.Label>
          {userData.photo ? (
            <div className="mt-2">
              <img 
                src={userData.photo} 
                alt="Аватар" 
                style={{ maxWidth: '150px', maxHeight: '150px' }}
              />
            </div>
          ) : (
            <Form.Control
              type="text"
              value="Не указано"
              readOnly
              plaintext
            />
          )}
        </Form.Group>


      </Form>
    </div>
  );
};

export default UserInfoForm;