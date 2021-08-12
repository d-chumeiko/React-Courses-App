import { api } from '../api';
import {
  COURSES_ADD_PATH,
  COURSES_GET_ALL_PATH,
  COURSES_PATH,
} from '../../constants';

export const getCourses = () => api.get(COURSES_GET_ALL_PATH);

export const addCourse = (data, token) =>
  api.post(COURSES_ADD_PATH, data, { headers: { Authorization: token } });

export const getCourseById = (id) => api.get(`${COURSES_PATH}/${id}`);

export const updateCourse = (id, data, token) =>
  api.put(`${COURSES_PATH}/${id}`, data, { headers: { Authorization: token } });

export const deleteCourse = (id, token) =>
  api.delete(`${COURSES_PATH}/${id}`, { headers: { Authorization: token } });
