import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import CoursesList from '../CoursesList/CoursesList';
import { MOCKED_AUTHORS, MOCKED_COURSES } from '../../tests/testConstants';

const EXPECTED_LENGTH = 3;

describe('Courses testing', () => {
  test('Courses should display amount of CourseCard equal length of courses array', () => {
    render(
      <Provider store={store}>
        <CoursesList courses={MOCKED_COURSES} authorsList={MOCKED_AUTHORS} />
      </Provider>
    );
    const courses = screen.getAllByTestId('course-card');

    expect(courses.length).toEqual(EXPECTED_LENGTH);
  });

  test('Courses should display Empty container if courses array length is empty', () => {
    const { container } = render(
      <Provider store={store}>
        <CoursesList courses={[]} />
      </Provider>
    );

    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
