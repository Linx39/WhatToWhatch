import React from 'react';
import {screen} from '@testing-library/react';

import PlayButton from './play-button';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockFilm} from '../../../test-utils/test-data';

it(`PlayButton should render correctly`, () => {
  renderWithProviders(
      <PlayButton film={mockFilm} />
  );

  expect(screen.getByText(/Play/i)).toBeInTheDocument();
});
