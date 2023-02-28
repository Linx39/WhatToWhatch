import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import UserBlockNoSign from './user-block-no-sign';

it(`UserBlockNoSign should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <UserBlockNoSign />
      </Router>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
