import { render, screen } from '@testing-library/react';
import CourseCard from './CourseCard';
import { MOCKED_CARD_INFO } from '../../tests/testConstants';

describe('CourseCard testing', () => {
  test('CourseCard should display title', () => {
    render(<CourseCard {...MOCKED_CARD_INFO} />);

    expect(screen.getByText(MOCKED_CARD_INFO.title)).toBeInTheDocument();
  });

  test('CourseCard should display description', () => {
    render(<CourseCard {...MOCKED_CARD_INFO} />);

    expect(screen.getByText(MOCKED_CARD_INFO.description)).toBeInTheDocument();
  });

  test('CourseCard should display duration', () => {
    render(<CourseCard {...MOCKED_CARD_INFO} />);

    expect(screen.getByText(MOCKED_CARD_INFO.duration)).toBeInTheDocument();
  });

  test('CourseCard should display authors', () => {
    render(<CourseCard {...MOCKED_CARD_INFO} />);

    expect(
      screen.getByText(MOCKED_CARD_INFO.authors.join(''))
    ).toBeInTheDocument();
  });

  test('CourseCard should display creationDate', () => {
    render(<CourseCard {...MOCKED_CARD_INFO} />);

    expect(screen.getByText(MOCKED_CARD_INFO.creationDate)).toBeInTheDocument();
  });
});
