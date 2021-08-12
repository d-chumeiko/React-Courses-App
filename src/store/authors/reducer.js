/* eslint-disable indent */

import { SET_AUTHORS } from './actionTypes';

const authorsInitialState = {
  authors: [],
};

const authorsReducer = (state = authorsInitialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.authors,
      };

    default:
      return state;
  }
};

export default authorsReducer;
