import React from 'react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';
import Courses from '../Courses/Courses';
import CreateCourse from './CreateCourse';
import CourseFormAuthors from '../CourseFormAuthors/CourseFormAuthors';
import store from '../../store';
import { handlers } from '../../tests/handlers';
import {
  ADD_AUTHOR_BTN_LABEL,
  ADD_NEW_COURSE_BUTTON_LABEL,
  ADMIN_ROLE,
  AUTHOR_NAME_FIELD_PLACEHOLDER,
  CREATE_AUTHOR_BTN_LABEL,
  CREATE_COURSE_FORM_TYPE,
  DELETE_AUTHOR_BTN_LABEL,
} from '../../constants';
import {
  MOCKED_AUTHORS,
  MOCKED_AUTHOR_VALUE,
  MOCKED_COURSES,
  MOCKED_TOKEN,
} from '../../tests/testConstants';

const mockUseHistory = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockUseHistory,
  }),
}));

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('CreateCourse testing', () => {
  test('CreateCourse should show after a click on a button "Add new course"', () => {
    render(
      <Provider store={store}>
        <Courses
          role={ADMIN_ROLE}
          token={MOCKED_TOKEN}
          courses={MOCKED_COURSES}
          authors={MOCKED_AUTHORS}
          getCourses={jest.fn()}
          getAuthors={jest.fn()}
        />
      </Provider>
    );

    fireEvent.click(screen.getByText(ADD_NEW_COURSE_BUTTON_LABEL));

    const { calls } = mockUseHistory.mock;

    if (calls.length) {
      render(
        <Provider store={store}>
          <CreateCourse authors={MOCKED_AUTHORS} addCourse={jest.fn()} />
        </Provider>
      );
    }

    expect(screen.getByTestId('course-form')).toBeInTheDocument();
  });

  test('CreateCourse should show authors list', () => {
    render(
      <Provider store={store}>
        <CourseFormAuthors
          authors={MOCKED_AUTHORS}
          type={CREATE_COURSE_FORM_TYPE}
        />
      </Provider>
    );

    expect(screen.getAllByTestId('authors-list-item').length > 0).toBeTruthy();
  });

  test('CreateCourse add an author to all authors list', async () => {
    const addAuthor = jest.fn();

    render(
      <Provider store={store}>
        <CourseFormAuthors
          authors={MOCKED_AUTHORS}
          token={MOCKED_TOKEN}
          type={CREATE_COURSE_FORM_TYPE}
          addAuthor={addAuthor}
        />
      </Provider>
    );

    fireEvent.change(
      screen.getByPlaceholderText(AUTHOR_NAME_FIELD_PLACEHOLDER),
      {
        target: { value: MOCKED_AUTHOR_VALUE },
      }
    );

    fireEvent.click(screen.getByText(CREATE_AUTHOR_BTN_LABEL));

    expect(addAuthor).toHaveBeenCalledWith(
      { name: MOCKED_AUTHOR_VALUE },
      MOCKED_TOKEN
    );
  });

  test('CreateCourse add an author to course authors list', async () => {
    const FIRST_AUTHOR_INDEX_FROM_LIST = 0;

    render(
      <Provider store={store}>
        <CreateCourse authors={MOCKED_AUTHORS} addCourse={jest.fn()} />
      </Provider>
    );

    fireEvent.click(
      screen.getAllByText(ADD_AUTHOR_BTN_LABEL)[FIRST_AUTHOR_INDEX_FROM_LIST]
    );

    expect(screen.getByTestId('courses-authors-list-item')).toBeInTheDocument();
  });

  test('CreateCourse delete an author from course authors list', async () => {
    const FIRST_AUTHOR_INDEX_FROM_LIST = 0;

    render(
      <Provider store={store}>
        <CreateCourse authors={MOCKED_AUTHORS} addCourse={jest.fn()} />
      </Provider>
    );

    fireEvent.click(
      screen.getAllByText(ADD_AUTHOR_BTN_LABEL)[FIRST_AUTHOR_INDEX_FROM_LIST]
    );

    fireEvent.click(
      screen.getAllByText(DELETE_AUTHOR_BTN_LABEL)[FIRST_AUTHOR_INDEX_FROM_LIST]
    );

    expect(
      screen.queryAllByTestId('courses-authors-list-item').length === 0
    ).toBeTruthy();
  });
});
