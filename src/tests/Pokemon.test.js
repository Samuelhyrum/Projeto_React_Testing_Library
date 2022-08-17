import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 6', () => {
  test('Ao Iniciar a pagina mostrar o pikachu com o src correto e o tipo correto', () => {
    renderWithRouter(<App />);

    const img = screen.getByRole('img', { name: /pikachu/i });
    const pikachu = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pikachu).toBeInTheDocument();

    const pikachuTYpe = screen.getByTestId('pokemon-type');
    expect(pikachuTYpe).toBeInTheDocument();
    expect(pikachuTYpe).toHaveTextContent('Electric');
  });
  test('É exibido na tela um link com o href /pokemons/<id>', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /More Details/i });
    expect(link).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(link);

    const favoritePokemon = screen.getByRole('checkbox');
    userEvent.click(favoritePokemon);

    const favorited = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(favorited).toBeInTheDocument();
    expect(favorited).toHaveAttribute('src', '/star-icon.svg');
  });
});
