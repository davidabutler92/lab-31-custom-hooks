import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailsPage from './DetailsPage';

describe('DetailsPage component', () => {
  afterEach(() => cleanup());
  it('renders a details of a single character', () => {
    const { asFragment } = render(
      <DetailsPage
        character={{
          id: 1,
          image: 'some image',
          name: 'some name',
          status: 'some status',
          species: 'some species',
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
