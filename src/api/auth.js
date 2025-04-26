// src/api/auth.js
import axios from 'axios';

const API_URL = 'https://9l1rs9ln-8000.euw.devtunnels.ms/auth/login';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(API_URL, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'An error occurred' };
  }
};