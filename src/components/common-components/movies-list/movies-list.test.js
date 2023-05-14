import React from 'react';
import {screen} from '@testing-library/react';

import MoviesList from './movies-list';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockFilms} from '../../../test-utils/test-data';

it(`MoviesList should render correctly`, () => {
  renderWithProviders(
      <MoviesList films={mockFilms} count={5}/>
  );

  expect(screen.getByTestId(`test-film-list`)).toBeInTheDocument();
});
