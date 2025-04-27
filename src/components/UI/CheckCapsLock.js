// src/components/UI/CheckCapsLock.js
import React, { useState, useEffect } from 'react';

const CheckCapsLock = () => {
  const [capsLockOn, setCapsLockOn] = useState(false);

  const handleKeyPress = (e) => {
    const isCapsLockOn = e.getModifierState('CapsLock');
    setCapsLockOn(isCapsLockOn);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  if (!capsLockOn) return null;

  return (
    <div className="text-warning mt-1 small">
       У вас нажат CapsLock
    </div>
  );
};

export default CheckCapsLock;