// src/components/Admin/CreateFacilityForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CreateFacility } from '../../api/CreateFacilities';
import LoadingStuck from '../UI/LoadingStuck';

const CreateFacilityForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    short_name: '',
    full_name: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.short_name.trim()) newErrors.short_name = 'Обязательное поле';
    if (!formData.full_name.trim()) newErrors.full_name = 'Обязательное поле';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setApiError(null);

    try {
      await CreateFacility(formData);
      navigate('/Admin_Facilities', { 
        state: { alert: { variant: 'success', message: 'Завод успешно создан' } }
      });
    } catch (error) {
      setApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingStuck message="Создание завода..." />;
  }

  return (
    <div className="mt-4">
      {apiError && (
        <Alert variant="danger" className="mb-4">
          <h4>Завод не создан</h4>
          <p>Ошибка {apiError.code}: {apiError.message}</p>
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="short_name">
          <Form.Label>Короткое название*</Form.Label>
          <Form.Control
            type="text"
            name="short_name"
            value={formData.short_name}
            onChange={handleChange}
            isInvalid={!!errors.short_name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.short_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="full_name">
          <Form.Label>Полное название*</Form.Label>
          <Form.Control
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            isInvalid={!!errors.full_name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.full_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-between mt-4">
          <Button 
            variant="secondary" 
            onClick={() => navigate('/Admin_Facilities')}
          >
            Назад
          </Button>
          <Button variant="primary" type="submit">
            Создать завод
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateFacilityForm;