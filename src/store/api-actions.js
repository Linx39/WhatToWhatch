import {
  loadFilms,
  loadFilm,
  loadPromoFilm,
  loadComments,
  loadFavoriteFilms,
  requireAuthorization,
  loadUserData,
} from './action';
import {FILMS_DATA_DEFAULT, FILM_DATA_DEFAULT, COMMENTS_DATA_DEFAULT} from './app-data/app-data';
import {adaptFilmToClient, adaptUserToClient} from './adapter';
import {AuthorizationStatus, AdditionalUrl, ServerResponse} from '../const';

const getError = (err) => {
  const status = err.response ? err.response.status : null;

  switch (status) {
    case ServerResponse.BAD_REQUEST:
      return ServerResponse.BAD_REQUEST;
    case ServerResponse.UNAUTHORIZED:
      return ServerResponse.UNAUTHORIZED;
    case ServerResponse.PAGE_NOT_FOUND:
      return ServerResponse.PAGE_NOT_FOUND;
    default:
      return ServerResponse.NOT_RESPONSE;
  }
};

const adaptFilmsToClient = (data) => data.map((item) => adaptFilmToClient(item));

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FILMS)
    .then(({data}) => {
      dispatch(loadFilms({...FILMS_DATA_DEFAULT, data: adaptFilmsToClient(data), isLoading: false}));
    })
    .catch((err) => {
      dispatch(loadFilms({...FILMS_DATA_DEFAULT, isLoading: false, error: getError(err)}));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/promo`)
    .then(({data}) => {
      dispatch(loadPromoFilm({...FILM_DATA_DEFAULT, data: adaptFilmToClient(data), isLoading: false}));
    })
    .catch((err) => {
      dispatch(loadPromoFilm({...FILM_DATA_DEFAULT, isLoading: false, error: getError(err)}));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(loadFilm({...FILM_DATA_DEFAULT, data: adaptFilmToClient(data), isLoading: false}));
    })
    .catch((err) => {
      dispatch(loadFilm({...FILM_DATA_DEFAULT, isLoading: false, error: getError(err)}));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadComments({...COMMENTS_DATA_DEFAULT, data, isLoading: false}));
    })
    .catch((err) => {
      dispatch(loadComments({...COMMENTS_DATA_DEFAULT, isLoading: false, error: getError(err)}));
    })
);

export const fetchAddComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(loadComments({...COMMENTS_DATA_DEFAULT, data, isLoading: false}));
    })
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavoriteFilms({...FILMS_DATA_DEFAULT, data: adaptFilmsToClient(data), isLoading: false}));
    })
    .catch((err) => {
      dispatch(loadFavoriteFilms({...FILMS_DATA_DEFAULT, isLoading: false, error: getError(err)}));
    })
);

export const fetchChangeFilmStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.FAVORITE}/${id}/${status}`)
    .then(({data}) => adaptFilmToClient(data))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGIN)
    .then(({data}) => {
      const user = adaptUserToClient(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(user));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AdditionalUrl.LOGIN, {email, password})
    .then(({data}) => {
      const user = adaptUserToClient(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(user));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGOUT)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(loadUserData({}));
    })
);
