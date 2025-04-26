// src/components/Main/MainHeader.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { logoutUser } from '../../api/authLogout';
import LoadingSpinner from '../UI/LoadingSpinner';

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
      setIsLoggingOut(false);
      navigate('/login', { replace: true });
    }
  };

  if (isLoggingOut) {
    return <LoadingSpinner message="Выход из системы..." />;
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
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