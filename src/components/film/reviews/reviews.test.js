import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import Reviews from './reviews';
import comments from '../../../mock/comments';

it(`'Reviews' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Reviews comments={comments}/>
      </Router>
  );

  expect(screen.getByTestId(`test-col-0`)).toBeInTheDocument();
  expect(screen.getByTestId(`test-col-1`)).toBeInTheDocument();
});
