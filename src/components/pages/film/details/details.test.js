import React from 'react';
import {render, screen} from '@testing-library/react';

import Details from './details';
import {mockFilm} from '../../../../test-utils/test-data';

it(`Details should render correctly`, () => {
  render(
      <Details film={mockFilm}/>
  );

  expect(screen.getByText(/Director/i)).toBeInTheDocument();
  expect(screen.getByText(/Starring/i)).toBeInTheDocument();
  expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
  expect(screen.getByText(/Genre/i)).toBeInTheDocument();
  expect(screen.getByText(/Released/i)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockFilm.director}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockFilm.genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockFilm.released}`, `i`))).toBeInTheDocument();
});
