// src/api/GetFacilitiesAll.js
import axios from 'axios';

export const GetFacilitiesAll = async () => {
  const userData = JSON.parse(sessionStorage.getItem('user_data'));
  
  if (!userData?.api_session_key) {
    throw new Error('Сессия не найдена');
  }

  try {
    const response = await axios.get('https://9l1rs9ln-8000.euw.devtunnels.ms/facilities/', {
      headers: {
        'api-session-key': userData.api_session_key
      },
      timeout: 10000 // 10 секунд таймаут
    });
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