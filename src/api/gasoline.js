/*import axios from './axios'

export const getGasoline =()=>axios.get("/gasoline")
*/

import axios from './axios';

export const getGasoline = () => axios.get("/gasoline");

export const updateGasoline = async (updatedGasoline) => {
  try {
    const response = await axios.put(`/gasoline/${updatedGasoline._id}`, updatedGasoline);
    return response.data;
  } catch (error) {
    console.error('Error actualizando los datos de la gasolina:', error);
    throw error;
  }
};


