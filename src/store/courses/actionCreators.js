import {
  SET_COURSES,
  SET_COURSE_INFO,
  SET_COURSE_FETCH_ERROR,
} from './actionTypes';

export const setCourses = (courses) => ({
  type: SET_COURSES,
  courses,
});

export const setCourseInfo = (courseInfo) => ({
  type: SET_COURSE_INFO,
  courseInfo,
});

export const setCourseFetchError = (courseFetchError) => ({
  type: SET_COURSE_FETCH_ERROR,
  courseFetchError,
});
