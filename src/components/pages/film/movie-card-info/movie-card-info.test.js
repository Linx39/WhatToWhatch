import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCardInfo from './movie-card-info';
import {NavItem} from '../../../../const';
import {mockFilms} from '../../../../mock/mock-films';

const mockStore = configureStore({});

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`MovieCardInfo should render correctly`, () => {
  const mockFilm = mockFilms[4];
  const {name} = mockFilm;
  const store = mockStore({
    DATA: {
      filmData: {data: mockFilm, isLoading: false, error: null},
      commentsData: {data: [], isLoading: false, error: null},
    },
    APP_ACTIONS: {
      activeNavItem: NavItem.OVERVIEW,
    }
  });
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <MovieCardInfo
            film={mockFilm}
            comments={[]}
            activeNavItem={NavItem.REVIEWS}
            onClick={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${NavItem.REVIEWS}`, `i`))).toBeInTheDocument();
});

