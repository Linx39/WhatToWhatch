import React from 'react';
import {screen} from '@testing-library/react';

import FavoriteButton from './favorite-button';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockFilm, mockUser} from '../../../test-utils/test-data';

it(`FavoriteButton should render correctly`, () => {
  const mockState = {
    USER: mockUser,
  };

  renderWithProviders(
      <FavoriteButton
        film={mockFilm}
        onLoadData={jest.fn()}
      />,
      mockState
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
