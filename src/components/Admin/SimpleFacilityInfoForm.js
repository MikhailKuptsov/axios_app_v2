// src/components/Admin/SimpleFacilityInfoForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SimpleFacilityInfoForm = ({ facilityData, onBack }) => {
  return (
    <div className="mt-4">
      <Button 
        variant="outline-secondary"
        onClick={onBack}
        className="mb-4"
      >
        ← Назад к списку заводов
      </Button>

      <Form>
        <Form.Group className="mb-3" controlId="short_name">
          <Form.Label>Короткое название</Form.Label>
          <Form.Control plaintext readOnly defaultValue={facilityData.short_name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="full_name">
          <Form.Label>Полное название</Form.Label>
          <Form.Control plaintext readOnly defaultValue={facilityData.full_name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Описание</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            plaintext 
            readOnly 
            defaultValue={facilityData.description || 'Описание отсутствует'} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="facility_id">
          <Form.Label>ID завода</Form.Label>
          <Form.Control plaintext readOnly defaultValue={facilityData._id} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SimpleFacilityInfoForm;