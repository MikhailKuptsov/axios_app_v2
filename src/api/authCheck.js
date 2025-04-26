// src/api/authCheck.js
export const getAuthData = () => {
    const userData = sessionStorage.getItem('user_data');
    if (!userData) return null;
    
    try {
      return JSON.parse(userData);
    } catch (e) {
      console.error('Error parsing user data:', e);
      return null;
    }
  };
  
  export const isAuthenticated = () => {
    return !!getAuthData();
  };