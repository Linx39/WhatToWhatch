import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import SignInForm from './sign-in-form';

const mockStore = configureStore({});

it(`SignInForm should render correctly`, () => {
  render(
      <Provider store={mockStore({})}>
        <SignInForm />
      </Provider>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});
