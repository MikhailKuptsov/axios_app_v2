// src/components/UI/CardFacilities.js
import React from 'react';
import { Card } from 'react-bootstrap';

const CardFacilities = ({ 
  data_id,
  data_short_name, 
  data_full_name, 
  data_description 
}) => {
  return (
    <Card className="mb-4 facility-card" style={{ height: '100%' }}>
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title className="mb-2">
            <h5 className="mb-1">{data_short_name}</h5>
            <h6 className="text-muted">{data_full_name}</h6>
          </Card.Title>
          <Card.Text className="mt-3 mb-3">
            {data_description || 'Описание отсутствует'}
          </Card.Text>
        </div>
        <div className="mt-auto pt-2 text-muted small">
          ID: {data_id}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardFacilities;