import { api } from '../api';
import { USERS_ME_PATH } from '../../constants';

export const getMe = (token) =>
  api.get(USERS_ME_PATH, { headers: { Authorization: token } });
