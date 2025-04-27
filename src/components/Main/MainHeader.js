// src/components/Main/MainHeader.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { logoutUser } from '../../api/authLogout';
import LoadingSpinner from '../UI/LoadingSpinner';

// Импорт стилей
import "../../Styles/MainHeader.css"

const MainHeader = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem('user_data'));
  const isAdmin = userData?.role === 'Admin';

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logoutUser();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      sessionStorage.removeItem('user_data');
      navigate('/login', { replace: true });
      setIsLoggingOut(false);
    }
  };

  if (isLoggingOut) {
    return <LoadingSpinner message="Выход из системы..." />;
  }

  return (
    <Navbar expand="lg" className="main-header">
      <Container>
        <Navbar.Brand>My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/Main_page')}>Главная страница</Nav.Link>
            {isAdmin && (
              <Nav.Link onClick={() => navigate('/admin')}>Администратор</Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;