import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import Stars from './stars';

it(`'Stars' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Stars ratingValue={6} onChange={() => {}} />
      </Router>
  );

  expect(screen.getByLabelText(/Rating 3/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Rating 8/)).toBeInTheDocument();
});
