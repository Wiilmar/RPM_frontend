

import axios from './axios';

export const getUsers = () => axios.get('/getusers');

export const updateUserStatus = async (userId, newStatus) => {
  try {
    const response = await axios.put(`/updateuser/${userId}`, { Estado: newStatus });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el estado del usuario:', error);
    throw error;
  }
};