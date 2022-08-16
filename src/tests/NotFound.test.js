import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 4', () => {
  test('Teste o componente <Not Found.js />.', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/xablau');
    const notFoundTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji', level: 2 });
    const img = screen.getAllByRole('img');
    expect(img[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(notFoundTitle).toBeInTheDocument();
  });
});
