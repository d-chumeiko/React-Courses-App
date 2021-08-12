import { SET_AUTHORS, SET_AUTHOR_INFO } from './actionTypes';

export const setAuthors = (authors) => ({
  type: SET_AUTHORS,
  authors,
});

export const setAuthorInfo = (authorInfo) => ({
  type: SET_AUTHOR_INFO,
  authorInfo,
});
