// src/components/UI/DropdownBlockChoice.js
import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DropdownBlockChoice = ({ label_name, link_page }) => {
  const navigate = useNavigate();

  return (
    <Accordion>
      <Card>
        <Accordion.Item as={Card.Header} eventKey="0">
          <Accordion.Header>{label_name}</Accordion.Header>
          <Accordion.Body className="text-center">
            <Button 
              variant="primary"
              onClick={() => navigate(link_page)}
            >
              Выбрать
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Card>
    </Accordion>
  );
};

export default DropdownBlockChoice;