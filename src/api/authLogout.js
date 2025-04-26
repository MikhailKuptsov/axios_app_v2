// src/api/authLogout.js
import axios from 'axios';

const API_URL = 'https://9l1rs9ln-8000.euw.devtunnels.ms/auth/logout';

export const logoutUser = async () => {
  const userData = JSON.parse(sessionStorage.getItem('user_data'));
  
  if (!userData?.api_session_key) {
    throw new Error('No session key found');
  }

  try {
    await axios.post(API_URL, {}, {
      headers: {
        'api-session-key': userData.api_session_key
      }
    });
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};