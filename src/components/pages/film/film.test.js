import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Film from './film';
import {AuthorizationStatus, NavItem} from '../../../const';
import {mockFilms} from '../../../mock/films';

const mockStore = configureStore({});

it(`Film should render correctly`, () => {
  const user = {fake: true};
  const mockFilm = mockFilms[4];
  const {name} = mockFilm;
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    },
    DATA: {
      films: mockFilms,
      isFilmsLoaded: true,
      film: mockFilm,
      isFilmLoaded: true,
      comments: [],
      isCommentsLoaded: true,
    },
    FILMS_ACTIONS: {
      activeNavItem: NavItem.OVERVIEW,
    }
  });
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <Film />
        </Router>
      </Provider>
  );

  expect(screen.getAllByAltText(new RegExp(`${name}`, `i`))[0]).toBeInTheDocument();
  expect(screen.getByText(/More like this/i)).toBeInTheDocument();
});
