import * as coursesApi from '../../api/courses';
import {
  setCourses,
  setCourseInfo,
  setCourseFetchError,
} from './actionCreators';

export const getCourses = () => async (dispatch) => {
  try {
    const courses = await coursesApi.getCourses();

    if (courses.data.successful) {
      dispatch(setCourses(courses.data.result));
    }
  } catch (e) {
    console.warn(e.response);
  }
};

export const addCourse = (data, token) => async (dispatch) => {
  try {
    const response = await coursesApi.addCourse(data, token);

    if (response.data.successful) {
      dispatch(getCourses());
    }
  } catch (e) {
    const { result } = e.response.data;

    console.warn(result);
  }
};

export const getCourseById = (id) => async (dispatch) => {
  dispatch(setCourseFetchError(''));

  try {
    const response = await coursesApi.getCourseById(id);

    if (response.data.successful) {
      dispatch(setCourseInfo(response.data.result));
    }
  } catch (e) {
    const result = e?.response?.data?.result;

    console.warn(e.response);

    dispatch(setCourseFetchError(result));
  }
};

export const updateCourse = (id, data, token) => async (dispatch) => {
  try {
    const response = await coursesApi.updateCourse(id, data, token);

    if (response.data.successful) {
      dispatch(getCourses());
    }
  } catch (e) {
    const { result } = e.response.data;

    console.warn(result);
  }
};

export const deleteCourse = (id, token) => async (dispatch) => {
  try {
    const response = await coursesApi.deleteCourse(id, token);

    if (response.data.successful) {
      dispatch(getCourses());
    }
  } catch (e) {
    const { result } = e.response.data;

    console.warn(result);
  }
};
