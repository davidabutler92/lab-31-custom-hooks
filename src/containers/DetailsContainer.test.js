import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterByIdJson from '../fixtures/characterById.json';
import DetailsContainer from './DetailsContainer';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.json(characterByIdJson));
  })
);

describe('CharacterById container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a characters details', async () => {
    render(<DetailsContainer match={{ params: { id: '2' } }} />);

    screen.getByText('loading');

    return waitFor(() => {
      screen.getByText('name: Morty Smith');
      screen.getByText('species: Human');
      screen.getByText('status: Alive');
    });
  });
});
