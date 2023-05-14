import React from 'react';
import {screen} from '@testing-library/react';

import SignIn from './sign-in';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockStateUserNoAutch} from '../../../test-utils/mock-state';

it(`SignIn should render correctly`, () => {
  renderWithProviders(<SignIn />, mockStateUserNoAutch);

  expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Sign in/i)[1]).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});
