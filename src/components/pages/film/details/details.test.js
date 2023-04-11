import React from 'react';
import {render, screen} from '@testing-library/react';

import Details from './details';
import films from '../../../../mock/films';

it(`Details should render correctly`, () => {
  const film = films[9];

  render(
      <Details film={film}/>
  );

  expect(screen.getByText(/Director/i)).toBeInTheDocument();
  expect(screen.getByText(/Starring/i)).toBeInTheDocument();
  expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
  expect(screen.getByText(/Genre/i)).toBeInTheDocument();
  expect(screen.getByText(/Released/i)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${film.director}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${film.genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${film.released}`, `i`))).toBeInTheDocument();
});
