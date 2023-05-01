import React from 'react';
import {render, screen} from '@testing-library/react';

import MovieCardBig from './movie-card-big';
import {mockFilms} from '../../../mock/films';

it(`MovieCardBig should render correctly`, () => {
  const film = mockFilms[5];

  render(
      <MovieCardBig film={film}/>
  );

  expect(screen.getByAltText(new RegExp(`${film.name}`, `i`))).toBeInTheDocument();
});
