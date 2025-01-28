import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aaprec-back.onrender.com'
})

export { api };