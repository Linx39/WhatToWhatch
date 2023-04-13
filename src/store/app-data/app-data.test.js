import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {initialState, appData} from './app-data';
import {ActionType} from '../action';
import {
  fetchFilms,
  fetchPromoFilm,
  fetchFilm,
  fetchComments,
  fetchAddComment,
  fetchFavoriteFilms,
  fetchChangeFilmStatus
} from '../api-actions';
import {AdditionalUrl} from '../../const';

const api = createAPI(() => {});

describe(`Reducer 'appData' should work correctly`, () => {
  const mockFilms = [{fake: `fake-film-1`}, {fake: `fake-film-2`}];
  const mockFilm = {fake: `fake-film`};

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appData(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update films by load films`, () => {
    const state = {films: [], isFilmsLoaded: false};
    const loadfilmsActions = {
      type: ActionType.LOAD_FILMS,
      payload: mockFilms
    };

    expect(appData(state, loadfilmsActions))
      .toEqual({films: mockFilms, isFilmsLoaded: true});
  });

  it(`Reducer should update promoFilm by load promoFilm`, () => {
    const state = {promoFilm: {}, isPromoFilmLoaded: false};
    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: mockFilm
    };

    expect(appData(state, loadPromoFilmAction))
      .toEqual({promoFilm: mockFilm, isPromoFilmLoaded: true});
  });

  it(`Reducer should update film by load film`, () => {
    const state = {film: {}, isFilmLoaded: false};
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: mockFilm
    };

    expect(appData(state, loadFilmAction))
      .toEqual({film: mockFilm, isFilmLoaded: true});
  });

  it(`Reducer should update comments by load comments`, () => {
    const comments = [`fake-comment-1`, `fake-comment-2`];
    const state = {comments: [], isCommentsLoaded: false};
    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };

    expect(appData(state, loadCommentsAction))
      .toEqual({comments, isCommentsLoaded: true});
  });

  it(`Reducer should update favoriteFilms by load favoriteFilms`, () => {
    const state = {favoriteFilms: [], isFavoriteFilmsLoaded: false};
    const loadFavoritefilmsActions = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: mockFilms
    };

    expect(appData(state, loadFavoritefilmsActions))
      .toEqual({favoriteFilms: mockFilms, isFavoriteFilmsLoaded: true});
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilms();

    apiMock
      .onGet(AdditionalUrl.FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmsLoader = fetchPromoFilm();

    apiMock
      .onGet(`${AdditionalUrl.FILMS}/promo`)
      .reply(200, {fake: true});

    return promoFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API call to /films/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 8;
    const filmsLoader = fetchFilm(id);

    apiMock
      .onGet(`${AdditionalUrl.FILMS}/${id}`)
      .reply(200, {fake: true});

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 15;
    const commentsLoader = fetchComments(id);

    apiMock
      .onGet(`${AdditionalUrl.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to post to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 15;
    const rating = 9;
    const comment = `Cool`;
    const commentsLoader = fetchAddComment(id, {rating, comment});

    apiMock
      .onPost(`${AdditionalUrl.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(AdditionalUrl.FAVORITE)
      .reply(200, [{fake: true}]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 18;
    const status = 1;
    const changeFilmStatusLoader = fetchChangeFilmStatus(id, status);

    apiMock
      .onPost(`${AdditionalUrl.FAVORITE}/${id}/${status}`)
      .reply(200, {fake: true});

    return changeFilmStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

});
