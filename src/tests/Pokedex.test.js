import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import PokemonButtonsPanel from '../components/PokemonButtonsPanel';
import data from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 5', () => {
  test('Teste o componente <Pokedex.js />, os botões possuem o nome correto', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: 'Home' });
    expect(about).toBeInTheDocument();
    userEvent.click(about);

    const { pathname } = history.location;
    expect(pathname).toBe('/');

    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /electric/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /fire/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /bug/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /poison/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /psychic/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /normal/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /dragon/i })).toBeInTheDocument();
  });

  test('Testando se o botão All é clicavel', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', { name: /all/i });
    userEvent.click(all);
  });
  test('Testando se os botões possuem o data-testid', () => {
    const pokemons = data;
    const number = 9;
    const test = 'pokemon-type-button';
    render(<PokemonButtonsPanel pokemonTypes={ pokemons } />);
    expect(screen.getByRole('button', { name: /all/i })).not.toHaveAttribute(test);

    const buttons = screen.getAllByTestId(test);
    expect(buttons).toHaveLength(number);
  });
});
