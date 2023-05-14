import React from 'react';
import {screen} from '@testing-library/react';

import GenresList from './genres-list';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {mockState} from '../../../../test-utils/mock-state';
import {mockFilms} from '../../../../test-utils/test-data';

it(`GenresList should render correctly`, () => {
  renderWithProviders(<GenresList />, mockState);

  expect(screen.getByText(new RegExp(`${mockFilms[0].genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockFilms[2].genre}`, `i`))).toBeInTheDocument();
});
