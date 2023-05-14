import React from 'react';
import {render, screen} from '@testing-library/react';

import MovieCardPoster from './movie-card-poster';
import {mockFilm} from '../../../test-utils/test-data';

it(`MovieCardPoster should render correctly`, () => {
  render(
      <MovieCardPoster film={mockFilm} />
  );

  expect(screen.getByAltText(new RegExp(`${mockFilm.name} poster`, `i`))).toBeInTheDocument();
});
