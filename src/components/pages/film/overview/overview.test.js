import React from 'react';
import {render, screen} from '@testing-library/react';

import Overview from './overview';
import films from '../../../../mock/films';

it(`Overview should render correctly`, () => {
  const film = films[9];
  const {scoresCount, director, starring} = film;

  render(
      <Overview film={film}/>
  );

  expect(screen.getByText(new RegExp(`${scoresCount} ratings`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Director: ${director}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Starring: ${starring[0]}`, `i`))).toBeInTheDocument();
});
