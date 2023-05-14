import React from 'react';
import {render, screen} from '@testing-library/react';

import Overview from './overview';
import {mockFilm} from '../../../../test-utils/test-data';

it(`Overview should render correctly`, () => {
  const {scoresCount, director, starring} = mockFilm;

  render(
      <Overview film={mockFilm}/>
  );

  expect(screen.getByText(new RegExp(`${scoresCount} ratings`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Director: ${director}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Starring: ${starring[0]}`, `i`))).toBeInTheDocument();
});
