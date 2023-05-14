import React from 'react';
import {render, screen} from '@testing-library/react';

import CardVideo from './card-video';
import {mockFilm} from '../../../test-utils/test-data';

it(`CardVideo should render correctly`, () => {
  render(
      <CardVideo film={mockFilm} />
  );

  expect(screen.getByTestId(new RegExp(`test-card-video-${mockFilm.id}`, `i`))).toBeInTheDocument();
});
