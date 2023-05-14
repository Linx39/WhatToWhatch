import React from 'react';
import {screen} from '@testing-library/react';

import ErrorPage from './error-page';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {InfoText} from '../../../../const';

it(`ErrorPage should render correctly`, () => {
  renderWithProviders(<ErrorPage />);

  expect(screen.getByText(new RegExp(`${InfoText.SERVER_ERROR}`, `i`))).toBeInTheDocument();
});
