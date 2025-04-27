// src/api/CreateUser.js
import axios from 'axios';

export const CreateUser = async (userData) => {
  const sessionData = JSON.parse(sessionStorage.getItem('user_data'));
  
  if (!sessionData?.api_session_key) {
    throw new Error('Сессия не найдена');
  }

  try {
    const response = await axios.post(
      'https://9l1rs9ln-8000.euw.devtunnels.ms/users/add',
      userData,
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
    throw { message: errorMessage, code: errorCode };
  }
};