// axios.js
import axios from 'axios'
import { API_URL } from './config'

const baseURL = API_URL

const Instance = axios.create({
    baseURL,
})

export default Instance
