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
import {adaptFilmToClient, adaptFilmsToClient} from '../adapter';

const api = createAPI(() => {});

describe(`Reducer 'appData' should work correctly`, () => {
  const mockFilms = [`fake-film-1`, `fake-film-2`];
  const mockFilm = {fake: `fake-film`};
  const mockComments = [`fake-comment-1`, `fake-comment-2`];
  const mockError = `fake-Error`;

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appData(undefined, {}))
      .toEqual(initialState);
  });


  it(`Reducer should update films by load films`, () => {
    const state = {filmsData: initialState.filmsData};
    const loadfilmsActions = {
      type: ActionType.LOAD_FILMS,
      payload: {data: mockFilms}
    };

    expect(appData(state, loadfilmsActions))
      .toEqual({filmsData: {data: mockFilms, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload films`, () => {
    const state = {filmsData: initialState.filmsData};
    const loadfilmsActions = {
      type: ActionType.LOAD_FILMS,
      payload: {error: mockError}
    };

    expect(appData(state, loadfilmsActions))
      .toEqual({filmsData: {data: [], isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded films`, () => {
    const state = {filmsData: {data: mockFilms, isLoading: false, error: null}};
    const resetLoadedFilmsAction = {
      type: ActionType.RESET_LOADED_FILMS,
    };

    expect(appData(state, resetLoadedFilmsAction))
      .toEqual({filmsData: initialState.filmsData});
  });


  it(`Reducer should update promoFilm by load promoFilm`, () => {
    const state = {promoFilmData: initialState.promoFilmData};
    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {data: mockFilm}
    };

    expect(appData(state, loadPromoFilmAction))
      .toEqual({promoFilmData: {data: mockFilm, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload promoFilm`, () => {
    const state = {promoFilmData: initialState.promoFilmData};
    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {error: mockError}
    };

    expect(appData(state, loadPromoFilmAction))
      .toEqual({promoFilmData: {data: {}, isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded PromoFilm`, () => {
    const state = {promoFilmData: {data: mockFilm, isLoading: false, error: null}};
    const resetLoadedPromoFilmAction = {
      type: ActionType.RESET_LOADED_PROMO_FILM,
    };

    expect(appData(state, resetLoadedPromoFilmAction))
      .toEqual({promoFilmData: initialState.promoFilmData});
  });


  it(`Reducer should update film by load film`, () => {
    const state = {filmData: {data: {}, isLoading: true, error: null}};
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: {data: mockFilm}
    };

    expect(appData(state, loadFilmAction))
      .toEqual({filmData: {data: mockFilm, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload film`, () => {
    const state = {filmData: {data: {}, isLoading: true, error: null}};
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: {error: mockError}
    };

    expect(appData(state, loadFilmAction))
      .toEqual({filmData: {data: {}, isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded film`, () => {
    const state = {filmData: {data: mockFilm, isLoading: false, error: null}};
    const resetLoadedFilmAction = {
      type: ActionType.RESET_LOADED_FILM,
    };

    expect(appData(state, resetLoadedFilmAction))
      .toEqual({filmData: initialState.filmData});
  });


  it(`Reducer should update comments by load comments`, () => {
    const state = {commentsData: {data: [], isLoading: true, error: null}};
    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: {data: mockComments}
    };

    expect(appData(state, loadCommentsAction))
      .toEqual({commentsData: {data: mockComments, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload comments`, () => {
    const state = {commentsData: {data: [], isLoading: true, error: null}};
    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: {error: mockError}
    };

    expect(appData(state, loadCommentsAction))
      .toEqual({commentsData: {data: [], isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded comments`, () => {
    const state = {commentsData: {data: mockComments, isLoading: false, error: null}};
    const resetLoadedCommentsAction = {
      type: ActionType.RESET_LOADED_COMMENTS,
    };

    expect(appData(state, resetLoadedCommentsAction))
      .toEqual({commentsData: initialState.commentsData});
  });


  it(`Reducer should update favoriteFilms by load favoriteFilms`, () => {
    const state = {favoriteFilmsData: {data: [], isLoading: true, error: null}};
    const loadFavoritefilmsActions = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: {data: mockFilms}
    };

    expect(appData(state, loadFavoritefilmsActions))
      .toEqual({favoriteFilmsData: {data: mockFilms, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload favoriteFilms`, () => {
    const state = {favoriteFilmsData: {data: [], isLoading: true, error: null}};
    const loadFavoritefilmsActions = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: {error: mockError}
    };

    expect(appData(state, loadFavoritefilmsActions))
      .toEqual({favoriteFilmsData: {data: [], isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded favoriteFilms`, () => {
    const state = {favoriteFilmsData: {data: mockFilms, isLoading: false, error: null}};
    const resetLoadedFavoriteFilmsAction = {
      type: ActionType.RESET_LOADED_FAVORITE_FILMS,
    };

    expect(appData(state, resetLoadedFavoriteFilmsAction))
      .toEqual({favoriteFilmsData: initialState.favoriteFilmsData});
  });
});


describe(`Async operation work correctly`, () => {
  const fakeResponse = {fake: true};
  const fakeAdaptFilmsToClient = jest.fn((data) => adaptFilmsToClient(data));
  const fakeAdaptFilmToClient = jest.fn((data) => adaptFilmToClient(data));

  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilms();

    apiMock
      .onGet(AdditionalUrl.FILMS)
      .reply(200, [fakeResponse]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: {data: fakeAdaptFilmsToClient([fakeResponse])},
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(`${AdditionalUrl.FILMS}/promo`)
      .reply(200, fakeResponse);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: {data: fakeAdaptFilmToClient([fakeResponse])},
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
      .reply(200, fakeResponse);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: {data: fakeAdaptFilmToClient([fakeResponse])},
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
      .reply(200, [fakeResponse]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: {data: [fakeResponse]},
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
      .reply(200, [fakeResponse]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: {data: [fakeResponse]},
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(AdditionalUrl.FAVORITE)
      .reply(200, [fakeResponse]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: {data: fakeAdaptFilmsToClient([fakeResponse])},
        });
      });
  });

  it(`Should make a correct API call to /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 18;
    const status = 1;
    const loadData = jest.fn();
    const changeFilmStatusLoader = fetchChangeFilmStatus(id, status, loadData);

    apiMock
      .onPost(`${AdditionalUrl.FAVORITE}/${id}/${status}`)
      .reply(200, fakeResponse);

    return changeFilmStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            loadData({data: fakeAdaptFilmToClient(fakeResponse)}));
      });
  });
});
