import React from 'react';
import {screen} from '@testing-library/react';

import MovieCardSmall from './movie-card-small';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockFilm} from '../../../test-utils/test-data';

it(`MovieCardSmall should render correctly`, () => {
  renderWithProviders(
      <MovieCardSmall
        film={mockFilm}
        isVideoMode={false}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
      />
  );

  expect(screen.getByTestId(new RegExp(`test-film-card-${mockFilm.id}`, `i`))).toBeInTheDocument();
});
