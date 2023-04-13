import React from 'react';
import {render, screen} from '@testing-library/react';

import Overview from './overview';
import {mockFilms} from '../../../../mock/films';

it(`Overview should render correctly`, () => {
  const mockFilm = mockFilms[9];
  const {scoresCount, director, starring} = mockFilm;

  render(
      <Overview film={mockFilm}/>
  );

  expect(screen.getByText(new RegExp(`${scoresCount} ratings`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Director: ${director}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Starring: ${starring[0]}`, `i`))).toBeInTheDocument();
});
