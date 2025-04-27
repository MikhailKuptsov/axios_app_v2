// src/components/Admin/CreateUserForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CreateUser } from '../../api/CreateUser';
import LoadingStuck from '../UI/LoadingStuck';

const CreateUserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    telegram: '',
    photo: '',
    name: '',
    surname: '',
    patronymic: '',
    role: '',
    job_title: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Обязательное поле';
    if (!formData.password) newErrors.password = 'Обязательное поле';
    if (!formData.role) newErrors.role = 'Обязательное поле';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setApiError(null);

    try {
      await CreateUser(formData);
      navigate('/Admin_users', { 
        state: { alert: { variant: 'success', message: 'Пользователь успешно создан' } }
      });
    } catch (error) {
      setApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingStuck message="Создание пользователя..." />;
  }

  return (
    <div className="mt-4">
      {apiError && (
        <Alert variant="danger" className="mb-4">
          <h4>Пользователь не создан</h4>
          <p>Ошибка {apiError.code}: {apiError.message}</p>
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Логин*</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Пароль*</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="role">
          <Form.Label>Роль*</Form.Label>
          <Form.Select
            name="role"
            value={formData.role}
            onChange={handleChange}
            isInvalid={!!errors.role}
          >
            {/* Потом исправить */}
            <option value="">Выберите роль</option>
            <option value="Admin">Администратор</option>
            <option value="User">Пользователь</option>
            <option value="Manager">Менеджер</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.role}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telegram">
          <Form.Label>Telegram</Form.Label>
          <Form.Control
            type="text"
            name="telegram"
            value={formData.telegram}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="row">
          <Form.Group className="mb-3 col-md-4" controlId="name">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="surname">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="patronymic">
            <Form.Label>Отчество</Form.Label>
            <Form.Control
              type="text"
              name="patronymic"
              value={formData.patronymic}
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="job_title">
          <Form.Label>Должность</Form.Label>
          <Form.Control
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Фото (URL)</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-between mt-4">
          <Button 
            variant="secondary" 
            onClick={() => navigate('/Admin_users')}
          >
            Назад
          </Button>
          <Button variant="primary" type="submit">
            Создать пользователя
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateUserForm;