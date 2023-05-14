import React from 'react';
import {screen} from '@testing-library/react';

import MyList from './my-list';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockState} from '../../../test-utils/mock-state';

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`MyList should render correctly`, () => {
  renderWithProviders(<MyList />, mockState);

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();

});
