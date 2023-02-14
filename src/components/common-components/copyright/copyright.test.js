import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import Copyright from './copyright';

it(`'Copyright' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Copyright />
      </Router>
  );

  expect(screen.getByText(/© 2019 What to watch Ltd./)).toBeInTheDocument();
});
