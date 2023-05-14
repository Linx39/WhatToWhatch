import React from 'react';
import {screen} from '@testing-library/react';

import UserBlockSignIn from './user-block-sign-in';
import {renderWithProviders} from '../../../test-utils/render-with-providers';

it(`UserBlockSignIn should render correctly`, () => {
  renderWithProviders(
      <UserBlockSignIn />,
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
