import React from 'react';
import {screen} from '@testing-library/react';

import AddReviewForm from './add-revew-form';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {mockFilm} from '../../../../test-utils/test-data';

it(`AddReviewForm should render correctly`, () => {
  renderWithProviders(
      <AddReviewForm film={mockFilm}/>,
  );

  expect(screen.getByText(/Post/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
});
