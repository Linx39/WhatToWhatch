import React from 'react';
import {screen} from '@testing-library/react';

import LoadingPage from './loading-page';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {InfoText} from '../../../../const';

it(`LoadingPage should render correctly`, () => {
  renderWithProviders(<LoadingPage />);

  expect(screen.getByText(new RegExp(`${InfoText.LOADING}`, `i`))).toBeInTheDocument();
});
