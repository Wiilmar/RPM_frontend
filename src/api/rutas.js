import axios from './axios'

export const getRutas =()=>axios.get('/rutas')
export const deleteRutas = (id) => axios.delete(`/rutas/delete/${id}`)

