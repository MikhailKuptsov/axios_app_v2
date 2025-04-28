// src/components/Admin/SimpleUserInfoForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SimpleUserInfoForm = ({ userData, onBack }) => {
  return (
    <div className="mt-4">
      {/* Кнопка "Назад" добавлена сверху */}
      <Button 
        variant="outline-secondary"
        onClick={onBack}
        className="mb-4"
      >
        ← Назад к списку пользователей
      </Button>

      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Логин</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.username} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Имя</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.surname} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="patronymic">
          <Form.Label>Отчество</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.patronymic} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="role">
          <Form.Label>Роль</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.role} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="job_title">
          <Form.Label>Должность</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.job_title} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telegram">
          <Form.Label>Telegram</Form.Label>
          <Form.Control plaintext readOnly defaultValue={userData.telegram} />
        </Form.Group>

        {userData.photo && (
          <Form.Group className="mb-3" controlId="photo">
            <Form.Label>Фото</Form.Label>
            <div>
              <img 
                src={userData.photo} 
                alt="Аватар" 
                style={{ maxWidth: '150px' }}
                className="img-thumbnail"
              />
            </div>
          </Form.Group>
        )}
      </Form>
    </div>
  );
};

export default SimpleUserInfoForm;