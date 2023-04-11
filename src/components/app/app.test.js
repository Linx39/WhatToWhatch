import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus, Patch, NavItem, FilmsCount} from '../../const';
import App from './app';
import films from '../../mock/films';
import comments from '../../mock/comments';
import user from '../../mock/user';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  const film = films[9];

  it(`Render Main when user navigate to '/' url`, () => {
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
      FILMS_ACTIONS: {
        count: FilmsCount.MAIN,
      },
    });
    const history = createMemoryHistory();

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getAllByAltText(new RegExp(`${name}`, `i`))[0]).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render SignIn when user navigate to '/login' url`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user
      },
    });
    const history = createMemoryHistory();
    history.push(Patch.LOGIN);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render MY_LIST when user navigate to '/favorite' url`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user
      },
      DATA: {favoriteFilms: films, isFavoriteFilmsLoaded: true}
    });
    const history = createMemoryHistory();
    history.push(Patch.MY_LIST);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render Film when user navigate to '/film/id' url`, () => {
    const {name} = film;
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH, user},
      DATA: {
        films,
        isFilmsLoaded: true,
        film,
        isFilmLoaded: true,
        comments,
        isCommentsLoaded: true
      },
      FILMS_ACTIONS: {activeNavItem: NavItem.OVERVIEW}
    });
    const history = createMemoryHistory();
    history.push(`${Patch.FILMS}/:id`);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render AddReview when user navigate to '/film/id/review' url`, () => {
    const {name} = film;
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user
      },
      DATA: {
        film,
        isFilmLoaded: true,
      },
    });
    const history = createMemoryHistory();
    history.push(`${Patch.FILMS}/:id/review`);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
    expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render Player when user navigate to '/player/id' url`, () => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user
      },
      DATA: {
        film,
        isFilmLoaded: true,
      },
    });
    const history = createMemoryHistory();
    history.push(`${Patch.PLAYER}/:id`);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render NotFoundPage when user navigate to non-existent route`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
    });
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
