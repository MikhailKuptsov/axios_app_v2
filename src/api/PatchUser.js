// api/PatchUser.js
import axios from 'axios';

export const PatchUser = async (data_username) => {
  try {
    // Получаем api-session-key из sessionStorage
    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const sessionKey = userData?.['api-session-key'];

    if (!sessionKey) {
      throw new Error('Session key not found');
    }

    // Отправляем PATCH-запрос
    const response = await axios.patch(
      `https://9l1rs9ln-8000.euw.devtunnels.ms/users/@${data_username}`,
      {}, // Пустое тело запроса (можно добавить данные при необходимости)
      {
        headers: {
          'api-session-key': sessionKey
        }
      }
    );

    // При успехе возвращаем сообщение и статус
    return {
      message: 'Данные пользователя изменены',
      status: response.status
    };
  } catch (error) {
    // Обрабатываем ошибки
    if (error.response) {
      // Сервер ответил с ошибкой
      return {
        message: 'Ошибка сервера',
        status: error.response.status
      };
    } else {
      // Ошибка сети или другая проблема
      return {
        message: 'Ошибка: ' + error.message,
        status: 0 // Нулевой статус для обозначения ошибки сети
      };
    }
  }
};