import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header testing', () => {
  test('Header should have logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
  });

  test('Header should have logo', () => {
    render(
      <BrowserRouter>
        <Header isAuth />
      </BrowserRouter>
    );

    expect(screen.getByTestId('header-user')).toBeInTheDocument();
  });
});
