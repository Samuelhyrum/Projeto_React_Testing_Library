import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 2', () => {
  test('Teste o componente <About.js />.', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();
    userEvent.click(about);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const title = screen.getByRole('heading', { name: 'About Pokédex' });
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(title).toBeInTheDocument();
  });
});
