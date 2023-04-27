import React from 'react';
import {render, screen} from '@testing-library/react';
import LogoLetters from './logo-letters';

it(`LogoLetters should render correctly`, () => {
  render(
      <LogoLetters />
  );

  expect(screen.getAllByText(/W/)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/)).toBeInTheDocument();
});
