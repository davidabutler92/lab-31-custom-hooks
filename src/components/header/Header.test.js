import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('DetailsPage component', () => {
  afterEach(() => cleanup());
  it('renders a details of a single character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
