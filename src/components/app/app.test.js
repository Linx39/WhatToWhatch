import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus, Patch, NavItem, FilmsCount} from '../../const';
import App from './app';
import films from '../../mock/films';
import comments from '../../mock/comments';
import user from '../../mock/user';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  // jest.spyOn(video, `play`);

  const film = films[9];

  it(`Render 'Main' when user navigate to '/' url`, () => {
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
        count: FilmsCount.MAIN,
        filmsList: films
      },
    });

    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getAllByAltText(new RegExp(`${name}`, `i`))[0]).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(Patch.LOGIN);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'MY_LIST' when user navigate to '/favorite' url`, () => {
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
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render 'Film' when user navigate to '/film/id' url`, () => {
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
      FILM_INFO_ACTIONS: {activeNavItem: NavItem.OVERVIEW}
    });

    const history = createMemoryHistory();
    history.push(`${Patch.FILMS}/:id`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/film/id/review' url`, () => {
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
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
    expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render 'Player' when user navigate to '/player/id' url`, () => {
    const store = mockStore({
      DATA: {
        film,
        isFilmLoaded: true,
      },
    });

    const history = createMemoryHistory();
    history.push(`${Patch.PLAYER}/:id`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render 'NotFoundPage' when user navigate to non-existent route`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
    });

    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
