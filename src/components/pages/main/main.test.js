import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from './main';
import {AuthorizationStatus} from '../../../const';
import {mockFilms} from '../../../mock/films';

const mockStore = configureStore({});

it(`Main should render correctly`, () => {
  const user = {fake: true};
  const mockFilm = mockFilms[4];
  const {name} = mockFilm;
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user
    },
    DATA: {
      films: mockFilms,
      isFilmsLoaded: true,
      promoFilm: mockFilm,
      isPromoFilmLoaded: true
    },
    APP_ACTIONS: {
      count: 10,
    },
  });
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
  );

  expect(screen.getAllByAltText(new RegExp(`${name}`, `i`))[0]).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
});
