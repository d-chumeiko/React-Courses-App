import { api } from '../api';
import {
  AUTHORS_ADD_PATH,
  AUTHORS_GET_ALL_PATH,
  AUTHORS_PATH,
} from '../../constants';

export const getAuthors = () => api.get(AUTHORS_GET_ALL_PATH);

export const addAuthor = (data, token) =>
  api.post(
    AUTHORS_ADD_PATH,
    { name: data.name },
    { headers: { Authorization: token } }
  );

export const getAuthorById = (id) => api.get(`${AUTHORS_PATH}/${id}`);

export const updateAuthor = (id, data, token) =>
  api.put(`${AUTHORS_PATH}/${id}`, data, {
    headers: { Authorization: token },
  });

export const deleteAuthor = (id, token) =>
  api.delete(`${AUTHORS_PATH}/${id}`, { headers: { Authorization: token } });
