import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import UserBlockSignIn from './user-block-sign-in';

it(`UserBlockSignIn should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <UserBlockSignIn />
      </Router>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
