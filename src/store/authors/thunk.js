import * as authorsApi from '../../api/authors';
import { setAuthorInfo, setAuthors } from './actionCreators';

export const getAuthors = () => async (dispatch) => {
  try {
    const authors = await authorsApi.getAuthors();

    if (authors.data.successful) {
      dispatch(setAuthors(authors.data.result));
    }
  } catch (e) {
    const { result } = e.response.data;

    console.warn(result);
  }
};

export const addAuthor = (data, token) => async (dispatch) => {
  try {
    const response = await authorsApi.addAuthor(data, token);

    if (response.data.successful) {
      dispatch(getAuthors());
    }
  } catch (e) {
    console.warn(e.response);
  }
};

export const getAuthorById = (id) => async (dispatch) => {
  try {
    const response = await authorsApi.getAuthorById(id);

    if (response.data.successful) {
      dispatch(setAuthorInfo(response.data.result));
    }
  } catch (e) {
    console.warn(e.response);
  }
};

export const updateAuthor = (id, data, token) => async (dispatch) => {
  try {
    const response = await authorsApi.updateAuthor(id, data, token);

    if (response.data.successful) {
      dispatch(getAuthors());
    }
  } catch (e) {
    const { result } = e.response.data;

    console.warn(result);
  }
};

export const deleteAuthor = (id, token) => async (dispatch) => {
  try {
    const response = await authorsApi.deleteAuthor(id, token);

    if (response.data.successful) {
      dispatch(getAuthors());
    }
  } catch (e) {
    const { result } = e.response.data;

    console.warn(result);
  }
};
