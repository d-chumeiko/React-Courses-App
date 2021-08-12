import * as axios from 'axios';
import { API_PATH } from '../constants';

export const api = axios.create({
  withCredentials: true,
  baseURL: API_PATH,
});

export const source = axios.CancelToken.source();
