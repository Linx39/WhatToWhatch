import React from 'react';
import {render, screen} from '@testing-library/react';

import MovieCardPoster from './movie-card-poster';
import {mockFilms} from '../../../mock/films';

it(`MovieCardPoster should render correctly`, () => {
  const mockFilm = mockFilms[4];
  const {name} = mockFilm;

  render(
      <MovieCardPoster film={mockFilm} />
  );

  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
});
