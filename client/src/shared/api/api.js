// src/shared/api/api.js
import axios from 'axios';

const api = axios.create({
  // Coloque a URL base do seu backend aqui.
  baseURL: 'http://localhost:3333/api', // Ajuste conforme necessário
} );

// 👇 ESSA É A LINHA QUE ESTÁ FALTANDO 👇
export default api;
