import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from './main';
import {AuthorizationStatus, GENRE_DEFAULT} from '../../../const';
import {mockFilms} from '../../../mock/films';

const mockStore = configureStore({});

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

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
      filmsData: {data: mockFilms, isLoading: false, error: null},
      promoFilmData: {data: mockFilm, isLoading: false, error: null},
    },
    APP_ACTIONS: {
      activeGenre: GENRE_DEFAULT,
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

  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${GENRE_DEFAULT}`, `i`))).toBeInTheDocument();
});
