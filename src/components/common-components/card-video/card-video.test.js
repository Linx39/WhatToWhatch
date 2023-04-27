import React from 'react';
import {render, screen} from '@testing-library/react';

import CardVideo from './card-video';
import {mockFilms} from '../../../mock/films';

it(`CardVideo should render correctly`, () => {
  const mockFilm = mockFilms[8];
  const {id} = mockFilm;

  render(
      <CardVideo film={mockFilm} />
  );

  expect(screen.getByTestId(new RegExp(`test-card-video-${id}`, `i`))).toBeInTheDocument();
});
