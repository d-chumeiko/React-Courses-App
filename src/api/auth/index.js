import { api } from '../api';
import {
  LOGIN_PATH,
  LOGOUT_API_PATH,
  REGISTRATION_API_PATH,
} from '../../constants';

export const login = (email, password) =>
  api.post(LOGIN_PATH, { email, password });

export const register = ({ name, email, password }) =>
  api.post(REGISTRATION_API_PATH, { name, email, password });

export const logout = (token) =>
  api.delete(LOGOUT_API_PATH, { headers: { Authorization: token } });
