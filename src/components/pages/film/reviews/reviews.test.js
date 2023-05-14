import React from 'react';
import {screen} from '@testing-library/react';

import Reviews from './reviews';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {mockState} from '../../../../test-utils/mock-state';
import {mockFilm, mockComments} from '../../../../test-utils/test-data';

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`Reviews should render correctly`, () => {
  renderWithProviders(
      <Reviews film={mockFilm}/>,
      mockState
  );

  expect(screen.getByTestId(`test-col-0`)).toBeInTheDocument();
  expect(screen.getByTestId(`test-col-1`)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockComments[0].comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockComments[1].comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockComments[2].comment}`, `i`))).toBeInTheDocument();
});
