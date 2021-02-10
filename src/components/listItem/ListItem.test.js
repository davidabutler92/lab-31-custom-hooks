import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListItem from './ListItem';

describe('DetailsPage component', () => {
  afterEach(() => cleanup());
  it('renders a list item', () => {
    const { asFragment } = render(
      <ListItem name="some name" image="some image" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
