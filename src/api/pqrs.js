import axios from './axios'

export const getPQRS=()=>axios.get('/pqrs')
export const enviarPQRS = (data) => axios.post('/pqrs', data);

