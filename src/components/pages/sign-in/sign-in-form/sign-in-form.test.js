import React from 'react';
import {screen} from '@testing-library/react';

import SignInForm from './sign-in-form';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';

it(`SignInForm should render correctly`, () => {
  renderWithProviders(<SignInForm />);

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});
