// import axios from './axios'

// export const getPQRS=()=>axios.get('/pqrs')
// export const enviarPQRS = (data) => axios.post('/pqrs', data);
// export const deletePQRS = (id) => axios.delete(`/pqrs/${ id }`);


// pqrs.js
import axios from './axios'

export const getPQRS = () => axios.get('/pqrs');
export const enviarPQRS = (data) => axios.post('/pqrs', data);
export const deletePQRS = (id) => axios.delete(`/pqrs/${id}`);
export const actualizarEstadoPQRS = (id, estado) => axios.put(`/pqrs/${id}`, { estado });