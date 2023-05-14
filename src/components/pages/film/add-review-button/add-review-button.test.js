import React from 'react';
import {screen} from '@testing-library/react';

import AddReviewButton from './add-review-button';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {mockFilm} from '../../../../test-utils/test-data';


it(`AddReviewButton should render correctly`, () => {
  renderWithProviders(<AddReviewButton film={mockFilm}/>);

  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
