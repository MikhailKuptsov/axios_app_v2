// src/api/authCheck.js
export const getAuthData = () => {
    try {
      const userData = sessionStorage.getItem('user_data');
      if (!userData) return null;
      
      const parsedData = JSON.parse(userData);
      if (!parsedData?.api_session_key) return null;
      
      return parsedData;
    } catch (e) {
      console.error('Error parsing user data:', e);
      return null;
    }
  };
  
  export const isAuthenticated = () => {
    return !!getAuthData();
  };
  
  export const checkAdmin = () => {
    const userData = getAuthData();
    return userData?.role === 'Admin';
  };