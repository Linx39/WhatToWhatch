import React from 'react';
import {render, screen} from '@testing-library/react';

import MovieCardMeta from './movie-card-meta';
import {mockFilm} from '../../../test-utils/test-data';

it(`MovieCardMeta should render correctly`, () => {
  const {name, genre, released} = mockFilm;

  render(
      <MovieCardMeta film={mockFilm} />
  );

  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${released}`, `i`))).toBeInTheDocument();
});
