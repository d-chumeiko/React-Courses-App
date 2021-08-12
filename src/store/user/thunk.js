/* eslint-disable indent */
import * as authApi from '../../api/auth';
import { getMe } from '../../api/users';
import { SUCCESS_STATUS } from '../../constants';
import { removeTokenFromLS, setTokenToLS } from '../../utils/localStorageUtils';
import { setUserData, setUserToken, toggleUserIsAuth } from './actionCreators';

export const authUser = (token) => async (dispatch) => {
  try {
    if (token) {
      const user = await getMe(token);

      const { name, email, role } = user.data.result;

      dispatch(setUserToken(token));
      dispatch(toggleUserIsAuth(true));
      dispatch(setUserData({ name, email, role }));
    }
  } catch (e) {
    console.error(e.response);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await authApi.login(email, password);

    if (response.data.successful) {
      const { result } = response.data;

      setTokenToLS(result);

      dispatch(authUser(result));
    }
  } catch (e) {
    console.error(e.response.data);
  }
};

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      const response = await authApi.register({ name, email, password });

      return response.data.successful;
    } catch (e) {
      console.error(e.response.data.errors);
    }
  };

export const logout = (token) => async (dispatch) => {
  try {
    const response = await authApi.logout(token);

    if ((response.status = SUCCESS_STATUS)) {
      dispatch(toggleUserIsAuth(false));
      dispatch(setUserToken(''));
      dispatch(setUserData({ name: '', email: '', role: '' }));
      removeTokenFromLS();
    }
  } catch (e) {
    console.error(e.response.data);
  }
};
