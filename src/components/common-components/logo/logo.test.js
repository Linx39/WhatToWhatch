import React from 'react';
import {screen} from '@testing-library/react';

import Logo from './logo';
import {renderWithProviders} from '../../../test-utils/render-with-providers';

it(`Logo should render correctly`, () => {
  renderWithProviders(
      <Logo
        additionalClassName={``}
        isLogoClickable={true}
      />
  );

  expect(screen.getByTestId(`test-logo`)).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/)).toBeInTheDocument();
});
