import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {
  initialState,
  appDataReducer,
  loadFilms,
  loadPromoFilm,
  loadFilm,
  loadComments,
  loadFavoriteFilms,
  resetLoadedFilms,
  resetLoadedPromoFilm,
  resetLoadedFilm,
  resetLoadedComments,
  resetLoadedFavoriteFilms
} from './app-data';
import {
  fetchFilms,
  fetchPromoFilm,
  fetchFilm,
  fetchComments,
  fetchAddComment,
  fetchFavoriteFilms,
  fetchChangeFilmStatus
} from '../api-actions';
import {ApiPath} from '../../const';
import {adaptFilmToClient, adaptFilmsToClient} from '../adapter';

const api = createAPI(() => {});

describe(`appDataReducer should work correctly`, () => {
  const mockFilms = [`fake-film-1`, `fake-film-2`];
  const mockFilm = {fake: `fake-film`};
  const mockComments = [`fake-comment-1`, `fake-comment-2`];
  const mockError = `fake-Error`;

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appDataReducer(undefined, {}))
      .toEqual(initialState);
  });


  it(`Reducer should update films by load films`, () => {
    const state = {filmsData: initialState.filmsData};
    const loadfilmsActions = {
      type: loadFilms.type,
      payload: {data: mockFilms}
    };

    expect(appDataReducer(state, loadfilmsActions))
      .toEqual({filmsData: {data: mockFilms, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload films`, () => {
    const state = {filmsData: initialState.filmsData};
    const loadfilmsActions = {
      type: loadFilms.type,
      payload: {error: mockError}
    };

    expect(appDataReducer(state, loadfilmsActions))
      .toEqual({filmsData: {data: [], isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded films`, () => {
    const state = {filmsData: {data: mockFilms, isLoading: false, error: null}};
    const resetLoadedFilmsAction = {
      type: resetLoadedFilms.type,
    };

    expect(appDataReducer(state, resetLoadedFilmsAction))
      .toEqual({filmsData: initialState.filmsData});
  });


  it(`Reducer should update promoFilm by load promoFilm`, () => {
    const state = {promoFilmData: initialState.promoFilmData};
    const loadPromoFilmAction = {
      type: loadPromoFilm.type,
      payload: {data: mockFilm}
    };

    expect(appDataReducer(state, loadPromoFilmAction))
      .toEqual({promoFilmData: {data: mockFilm, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload promoFilm`, () => {
    const state = {promoFilmData: initialState.promoFilmData};
    const loadPromoFilmAction = {
      type: loadPromoFilm.type,
      payload: {error: mockError}
    };

    expect(appDataReducer(state, loadPromoFilmAction))
      .toEqual({promoFilmData: {data: {}, isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded PromoFilm`, () => {
    const state = {promoFilmData: {data: mockFilm, isLoading: false, error: null}};
    const resetLoadedPromoFilmAction = {
      type: resetLoadedPromoFilm.type,
    };

    expect(appDataReducer(state, resetLoadedPromoFilmAction))
      .toEqual({promoFilmData: initialState.promoFilmData});
  });


  it(`Reducer should update film by load film`, () => {
    const state = {filmData: {data: {}, isLoading: true, error: null}};
    const loadFilmAction = {
      type: loadFilm.type,
      payload: {data: mockFilm}
    };

    expect(appDataReducer(state, loadFilmAction))
      .toEqual({filmData: {data: mockFilm, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload film`, () => {
    const state = {filmData: {data: {}, isLoading: true, error: null}};
    const loadFilmAction = {
      type: loadFilm.type,
      payload: {error: mockError}
    };

    expect(appDataReducer(state, loadFilmAction))
      .toEqual({filmData: {data: {}, isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded film`, () => {
    const state = {filmData: {data: mockFilm, isLoading: false, error: null}};
    const resetLoadedFilmAction = {
      type: resetLoadedFilm.type,
    };

    expect(appDataReducer(state, resetLoadedFilmAction))
      .toEqual({filmData: initialState.filmData});
  });


  it(`Reducer should update comments by load comments`, () => {
    const state = {commentsData: {data: [], isLoading: true, error: null}};
    const loadCommentsAction = {
      type: loadComments.type,
      payload: {data: mockComments}
    };

    expect(appDataReducer(state, loadCommentsAction))
      .toEqual({commentsData: {data: mockComments, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload comments`, () => {
    const state = {commentsData: {data: [], isLoading: true, error: null}};
    const loadCommentsAction = {
      type: loadComments.type,
      payload: {error: mockError}
    };

    expect(appDataReducer(state, loadCommentsAction))
      .toEqual({commentsData: {data: [], isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded comments`, () => {
    const state = {commentsData: {data: mockComments, isLoading: false, error: null}};
    const resetLoadedCommentsAction = {
      type: resetLoadedComments.type,
    };

    expect(appDataReducer(state, resetLoadedCommentsAction))
      .toEqual({commentsData: initialState.commentsData});
  });


  it(`Reducer should update favoriteFilms by load favoriteFilms`, () => {
    const state = {favoriteFilmsData: {data: [], isLoading: true, error: null}};
    const loadFavoritefilmsActions = {
      type: loadFavoriteFilms.type,
      payload: {data: mockFilms}
    };

    expect(appDataReducer(state, loadFavoritefilmsActions))
      .toEqual({favoriteFilmsData: {data: mockFilms, isLoading: false, error: null}});
  });

  it(`Reducer should update error by unload favoriteFilms`, () => {
    const state = {favoriteFilmsData: {data: [], isLoading: true, error: null}};
    const loadFavoritefilmsActions = {
      type: loadFavoriteFilms.type,
      payload: {error: mockError}
    };

    expect(appDataReducer(state, loadFavoritefilmsActions))
      .toEqual({favoriteFilmsData: {data: [], isLoading: false, error: mockError}});
  });

  it(`Reducer should reset loaded favoriteFilms`, () => {
    const state = {favoriteFilmsData: {data: mockFilms, isLoading: false, error: null}};
    const resetLoadedFavoriteFilmsAction = {
      type: resetLoadedFavoriteFilms.type,
    };

    expect(appDataReducer(state, resetLoadedFavoriteFilmsAction))
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
      .onGet(ApiPath.FILMS)
      .reply(200, [fakeResponse]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: loadFilms.type,
          payload: {data: fakeAdaptFilmsToClient([fakeResponse])},
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(`${ApiPath.FILMS}/promo`)
      .reply(200, fakeResponse);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: loadPromoFilm.type,
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
      .onGet(`${ApiPath.FILMS}/${id}`)
      .reply(200, fakeResponse);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: loadFilm.type,
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
      .onGet(`${ApiPath.COMMENTS}/${id}`)
      .reply(200, [fakeResponse]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: loadComments.type,
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
      .onPost(`${ApiPath.COMMENTS}/${id}`)
      .reply(200, [fakeResponse]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: loadComments.type,
          payload: {data: [fakeResponse]},
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(ApiPath.FAVORITE)
      .reply(200, [fakeResponse]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: loadFavoriteFilms.type,
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
      .onPost(`${ApiPath.FAVORITE}/${id}/${status}`)
      .reply(200, fakeResponse);

    return changeFilmStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            loadData({data: fakeAdaptFilmToClient(fakeResponse)}));
      });
  });
});
