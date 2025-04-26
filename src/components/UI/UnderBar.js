// src/components/UI/UnderBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../../Styles/underBar_style.css';

const UnderBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = 50; // Погрешность в пикселях

      setIsVisible(scrollPosition >= pageHeight - threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="navbar-underbar">
      <Container>
        <Navbar.Text className="me-4">
          Контактная информация: example@mail.com
        </Navbar.Text>
        <Navbar.Text>
          Техническая поддержка: support@site.com
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default UnderBar;