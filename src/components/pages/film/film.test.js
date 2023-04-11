import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Film from './film';
import {AuthorizationStatus, NavItem} from '../../../const';
import films from '../../../mock/films';
import comments from '../../../mock/comments';
import user from '../../../mock/user';

const mockStore = configureStore({});

it(`Film should render correctly`, () => {
  const film = films[4];
  const {name} = film;
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    },
    DATA: {
      films,
      isFilmsLoaded: true,
      film,
      isFilmLoaded: true,
      comments,
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
