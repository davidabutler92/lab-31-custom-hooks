import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import charactersApiJson from '../fixtures/characters.json';
import { MemoryRouter } from 'react-router-dom';
import CharactersPage from './CharactersPage';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(charactersApiJson));
  })
);

describe('CharactersPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a list of characters', async () => {
    render(
      <MemoryRouter>
        <CharactersPage />
      </MemoryRouter>
    );

    screen.getByText('loading');

    const charactersList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(charactersList).not.toBeEmptyDOMElement();
    });
  });
});
