import React from 'react';
import {screen} from '@testing-library/react';

import AddReview from './add-review';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockState} from '../../../test-utils/mock-state';
import {mockFilm} from '../../../test-utils/test-data';

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`AddReview should render correctly`, () => {
  const {name} = mockFilm;

  renderWithProviders(<AddReview />, mockState);

  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
