import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import Overview from './overview';
import films from '../../../mock/films';

it(`'Overview' should render correctly`, () => {
  const film = films[9];
  const {scoresCount, director, starring} = film;
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Overview film={film}/>
      </Router>
  );

  expect(screen.getByText(new RegExp(`${scoresCount} ratings`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Director: ${director}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`Starring: ${starring[0]}`, `i`))).toBeInTheDocument();
});
