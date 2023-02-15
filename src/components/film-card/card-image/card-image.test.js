import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import CardImage from './card-image';
import films from '../../../mock/films';

it(`'CardImage' should render correctly`, () => {
  const film = films[5];
  const {name} = film;
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <CardImage
          film={film}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          onClick={() => {}}
        />
      </Router>
  );

  expect(screen.getByAltText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
});
