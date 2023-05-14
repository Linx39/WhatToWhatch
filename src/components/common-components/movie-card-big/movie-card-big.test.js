import React from 'react';
import {render, screen} from '@testing-library/react';

import MovieCardBig from './movie-card-big';
import {mockFilm} from '../../../test-utils/test-data';

it(`MovieCardBig should render correctly`, () => {
  render(
      <MovieCardBig film={mockFilm}/>
  );

  expect(screen.getByAltText(new RegExp(`${mockFilm.name}`, `i`))).toBeInTheDocument();
});
