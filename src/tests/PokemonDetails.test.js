import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 7 ', () => {
  test('É exibido na tela um h2 com o texto <name> Details, Summary e o Texto', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /More Details/i });
    expect(link).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(link);

    const titleDetails = screen.getByRole('heading',
      { name: 'Pikachu Details', level: 2 });
    const summary = screen.getByRole('heading',
      { name: 'Summary', level: 2 });
    const text = screen.getByText(/This intelligent/i);

    expect(titleDetails).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test('É exibido a localização, o src e o pokemon favoritado', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /More Details/i });
    expect(link).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(link);

    const location = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
    const imgLocation = screen.getAllByRole('img', { name: 'Pikachu location' });
    const label = screen.getByText(/Pokémon favoritado/i);

    expect(location).toBeInTheDocument();
    expect(imgLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(label).toBeInTheDocument();
  });
});
