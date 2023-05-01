import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Film from './film';
import {AuthorizationStatus, NavItem} from '../../../const';
import {mockFilms} from '../../../mock/mock-films';

const mockStore = configureStore({});

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`Film should render correctly`, () => {
  const user = {fake: true};
  const mockFilm = mockFilms[4];
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    },
    DATA: {
      filmsData: {data: mockFilms, isLoading: false, error: null},
      filmData: {data: mockFilm, isLoading: false, error: null},
      commentsData: {data: [], isLoading: false, error: null}
    },
    APP_ACTIONS: {
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

  expect(screen.getAllByAltText(new RegExp(`${mockFilm.name}`, `i`))[0]).toBeInTheDocument();
  expect(screen.getByText(/More like this/i)).toBeInTheDocument();
});
