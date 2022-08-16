import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 3', () => {
  test('Teste o componente <Favorites.js />.', () => {
    const { history } = renderWithRouter(<App />);

    const favorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favorites).toBeInTheDocument();
    userEvent.click(favorites);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');

    const text = screen.getByText('No favorite pokemon found');
    expect(text).toBeInTheDocument();
  });
});
