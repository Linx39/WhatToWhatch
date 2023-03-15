import React from 'react';
import {render, screen} from '@testing-library/react';
import LogoLetters from './logo-letter';

it(`LogoLetters should render correctly`, () => {
  render(
      <LogoLetters />
  );

  expect(screen.getAllByText(/W/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/i)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/i)).toBeInTheDocument();
});
