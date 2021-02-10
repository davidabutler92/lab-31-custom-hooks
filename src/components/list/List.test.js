import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';
import { MemoryRouter } from 'react-router-dom';

const characters = [
  {
    id: 1,
    name: 'someName',
    image: 'something',
  },
  {
    id: 2,
    name: 'someName',
    image: 'somePhoto',
  },
  {
    id: 3,
    name: 'someName',
    image: 'somePhoto',
  },
];

describe('ListPage component', () => {
  afterEach(() => cleanup());
  it('renders list of characters', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <List characters={characters} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
