import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Stars from './stars';

const ratingValue = 6;

it(`Stars should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Stars ratingValue={ratingValue} onChange={() => {}} />
      </Router>
  );

  expect(screen.getByLabelText(/Rating 3/)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`rating`), `8`);

  expect(screen.getByDisplayValue(/8/i)).toBeInTheDocument();
});
