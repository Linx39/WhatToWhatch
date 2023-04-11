import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCardDesc from './movie-card-desc';
import {AuthorizationStatus} from '../../../../const';
import films from '../../../../mock/films';

const mockStore = configureStore({});

it(`MovieCardDesc should render correctly`, () => {
  const film = films[4];
  const {name, genre, released} = film;
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
    DATA: {
      film,
      isFilmLoaded: true,
    },
  });
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <MovieCardDesc film={film} authorizationStatus={AuthorizationStatus.AUTH} />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${released}`, `i`))).toBeInTheDocument();
});
