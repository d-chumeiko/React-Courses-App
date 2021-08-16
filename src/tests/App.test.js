import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders courses', () => {
  render(<App />);
  const coursesElement = screen.getByText(/courses/i);
  expect(coursesElement).toBeInTheDocument();
});
