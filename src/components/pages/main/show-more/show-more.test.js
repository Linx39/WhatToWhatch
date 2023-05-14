import React from 'react';
import {screen} from '@testing-library/react';

import ShowMore from './show-more';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';

it(`ShowMore should render correctly`, () => {
  renderWithProviders(<ShowMore />);

  expect(screen.getByText(/Show more/i)).toBeInTheDocument();
});
