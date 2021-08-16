import { GET_COURSES, SET_COURSES } from '../actionTypes';
import coursesReducer from '../reducer';

const COURSES_INITIAL_STATE = {
  courses: [],
  courseInfo: {},
  courseFetchError: '',
};

const MOCKED_COURSES = [
  {
    title: 'title',
    description: 'description',
  },
  {
    title: 'title2',
    description: 'description',
  },
];

describe('CoursesReducer testing', () => {
  test('coursesReducer should return the initial state', () => {
    expect(coursesReducer(undefined, {})).toEqual(COURSES_INITIAL_STATE);
  });

  test('coursesReducer should handle ADD_COURSES', () => {
    expect(
      coursesReducer(undefined, { type: SET_COURSES, courses: MOCKED_COURSES })
    ).toEqual({ ...COURSES_INITIAL_STATE, courses: MOCKED_COURSES });
  });

  test('coursesReducer should handle GET_COURSES', () => {
    expect(coursesReducer(undefined, { type: GET_COURSES })).toEqual(
      COURSES_INITIAL_STATE.courses
    );
  });
});
