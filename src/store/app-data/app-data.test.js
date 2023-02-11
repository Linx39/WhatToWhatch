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
  fetchAddFavoriteFilm
} from '../api-actions';
import {AdditionalUrl} from '../../const';

const api = createAPI(() => {});
const films = [
  {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 101,
    genre: `Comedy`,
    released: 2012,
    isFavorite: false
  },
  {
    id: 2,
    name: `Bohemian Rhapsody`,
    posterImage: `img/bohemian-rhapsody.jpg`,
    previewImage: `img/bohemian-rhapsody.jpg`,
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 102,
    genre: `Drama`,
    released: 2013,
    isFavorite: false
  },
];

const film = {
  id: 3,
  name: `Macbeth`,
  posterImage: `img/macbeth.jpg`,
  previewImage: `img/macbeth.jpg`,
  backgroundImage: `img/macbeth.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://v.moele.me/v/987/8977205_a-01.webm`,
  previewVideoLink: `https://v.moele.me/v/987/8977205_a-01.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 3,
  scoresCount: 243,
  director: `3Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 103,
  genre: `Triller`,
  released: 2014,
  isFavorite: false
};

const comments = [
  {
    id: 1,
    user: {
      id: 1,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2016-12-24`
  },
  {
    id: 2,
    user: {
      id: 1,
      name: `Bill Goodykoontz`
    },
    rating: 8.0,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    date: `2015-11-18`
  },
  {
    id: 3,
    user: {
      id: 1,
      name: `Amanda Greever`
    },
    rating: 8.0,
    comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    date: `2015-11-18`
  },
];

describe(`Reducer 'appData' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appData(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update films by load films`, () => {
    const state = {films: [], isFilmsLoaded: false};
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films
    };

    expect(appData(state, loadFilmsAction))
      .toEqual({films, isFilmsLoaded: true});
  });

  it(`Reducer should update promoFilm by load promoFilm`, () => {
    const state = {promoFilm: {}, isPromoFilmLoaded: false};
    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    };

    expect(appData(state, loadPromoFilmAction))
      .toEqual({promoFilm: film, isPromoFilmLoaded: true});
  });

  it(`Reducer should update film by load film`, () => {
    const state = {film: {}, isFilmLoaded: false};
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: film
    };

    expect(appData(state, loadFilmAction))
      .toEqual({film, isFilmLoaded: true});
  });

  it(`Reducer should update comments by load comments`, () => {
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
    const loadFavoriteFilmsAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films
    };

    expect(appData(state, loadFavoriteFilmsAction))
      .toEqual({favoriteFilms: films, isFavoriteFilmsLoaded: true});
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
    const isPromo = true; // для false
    const addFavoriteFilmLoader = fetchAddFavoriteFilm(id, status, isPromo);

    apiMock
      .onPost(`${AdditionalUrl.FAVORITE}/${id}/${status}`)
      .reply(200, {fake: true});

    return addFavoriteFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: {fake: true},
        });
      });
  });

});
