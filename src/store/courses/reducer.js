/* eslint-disable indent */

import {
  SET_COURSES,
  SET_COURSE_FETCH_ERROR,
  SET_COURSE_INFO,
} from './actionTypes';

const coursesInitialState = {
  courses: [],
  courseInfo: {},
  courseFetchError: '',
};

const coursesReducer = (state = coursesInitialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.courses,
      };

    case SET_COURSE_INFO:
      return {
        ...state,
        courseInfo: action.courseInfo,
      };

    case SET_COURSE_FETCH_ERROR:
      return {
        ...state,
        courseFetchError: action.courseFetchError,
      };

    default:
      return state;
  }
};

export default coursesReducer;
