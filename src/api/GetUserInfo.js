// src/api/GetUserInfo.js
import axios from 'axios';

export const GetUserInfo = async (username) => {
  // Удаляем @ из username если он есть
  const cleanUsername = username.startsWith('@') ? username.slice(1) : username;
  
  const sessionData = JSON.parse(sessionStorage.getItem('user_data'));
  
  if (!sessionData?.api_session_key) {
    throw new Error('Сессия не найдена');
  }

  try {
    const response = await axios.get(
      `https://9l1rs9ln-8000.euw.devtunnels.ms/users/@${cleanUsername}`,
      {
        headers: {
          'api-session-key': sessionData.api_session_key
        }
      }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Ошибка сервера';
    const errorCode = error.response?.status || 500;
    throw { 
      message: errorMessage, 
      code: errorCode,
      details: error.response?.data?.details || null
    };
  }
};