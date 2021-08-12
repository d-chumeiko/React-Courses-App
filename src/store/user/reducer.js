/* eslint-disable indent */

import { getTokenFromLS } from '../../utils/localStorageUtils';
import {
  SET_USER_DATA,
  TOGGLE_USER_IS_AUTH,
  SET_USER_TOKEN,
} from './actionTypes';

const userInitialState = {
  isAuth: false,
  name: '',
  email: '',
  role: '',
  token: getTokenFromLS(),
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };

    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
      };

    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default userReducer;
