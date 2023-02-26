import React from 'react';
import {render, screen} from '@testing-library/react';
import LogoLetter from './logo-letter';

it(`LogoLetter should render correctly`, () => {
  render(
      <LogoLetter />
  );

  expect(screen.getAllByText(/W/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/i)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/i)).toBeInTheDocument();
});
