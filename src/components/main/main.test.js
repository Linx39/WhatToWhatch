import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import Main from './main';
import {AuthorizationStatus} from '../../const';
import films from '../../mock/films';
import user from '../../mock/user';

const mockStore = configureStore({});
jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

it(`'Main' should render correctly`, () => {
  const film = films[4];
  const {name} = film;
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user
    },
    DATA: {
      films,
      isFilmsLoaded: true,
      promoFilm: film,
      isPromoFilmLoaded: true
    },
    FILMS_LIST_ACTIONS: {
      count: 10,
      filmsList: films
    },
  });
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </redux.Provider>
  );

  expect(screen.getAllByAltText(new RegExp(`${name}`, `i`))[0]).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
});
