import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import AppProvider from '../AppProvider/AppProvider';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders the header', () => {
    const { asFragment } = render(
      <AppProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AppProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
