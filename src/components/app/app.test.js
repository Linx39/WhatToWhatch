import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus, Patch, NavItem, GENRE_DEFAULT} from '../../const';
import App from './app';
import {mockFilms} from '../../mock/films';

const mockFilm = mockFilms[9];
const user = {fake: true};

const mockStore = configureStore({});

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user,
  },
  DATA: {
    filmsData: {data: mockFilms, isLoading: false, error: null},
    promoFilmData: {data: mockFilm, isLoading: false, error: null},
    filmData: {data: mockFilm, isLoading: false, error: null},
    favoriteFilmsData: {data: mockFilms, isLoading: false, error: null}
  },
  APP_ACTIONS: {
    activeGenre: GENRE_DEFAULT,
    count: 10,
    activeNavItem: NavItem.OVERVIEW,
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

describe(`Test routing`, () => {
  it(`Render Main when user navigate to '/' url`, () => {
    render(fakeApp);

    expect(screen.getAllByAltText(new RegExp(`${mockFilm.name}`, `i`))[0]).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render SignIn when user navigate to '/login' url`, () => {
    history.push(Patch.LOGIN);

    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render MY_LIST when user navigate to '/favorite' url`, () => {
    history.push(Patch.MY_LIST);

    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render Film when user navigate to '/film/id' url`, () => {
    history.push(`${Patch.FILMS}/:id`);

    render(fakeApp);

    expect(screen.getByAltText(new RegExp(`${mockFilm.name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render AddReview when user navigate to '/film/id/review' url`, () => {
    history.push(`${Patch.FILMS}/:id/review`);

    render(fakeApp);

    expect(screen.getByText(new RegExp(`${mockFilm.name}`, `i`))).toBeInTheDocument();
    expect(screen.getByAltText(new RegExp(`${mockFilm.name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render Player when user navigate to '/player/id' url`, () => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();

    history.push(`${Patch.PLAYER}/:id`);

    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render NotFoundPage when user navigate to non-existent route`, () => {
    history.push(`/non-existent-route`);

    render(fakeApp);

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
