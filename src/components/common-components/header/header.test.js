import React from 'react';
import {screen} from '@testing-library/react';

import Header from './header';
import {renderWithProviders} from '../../../test-utils/render-with-providers';

it(`Header should render correctly`, () => {
  renderWithProviders(
      <Header
        additionalClassName={``}
        isLogoClickable={true}
        isUserBlock={false}
      />
  );

  expect(screen.getByTestId(`test-logo`)).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/)).toBeInTheDocument();
});
