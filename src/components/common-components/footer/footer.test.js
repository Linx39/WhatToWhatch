import React from 'react';
import {screen} from '@testing-library/react';

import Footer from './footer';
import {renderWithProviders} from '../../../test-utils/render-with-providers';

it(`Footer should render correctly`, () => {

  renderWithProviders(
      <Footer isLogoClickable={true} />
  );

  expect(screen.getByTestId(`test-logo`)).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/)).toBeInTheDocument();
  expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
});
