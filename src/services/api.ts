import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.18.18:3333'
})

export { api };