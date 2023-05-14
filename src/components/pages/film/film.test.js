import React from 'react';
import {screen} from '@testing-library/react';

import Film from './film';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockState} from '../../../test-utils/mock-state';
import {mockFilm} from '../../../test-utils/test-data';

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`Film should render correctly`, () => {
  renderWithProviders(<Film />, mockState);

  expect(screen.getAllByAltText(new RegExp(`${mockFilm.name}`, `i`))[0]).toBeInTheDocument();
  expect(screen.getByText(/More like this/i)).toBeInTheDocument();
});
