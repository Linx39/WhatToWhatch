import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import Details from './details';
import films from '../../../mock/films';

it(`'Details' should render correctly`, () => {
  const film = films[9];
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Details film={film}/>
      </Router>
  );

  expect(screen.getByText(/Director/i)).toBeInTheDocument();
  expect(screen.getByText(/Starring/i)).toBeInTheDocument();
  expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
  expect(screen.getByText(/Genre/i)).toBeInTheDocument();
  expect(screen.getByText(/Released/i)).toBeInTheDocument();
});