import React from 'react';
import {screen} from '@testing-library/react';

import Main from './main';
import {Genre} from '../../../const';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockState} from '../../../test-utils/mock-state';
import {mockPromoFilm} from '../../../test-utils/test-data';

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`Main should render correctly`, () => {
  renderWithProviders(<Main />, mockState);

  expect(screen.getByAltText(new RegExp(`${mockPromoFilm.name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${Genre.DEFAULT}`, `i`))).toBeInTheDocument();
});
