import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // L'URL du backend Laravel
});

export default instance;
