import axios from 'axios';
// We are temporarily ignoring constants.HOST to force the exact path!

const API = axios.create({
  baseURL: "http://localhost:8000/api/articles", 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Notice we just use '/' now because the baseURL is complete
export const fetchArticles = () => API.get('/');
export const createArticle = (article) => API.post('/', article);
export const updateArticle = (id, article) => API.put(`/${id}`, article);
export const deleteArticle = (id) => API.delete(`/${id}`);